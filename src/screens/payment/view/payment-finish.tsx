import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ScreeHeaderTitleLeft} from '../../../components/screen-header/scree-header-title-left';
import {ImageRepository} from '../../../assets/image-repository';
import {Config} from '../../../config';
import {ThemedButton} from '../../../components/buttons/themed-button';
import {PaymentFinishOrderListItem} from './components/payment-finish-order-list-item';
const {Color, UIStyles} = Config;

export const PaymentFinish: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <ScreeHeaderTitleLeft title={'Мой заказ'} />
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <FastImage
              source={ImageRepository.CartImage}
              style={styles.image}
              resizeMode={'contain'}
            />
            <Text style={styles.title}>Заказ 2344 оформлен!</Text>
            <Text style={styles.description}>
              Пожалуйста, приготовьте к оплате 600 ₽
            </Text>
          </View>
          <Text style={styles.orderListTitle}>Что в заказе</Text>
          <PaymentFinishOrderListItem
            image={''}
            title={'Title'}
            count={2}
            price={150}
            ingredients={'Соус'}
          />
        </View>
      </ScrollView>
      <ThemedButton
        modifier={'bordered'}
        wrapperStyle={{marginTop: 'auto', paddingHorizontal: 16}}
        rounded={true}
        label={'сделать новый заказ'}
        onPress={() => {}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    ...UIStyles.paddingH16,
    flex: 1,
  },
  imageContainer: {
    paddingHorizontal: 34,
  },
  image: {
    width: '100%',
    height: 133,
    marginTop: 96,
  },
  title: {
    ...UIStyles.font24b,
    color: Color.DANGER,
    textAlign: 'center',
    marginTop: 12,
  },
  description: {
    ...UIStyles.font20b,
    color: Color.GREY_600,
    textAlign: 'center',
    marginTop: 12,
  },
  orderListTitle: {
    textAlign: 'center',
    ...UIStyles.font20b,
    color: Color.BLACK,
    marginTop: 40,
    marginBottom: 16,
  },
});
