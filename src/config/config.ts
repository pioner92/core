import {Color, UIStyles} from '../assets/styles';
import {ProfileIcon} from '../components/icons/profile-icon';
import {Cart2Icon} from '../components/icons/cart-2-icon';
import {MoreIcon} from '../components/icons/more-icon';

export const Config = {
  Color: Color,
  UIStyles: UIStyles,
  tabNavigationLabels: [
    {label: 'Меню', Icon: ProfileIcon},
    {label: 'Заказ', Icon: Cart2Icon},
    {label: 'Профиль', Icon: ProfileIcon},
    {label: 'Еще', Icon: MoreIcon},
  ],
};
