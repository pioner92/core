import React, {useState} from 'react';
import {ModalComponent} from './modal-component';
import {ListItemIcons} from '../list-item-icons/list-item-icons';
import {StartIcon} from '../icons/start-icon';
import {SortingArrowTop} from '../icons/sorting/sorting-arrow-top';
import {SortingArrowBottom} from '../icons/sorting/sorting-arrow-bottom';
import {SortingRatingTop} from '../icons/sorting/sorting-rating-top';
import {Config} from '../../config';

const {Color} = Config;

export enum SortVariant {
  rating = 'rating',
  priceTop = 'priceTop',
  priceLow = 'priceLow',
  favorite = 'favorite',
}

const sortingItems = [
  {
    title: 'Сортировать по рейтингу',
    Icon: StartIcon,
    variant: SortVariant.rating,
  },
  {
    title: 'Сортировать по цене',
    Icon: SortingArrowTop,
    variant: SortVariant.priceTop,
  },
  {
    title: 'Сортировать по цене',
    Icon: SortingArrowBottom,
    variant: SortVariant.priceLow,
  },
  {
    title: 'Сортироват по популярности',
    Icon: SortingRatingTop,
    variant: SortVariant.favorite,
  },
];

interface IModalSorting {
  onSorting: (variant: keyof typeof SortVariant) => void;
}

export const ModalSorting: React.FC<IModalSorting> = React.memo(
  ({onSorting}) => {
    const [selected, setSelected] = useState(-1);

    return (
      <ModalComponent>
        {sortingItems.map((el, index) => {
          return (
            <ListItemIcons
              key={index}
              titleStyle={{
                color: selected === index ? Color.PRIMARY : Color.DARK,
              }}
              rightComponent={el.Icon.bind(null, {
                fill: selected === index ? Color.PRIMARY : Color.GREY_400,
              })}
              title={el.title}
              onPress={() => {
                onSorting(el.variant);
                setSelected(index);
              }}
            />
          );
        })}
      </ModalComponent>
    );
  },
);
