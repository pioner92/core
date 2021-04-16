import {actionCreator} from '../../../system/store/action-creator';

export class ActionDelivery {
  static setSelectedCityId = actionCreator<string>(
    'DELIVERY/SET_SELECTED_CITY_ID',
  );
  static setSelectedOrderType = actionCreator<string>(
    'DELIVERY/SET_SELECTED_ORDER_TYPE',
  );
  static setSelectedOrganisationId = actionCreator<string>(
    'DELIVERY/SET_SELECTED_ORGANISATION_ID',
  );
}
