export interface IAddressItem {
  country: string;
  city: string;
  street: string;
  house_num: string;
  flat_num: string;
  entreance: string;
  floor: string;
  doorphone: string;
}

export interface ICityItem {
  title: string;
  id: string;
  default_org_id: string;
}
export interface IGetCitiesResponse {
  towns: ICityItem[];
}

export interface IOrderTypesItem {
  id: string;
  name: string;
  descriprion: string;
  isRemoted: boolean;
  logo: string;
}

export interface IOrganisation {
  GPS: {
    latitude: string;
    longitude: string;
  };
  title: string;
  id: number;
  requisites: string;
  deliveryTerminalId: string;
  img: string;
  address: string;
  description: string;
  comment: string;
  phone: string;
  phone_name: string;
  worktime: string;
  order_days: number;
  payments: [
    {
      id: number;
      name: string;
    },
  ];
  contacts: {
    vk: string;
    fb: string;
    inst: string;
    site: string;
    whatsapp: string;
    email: string;
  };
  deliveries: [
    {
      id: number;
      name: string;
    },
  ];
}
