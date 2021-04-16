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

export interface ICartGetDataProductResponse {
  key: string;
  additional_cost: number;
  total_cost: number;
  id: number;
  price: number;
  weight: number;
  count: number;
  max_count: number;
  img_url: string;
  title: string;
  desc: string;
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
  id: number;
  count: number;
  order_type: number;
  id_org: number;
  additives: ICartAddOrderItem[];
  size: ICartAddOrderItem[];
  type: ICartAddOrderItem[];
  ingredients: ICartAddOrderItem[];
}

interface ICartAddOrderItem {
  id: number;
  count: number;
}
