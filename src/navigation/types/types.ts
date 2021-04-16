import {Routes} from '../routes';
import {BottomSheetMenuType} from '../../screens/delivery/view/organisation-list-with-map';

export type TRootStackParamList = {
  [Routes.AuthPhone]: undefined;
  [Routes.AuthCode]: {
    phoneNumber: string;
    request_id: string;
  };
  [Routes.SelectCity]: undefined;
  [Routes.DeliveryAndPayment]: undefined;
  [Routes.Policy]: undefined;
  [Routes.AddressCreate]: {screenType:};
  [Routes.AddressList]: undefined;
  [Routes.ProfileNotAuth]: undefined;
  [Routes.Catalog]: undefined;
  [Routes.ProfileAuth]: undefined;
  [Routes.SelectOrganisationInMap]: {
    bottomSheetMenuType: keyof typeof BottomSheetMenuType;
  };
  [Routes.TabRootScreen]: undefined;
  [Routes.Profile]: undefined;
};
