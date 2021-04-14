import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ScreenHeaderTitleWithBackButton} from '../../../components/screen-header/screen-header-title-with-back-button';
import {IRadioButtonData, RadioButton} from '../../../components/radio-button/radio-button';
import {Config} from '../../../config';
import {Divider} from '../../../components/divider';
import {PaymentValueRow} from './components/payment-value-row';
import {PaymentsImagesRow} from './components/payments-images-row';
import {ThemedButton} from '../../../components/buttons/themed-button';
import {PaymentRowWithInput} from './components/payment-row-with-input';
import {useInput} from '../../../system/hooks/use-input';

const {Color, UIStyles} = Config;

const data = [
  {id: 0, label: 'Онлайн оплата'},
  {id: 1, label: 'Оплата картой курьеру'},
  {id: 2, label: 'Оплата наличными курьеру'},
];

export const Payment = () => {
  const [
    selectedPaymentMethod,
    setSelectedPaymentMethod,
  ] = useState<IRadioButtonData>();

  const inputChangeFromPayment = useInput('');

  const onSelectPaymentMethod = (paymentMethod: IRadioButtonData) => {
    setSelectedPaymentMethod(paymentMethod);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScreenHeaderTitleWithBackButton
        titleStyle={{textAlign: 'left'}}
        title={'Способ оплаты'}
      />
      <RadioButton
        activeColor={Config.Color.PRIMARY}
        inactiveColor={Config.Color.PRIMARY}
        style={{marginTop: 40}}
        data={data}
        textStyle={StyleSheet.flatten([UIStyles.font15, {color: Color.DARK}])}
        onSelect={onSelectPaymentMethod}
      />

      <View style={styles.contentContainer}>
        <PaymentValueRow
          titleStyle={UIStyles.font18b}
          title={'Ваш заказ'}
          value={`${0} товара`}
        />
        <Divider />
        <PaymentValueRow
          valueStyle={{fontWeight: 'bold'}}
          title={'Сумма заказа'}
          value={`${0} ₽`}
        />
        <PaymentValueRow
          valueStyle={{fontWeight: 'normal'}}
          title={'Скидка по промокоду'}
          value={`${0} ₽`}
        />
        <PaymentValueRow
          valueStyle={{fontWeight: 'bold'}}
          title={'Оплачено бонусами'}
          value={`${0} ₽`}
        />
        <PaymentValueRow
          title={'Доставка'}
          valueStyle={{fontWeight: 'bold', color: Color.SUCCESS}}
          value={'Бесплатно'}
        />
        <PaymentValueRow
          valueStyle={{fontWeight: 'bold', color: Color.GREY_600}}
          title={'К оплате'}
          value={`${0} ₽`}
        />

        {selectedPaymentMethod?.id !== 2 ? (
          <>
            <PaymentsImagesRow />
            <Text style={styles.requisites}>Реквизиты получателя</Text>
          </>
        ) : (
          <PaymentRowWithInput {...inputChangeFromPayment} />
        )}
        <ThemedButton
          rounded={true}
          wrapperStyle={{marginTop: 'auto'}}
          label={`${
            selectedPaymentMethod?.id === 0 ? 'Оплатить' : 'Оформить'
          } ₽`}
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    marginTop: 40,
    ...UIStyles.paddingH16,
  },
  orderCountRow: {
    ...UIStyles.flexRow,
  },
  orderCountTitle: {
    ...UIStyles.font18b,
    color: Color.DARK,
  },
  orderCountValue: {
    ...UIStyles.font15,
    color: Color.DARK,
  },
  requisites: {
    textAlign: 'center',
    ...UIStyles.font15,
    color: Color.GREY_400,
    marginTop: 16,
  },
});
