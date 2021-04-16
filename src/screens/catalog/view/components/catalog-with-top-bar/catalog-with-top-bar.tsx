import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {useTypedSelector} from '../../../../../system/hooks/use-typed-selector';
import {ProductList} from '../product-list/product-list';
import {TabView} from 'react-native-tab-view';
import {TabBarComponent} from './tab-bar-component';
import {BannerList} from '../../../../../components/baner-list/banner-list';
import {ParamsRow} from '../params-row/params-row';
import {BottomSheetModalBanners} from '../bottom-sheet-modal-banners';
import {IBannerItem, IProductItem} from '../../../types/types';
import {useBottomSheetMenu} from '../../../../../components/bottom-sheet-menu/bottom-sheet-menu-context';
import {
  ModalSorting,
  SortVariant,
} from '../../../../../components/modal/modal-sorting';
import {sortingHelper} from '../../../../../system/helpers/sorting';
import {ModalSearch} from '../../../../../components/modal/modal-search';

export const CatalogWithTabBar = () => {
  const categories = useTypedSelector(state => state.catalog.categories);
  const products = useTypedSelector(state => state.catalog.products);
  const banners = useTypedSelector(state => state.catalog.banners);

  const [filteredProductList, setFilteredProductList] = useState<
    IProductItem[]
  >(products);

  const [isVisibleSearch, setIsVisibleSearch] = useState(false);

  const [selectedBanner, setSelectedBanner] = useState<IBannerItem>(
    {} as IBannerItem,
  );
  const bottomModal = useBottomSheetMenu();

  const [index, setIndex] = React.useState(0);
  const [routes, setRoutes] = React.useState([{title: '', key: '1'}]);
  const [heightHeader, setHeightHeader] = useState(0);

  const scrollY = useRef(new Animated.Value(0)).current;

  const filteredProducts = (id: string) => {
    return filteredProductList.filter(el => el.parent === id);
  };

  const openSearch = useCallback(() => {
    setIsVisibleSearch(true);
  }, []);
  const closeSearch = useCallback(() => {
    setIsVisibleSearch(false);
  }, []);
  const onSorting = (variant: keyof typeof SortVariant) => {
    setFilteredProductList(sortingHelper(products, variant));
  };

  const onPressBanner = (item: IBannerItem) => {
    setSelectedBanner(item);
    bottomModal.show();
  };

  const renderScene = ({route}: {route: typeof routes[0]}) => {
    return (
      <ProductList
        contentContainerStyle={{paddingTop: heightHeader}}
        reference={scrollY}
        componentWrapperStyle={{marginTop: 50}}
        products={filteredProducts(route.key)}
      />
    );
  };

  const y = scrollY.interpolate({
    inputRange: [0, heightHeader],
    outputRange: [0, -heightHeader],
    extrapolateRight: 'clamp',
  });

  const op = scrollY.interpolate({
    inputRange: [0, heightHeader],
    outputRange: [1, 0],
    extrapolateRight: 'clamp',
  });

  const stylesTabBar = useMemo(
    () => ({
      top: heightHeader,
      zIndex: 1,
      position: 'absolute',
      transform: [{translateY: y}],
      width: '100%',
    }),

    [heightHeader, y],
  );

  useEffect(() => {
    setRoutes(categories.map(el => ({key: el.id, title: el.title})));
  }, [categories]);

  const stylesHeader = useMemo(
    () => [styles.header, {transform: [{translateY: y}], opacity: op}],
    [op, y],
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <Animated.View style={stylesHeader}>
        <View
          onLayout={props => setHeightHeader(props.nativeEvent.layout.height)}>
          <BannerList items={banners} onPress={onPressBanner} />
          <ParamsRow onPressSearch={openSearch} />
        </View>
      </Animated.View>
      <TabView
        renderTabBar={props => (
          <TabBarComponent
            stylesTabBar={stylesTabBar}
            categories={categories}
            {...props}
          />
        )}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: Dimensions.get('window').width}}
        lazy
        lazyPreloadDistance={2}
      />
      <BottomSheetModalBanners item={selectedBanner} />
      <ModalSorting onSorting={onSorting} />
      <ModalSearch isVisible={isVisibleSearch} hide={closeSearch} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    // top: Platform.OS === 'ios' ? 25 : 0,
    zIndex: 1,
    position: 'absolute',
    width: '100%',
  },
});
