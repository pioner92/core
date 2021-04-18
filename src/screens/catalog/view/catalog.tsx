import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Animated,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {useTypedSelector} from '../../../system/hooks/use-typed-selector';
import {ProductList} from './components/product-list/product-list';
import {TabView} from 'react-native-tab-view';
import {TabBarComponent} from './components/tab-bar/tab-bar-component';
import {BannerList} from '../../../components/baner-list/banner-list';
import {ParamsRow} from './components/params-row/params-row';
import {IBannerItem, IProductItem} from '../types/types';
import {
  ModalSorting,
  SortVariant,
} from '../../../components/modal/modal-sorting';
import {sortingHelper} from '../../../system/helpers/sorting';
import {ModalSearch} from '../../../components/modal/modal-search';
import {AsyncActionsCatalog} from '../store/async-actions-catalog';
import {useDispatch} from 'react-redux';
import {IModalMethods} from '../../../components/modal/modal-with-component';
import {useBottomSheetMenu} from '../../../components/bottom-sheet-menu/bottom-sheet-modal-provider';
import {BottomSheetModalBannersContent} from './components/bottom-sheet-modal-banners-content';
import {BottomSheetOrderTypeContent} from '../../delivery/view/components/bottom-sheet-order-type-content';
import {useNavigation} from '@react-navigation/native';
import {TNavigationPropsOrderTypeModal} from '../../delivery/view/select-city';

export const Catalog: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation<TNavigationPropsOrderTypeModal>();

  const categories = useTypedSelector(state => state.catalog.categories);
  const products = useTypedSelector(state => state.catalog.products);
  const banners = useTypedSelector(state => state.catalog.banners);
  const orderType = useTypedSelector(
    state => state.delivery.selectedOrderTypeId,
  );
  const orgId = useTypedSelector(
    state => state.delivery.selectedOrganisationId,
  );

  const [filteredProductList, setFilteredProductList] = useState<
    IProductItem[]
  >(products);

  const [isVisibleSearch, setIsVisibleSearch] = useState(false);

  const {close, show} = useBottomSheetMenu();

  const [index, setIndex] = React.useState(0);
  const [routes, setRoutes] = React.useState<
    Array<{title: string; key: string}>
  >([]);
  const [heightHeader, setHeightHeader] = useState(204);

  const refModal = useRef<IModalMethods | null>(null);

  const scrollY = useRef(new Animated.Value(0)).current;

  const filteredProducts = (id: string) => {
    return filteredProductList.filter(el => el.parent === id);
  };

  const onPressSorting = useCallback(() => {
    refModal.current?.show();
  }, []);

  const onPressSetOrderType = () => {
    show({
      Component: () => (
        <BottomSheetOrderTypeContent navigate={navigate} />
      ),
    });
  };

  const openSearch = useCallback(() => {
    setIsVisibleSearch(true);
  }, []);

  const closeSearch = useCallback(() => {
    setIsVisibleSearch(false);
  }, []);

  const onSorting = useCallback(
    (variant: keyof typeof SortVariant) => {
      setFilteredProductList(sortingHelper(products, variant));
    },
    [products],
  );

  const onPressBanner = useCallback((item: IBannerItem) => {
    show({
      Component: () => <BottomSheetModalBannersContent item={item} />,
      snapPoints: ['50%'],
    });
  }, []);

  const renderScene = ({route}: {route: typeof routes[0]}) => {
    return (
      <ProductList
        contentContainerStyle={{paddingTop: heightHeader}}
        reference={scrollY}
        componentWrapperStyle={{marginTop: 0}}
        products={filteredProducts(route.key)}
      />
    );
  };

  const y = scrollY.interpolate({
    inputRange: [0, heightHeader],
    outputRange: [0, -heightHeader],
    extrapolateRight: 'clamp',
  });

  const opacity = scrollY.interpolate({
    inputRange: [0, heightHeader - 20],
    outputRange: [1, 0],
    extrapolateRight: 'clamp',
  });

  const stylesTabBar = {
    top: heightHeader,
    zIndex: 1,
    position: 'absolute',
    transform: [{translateY: y}],
    width: '100%',
  };

  useEffect(() => {
    setFilteredProductList(products);
  }, [products]);

  useEffect(() => {
    dispatch(
      AsyncActionsCatalog.getCategories({
        org_id: +orgId,
        order_type: +orderType,
      }),
    );
    dispatch(
      AsyncActionsCatalog.getHomepageData({
        rest_id: +orgId,
        order_type: +orderType,
        page: 1,
      }),
    );
  }, [orderType, orgId]);

  useLayoutEffect(() => {
    setRoutes(categories.map(el => ({key: el.id, title: el.title})));
  }, [categories]);

  const stylesHeader = useMemo(
    () => [styles.header, {transform: [{translateY: y}], opacity: opacity}],
    [opacity, y],
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Animated.View style={stylesHeader}>
          <View
            onLayout={props =>
              setHeightHeader(props.nativeEvent.layout.height)
            }>
            <BannerList items={banners} onPress={onPressBanner} />
            <ParamsRow
              onPressSorting={onPressSorting}
              onPressSetAddress={onPressSetOrderType}
              onPressSearch={openSearch}
            />
          </View>
        </Animated.View>
        <TabView
          renderTabBar={props => (
            <>
              {routes.length > 0 ? (
                <TabBarComponent stylesTabBar={stylesTabBar} {...props} />
              ) : null}
            </>
          )}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: Dimensions.get('window').width}}
          lazy
          lazyPreloadDistance={2}
        />
        <ModalSorting reference={refModal} onSorting={onSorting} />
        <ModalSearch isVisible={isVisibleSearch} hide={closeSearch} />
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  header: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
  },
});
