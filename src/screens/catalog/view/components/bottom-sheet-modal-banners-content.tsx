import {ScrollView, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ThemedButton} from '../../../../components/buttons/themed-button';
import React from 'react';
import {IBannerItem} from '../../types/types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Config} from '../../../../config';
import {IBottomSheetModalComponentProps} from '../../../../components/bottom-sheet-menu/bottom-sheet-modal-provider';

const {Color, UIStyles} = Config;

interface IBottomSheetModalBanners extends IBottomSheetModalComponentProps {
  item: IBannerItem;
}

export const BottomSheetModalBannersContent: React.FC<IBottomSheetModalBanners> = ({
  item,
  close,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <>
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
        onPress={close}
      />
    </>
  );
};

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
