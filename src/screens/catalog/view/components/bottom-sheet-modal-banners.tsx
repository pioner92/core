import {BottomSheetModalComponent} from '../../../../components/bottom-sheet-menu/bottom-sheet-modal/bottom-sheet-modal-component';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ThemedButton} from '../../../../components/buttons/themed-button';
import React from 'react';
import {IBannerItem} from '../../types/types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Config} from '../../../../config';
import {useIsFocused} from '@react-navigation/native';
const {Color, UIStyles} = Config;

interface IBottomSheetModalBanners {
  item: IBannerItem;
}

export const BottomSheetModalBanners: React.FC<IBottomSheetModalBanners> = React.memo(
  ({item}) => {
    const insets = useSafeAreaInsets();
    const isFocused = useIsFocused();

    if (!isFocused) {
      return null;
    }

    return (
      <BottomSheetModalComponent snapPointsProps={['50%']}>
        <ScrollView style={{marginTop: 16}}>
          <View style={{paddingHorizontal: 46}}>
            <FastImage
              source={{uri: item?.img_big}}
              resizeMode={'cover'}
              style={styles.bannerImage}
            />
            <Text style={styles.bannersTitle}>{item?.title}</Text>
            <Text style={styles.bannerDescription}>{item?.content}</Text>
          </View>
        </ScrollView>
        <ThemedButton
          buttonStyle={{height: 50}}
          wrapperStyle={{marginBottom: insets.bottom, paddingHorizontal: 46}}
          rounded={true}
          label={'Активировать промокод'}
          onPress={() => {}}
        />
      </BottomSheetModalComponent>
    );
  },
);

const styles = StyleSheet.create({
  bannersTitle: {
    ...UIStyles.font20b,
    color: Color.DARK,
    textAlign: 'center',
    marginTop: 12,
  },
  bannerImage: {
    borderRadius: 15,
    width: '100%',
    height: 104,
  },
  bannerDescription: {
    ...UIStyles.font15,
    color: Color.GREY_600,
    marginTop: 16,
  },
});
