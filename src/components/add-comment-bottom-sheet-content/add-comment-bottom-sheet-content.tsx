import React, {useState} from 'react';
import {Rating} from '../rating/rating';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Config} from '../../config';
import {useInput} from '../../system/hooks/use-input';
import {InputWithRightElement} from '../input/input-with-right-element';
import {ThemedButton} from '../buttons/themed-button';
import {ImageIcon} from '../icons/image-icon';
import {CheckboxComponent} from '../checkbox/checkbox-component';
import {IBottomSheetModalComponentProps} from '../bottom-sheet-menu/bottom-sheet-modal-provider';

const {Color, UIStyles} = Config;

const checkboxItems = [
  {title: 'Не понравилось блюдо', id: 0},
  {title: 'Отсутствовала часть заказа', id: 1},
  {title: 'Доставили с опазданием', id: 2},
  {title: 'Проблема с оплатой', id: 3},
];

interface IAddCommentBottomSheetContent extends IBottomSheetModalComponentProps{

}

export const AddCommentBottomSheetContent: React.FC<IAddCommentBottomSheetContent> = ({
  expand,
  collapse,
}) => {
  const commentInput = useInput('');
  const [rating, setRating] = useState(0);
  const [isVisibleCheckboxVariants, setIsVisibleCheckBoxVariants] = useState(
    false,
  );

  const getRatingCountText = (value: number) => {
    switch (value) {
      case 4:
        return 'четыри';
      case 3:
        return 'три';
      case 2:
        return 'две';
      case 1:
        return 'одну';
    }
  };

  const onRating = (value: number) => {
    setRating(value);
    if (value < 5) {
      expand?.();
      setIsVisibleCheckBoxVariants(true);
    } else {
      collapse?.();
      setIsVisibleCheckBoxVariants(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={{paddingBottom: 50}}>
      <View style={styles.container}>
        <Text style={styles.title}>Оцените заказ</Text>
        {isVisibleCheckboxVariants ? (
          <Text style={styles.description}>
            Вы поставили {getRatingCountText(rating)} звезды. Что вам не
            понравилось?
          </Text>
        ) : (
          <Text style={styles.description}>Как вам доставка и наши блюда?</Text>
        )}
        <Rating
          onPress={onRating}
          containerStyle={{marginTop: 40}}
          iconStyle={{width: 40}}
          isTouchable={true}
          rating={rating}
        />
        {isVisibleCheckboxVariants ? (
          <View style={{marginTop: 36}}>
            {checkboxItems.map(el => {
              return (
                <CheckboxComponent
                  containerStyle={{paddingVertical: 14}}
                  key={el.id}
                  isChecked={false}
                  onToggle={() => {}}
                  title={el.title}
                />
              );
            })}
          </View>
        ) : null}

        <InputWithRightElement
          multiline={true}
          inputStyle={{marginTop: 16}}
          RightComponent={ImageIcon}
          {...commentInput}
        />
        <ThemedButton
          wrapperStyle={{marginTop: 17}}
          rounded={true}
          label={'Оценить'}
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...UIStyles.paddingH16,
    alignItems: 'center',
  },
  title: {
    ...UIStyles.font24b,
    color: Color.BLACK,
    textAlign: 'center',
  },
  description: {
    ...UIStyles.font15,
    color: Color.GREY_600,
    paddingHorizontal: 50,
    textAlign: 'center',
    marginTop: 16,
  },
});
