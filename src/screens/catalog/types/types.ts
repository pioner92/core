export interface IBannerItem {
  id: string;
  title: string;
  content: string;
  date_end: number;
  product_id: string;
  promocode: string;
  type: string;
  discount: string;
  img_big: string;
  img_small: string;
  url: string;
}

export interface IProductItem {
  id: string;
  title: string;
  parent: string;
  allRating: string;
  article: number;
  rating: number;
  price: number;
  desc: string;
  content: string;
  new: number;
  popular: number;
  favorite: number;
  img_big: string;
  img_small: string;
  bonus_add: number;
  times_bought: number;
  remains_count: number;
  remains_text: string;
  barcode: string;
  pieces_per_package: number;
  energy: IEnergyItems;
  tags_list: [];
  additives: [];
  ingredients: [];
  types: [];
  analogs: [];
}

export interface IEnergyItems {
  energy_size: number;
  energy_value: number;
  energy_allergens: number;
  energy_carbohydrates: number;
  energy_protein: number;
  energy_oils: number;
}

export interface ICategoryItem {
  id: string;
  parent: string;
  title: string;
}

export type TGetBannerListResponse = Array<IBannerItem>;
