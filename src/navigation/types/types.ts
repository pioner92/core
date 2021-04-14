import {Routes} from '../routes';
import {BottomSheetMenuType} from '../../screens/delivery/view/organisation-list-with-map';

export type TRootStackParamList = {
  [Routes.AuthPhone]: undefined;
  [Routes.DeliveryAndPayment]: undefined;
  [Routes.Policy]: undefined;
  [Routes.AddressCreate]: undefined;
  [Routes.AuthCode]: {
    phoneNumber: string;
    request_id: string;
  };
  [Routes.ProfileNotAuth]: {};
  [Routes.Catalog]: {};
  [Routes.ProfileAuth]: {};
  [Routes.SelectOrganisationInMap]: {
    bottomSheetMenuType: keyof typeof BottomSheetMenuType;
  };
  [Routes.TabRootScreen]: undefined;
};


