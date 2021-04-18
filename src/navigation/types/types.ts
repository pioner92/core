import {Routes} from '../routes';
import {BottomSheetMenuType} from '../../screens/delivery/view/organisation-list-with-map';

export type TRootStackParamList = {
  [Routes.LoginStack]: undefined;
  [Routes.LoginPhone]: undefined;
  [Routes.LoginCode]: {
    phoneNumber: string;
    request_id: string;
  };
  [Routes.SelectCity]: undefined;
  [Routes.DeliveryAndPayment]: undefined;
  [Routes.Policy]: undefined;
  [Routes.AddressCreate]: undefined;
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
