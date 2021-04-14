import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import {AsyncActionsCatalog} from '../store/async-actions-catalog';
import {BannerList} from '../../../components/baner-list/banner-list';
import {useTypedSelector} from '../../../system/hooks/use-typed-selector';
import {IBannerItem, ICategoryItem, IProductItem} from '../types/types';
import {useBottomSheetMenu} from '../../../components/bottom-sheet-menu/bottom-sheet-menu-context';
import {BottomSheetModalBanners} from './components/bottom-sheet-modal-banners';
import {ProductList} from './components/product-list/product-list';
import {CategoryList} from './components/category-list/category-list';
import {ParamsRow} from './components/params-row/params-row';
import {
  ModalSorting,
  SortVariant,
} from '../../../components/modal/modal-sorting';
import {ModalSearch} from '../../../components/modal/modal-search';
import {sortingHelper} from '../../../system/helpers/sorting';

export const Catalog = () => {
  const dispatch = useDispatch();
  const bottomModal = useBottomSheetMenu();

  const banners = useTypedSelector(state => state.catalog.banners);
  const products = useTypedSelector(state => state.catalog.products);
  const categories = useTypedSelector(state => state.catalog.categories);
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

  const onSelectCategory = useCallback(
    (category: ICategoryItem) => {
      const newArrProducts = products.filter(el => el.parent === category.id);
      setFilteredProductList(newArrProducts);
    },
    [products],
  );

  useEffect(() => {
    setFilteredProductList(products);
  }, [products]);

  useEffect(() => {
    dispatch(
      AsyncActionsCatalog.getHomepageData({
        rest_id: 1805,
        order_type: 1,
        page: 1,
      }),
    );
    dispatch(AsyncActionsCatalog.getCategories({org_id: 1810, order_type: 1}));
  }, [dispatch]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <BannerList onPress={onPressBanner} items={banners} />
      <ParamsRow onPressSearch={onPressSearch} />
      <CategoryList onSelect={onSelectCategory} categories={categories} />
      <ProductList products={filteredProductList} />
      <ModalSorting onSorting={onSorting} />
      <ModalSearch isVisible={isVisibleSearch} hide={closeSearch} />
      <BottomSheetModalBanners item={selectedBanner} />
    </SafeAreaView>
  );
};
