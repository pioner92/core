import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import {AsyncActionsCatalog} from '../store/async-actions-catalog';
import {useTypedSelector} from '../../../system/hooks/use-typed-selector';
import {IBannerItem, IProductItem} from '../types/types';
import {useBottomSheetMenu} from '../../../components/bottom-sheet-menu/bottom-sheet-menu-context';
import {SortVariant} from '../../../components/modal/modal-sorting';
import {sortingHelper} from '../../../system/helpers/sorting';
import {CatalogWithTabBar} from './components/catalog-with-top-bar/catalog-with-top-bar';

export const Catalog = () => {
  const dispatch = useDispatch();
  const bottomModal = useBottomSheetMenu();

  const products = useTypedSelector(state => state.catalog.products);
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
  const [selectedBanner, setSelectedBanner] = useState<IBannerItem>(
    {} as IBannerItem,
  );

  const openSearch = useCallback(() => {
    setIsVisibleSearch(true);
  }, []);
  const closeSearch = useCallback(() => {
    setIsVisibleSearch(false);
  }, []);

  const onSorting = (variant: keyof typeof SortVariant) => {
    setFilteredProductList(sortingHelper(products, variant));
  };

  const onPressSearch = useCallback(() => {
    openSearch();
  }, []);

  const onPressBanner = (item: IBannerItem) => {
    setSelectedBanner(item);
    bottomModal.show();
  };

  useEffect(() => {
    setFilteredProductList(products);
  }, [products]);

  useEffect(() => {
    dispatch(
      AsyncActionsCatalog.getHomepageData({
        rest_id: +orgId,
        order_type: +orderType,
        page: 1,
      }),
    );
    dispatch(
      AsyncActionsCatalog.getCategories({
        org_id: +orgId,
        order_type: +orderType,
      }),
    );
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      {/*<BannerList onPress={onPressBanner} items={banners} />*/}
      {/*<ParamsRow onPressSearch={onPressSearch} />*/}
      <CatalogWithTabBar/>
      {/*<ModalSorting onSorting={onSorting} />*/}
      {/*<ModalSearch isVisible={isVisibleSearch} hide={closeSearch} />*/}
      {/*{isFocused ? <BottomSheetModalBanners item={selectedBanner} /> : null}*/}
      {/*<BottomSheetModalBanners item={selectedBanner} />*/}
    </SafeAreaView>
  );
};
