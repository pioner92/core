import {IProductItem} from '../../screens/catalog/types/types';
import {SortVariant} from '../../components/modal/modal-sorting';

export const sortingHelper = (
  products: IProductItem[],
  variant: keyof typeof SortVariant,
): IProductItem[] => {
  switch (variant) {
    case SortVariant.priceLow:
      return [...products].sort((prev, next) => prev.price - next.price);
    case SortVariant.priceTop:
      return [...products].sort((prev, next) => next.price - prev.price);
    case SortVariant.favorite:
      return [...products].sort((prev, next) => next.favorite - prev.favorite);
    case SortVariant.rating:
      return [...products].sort((prev, next) => next.rating - prev.rating);
    default:
      return products;
  }
};
