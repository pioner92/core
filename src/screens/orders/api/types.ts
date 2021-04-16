export interface IGetOrdersResponse {
  orders: IOrderItem[];
}

export interface IOrderItem {
  rating?: number;
  cost: number;
  order_id: number;
  status_id: number;
  status_name: string;
  createdon: string;
  street: string;
  city: string;
  house_num: string;
  flat_num: string;
  container_color: string;
  status_wrapper_color: string;
  status_title_color: string;
}

export interface IGetOrderDataRequest {
  order_id: number;
}
export interface IGetOrderDataResponse {
  cost: number;
  order_id: number;
  status_id: number;
  status_color: string;
  status_name: string;
  delivery_id: number;
  delivery_name: string;
  payment_id: number;
  payment_name: string;
  createdon: string;
  comment: null;
  city: string;
  org_id: string;
  street: string;
  floor: string;
  region: {
    latitude: string;
    longitude: string;
  };
  house_num: string;
  flat_num: string;
  entrance: string;
  promocode: string;
  discount: string;
  rating: null;
  bonus_writeoff: string;
  bonus_accrual: string;
  products: [
    {
      title: string;
      product_id: number;
      count: number;
      price: number;
      options: {
        childs: {
          ingredients: [
            {
              id: number;
            },
          ];
          additives: [
            {
              id: number;
              count: number;
              title: string;
            },
            {
              id: number;
              count: number;
              title: string;
            },
          ];
          size: [];
          type: [];
          rating: [];
        };
      };
      img_url: string;
      weight: number;
    },
  ];
}
