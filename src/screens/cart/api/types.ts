export interface ICartGetDataRequest {
  order_type: number;
  id_org: number;
}

export interface ICartGetDataResponse {
  promocodes: null;
  total_cost: number;
  total_count: number;
  discount_cost: null;
  actual_discount: null;
  min_count_cost: number;
  delivery_cost: number;
  products: ICartGetDataProductResponse[];
}

interface ICartGetDataProductResponse {
  key: string;
  additional_cost: null;
  total_cost: null;
  id: null;
  price: null;
  weight: null;
  count: null;
  max_count: null;
  img_url: null;
  title: null;
  desc: null;
  options: {
    childs: {
      additives: ICartGetDataItemResponse[];
      ingredient: ICartGetDataItemResponse[];
      size: ICartGetDataItemResponse[];
      type: ICartGetDataItemResponse[];
    };
  };
}

interface ICartGetDataItemResponse {
  id: number;
  count: number;
  title: string;
}

export interface ICartAddOrderRequest {
  id: 0;
  count: 0;
  order_type: 1;
  id_org: 3691;
  additives: ICartAddOrderItem[];
  size: ICartAddOrderItem[];
  type: ICartAddOrderItem[];
  ingredients: ICartAddOrderItem[];
}

interface ICartAddOrderItem {
  id: 0;
  count: 0;
}
