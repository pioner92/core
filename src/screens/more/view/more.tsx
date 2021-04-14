import React from 'react';
import {
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MapMarkerIcon} from '../../../components/icons/map-marker-icon';
import {ListItemIcons} from '../../../components/list-item-icons/list-item-icons';
import {ArrowRightWithoutLineIcon} from '../../../components/icons/arrow-right-without-line-icon';
import {Config} from '../../../config';
import {InfoInCircleIcon} from '../../../components/icons/info-in-circle-icon';
import {WhatsappIcon} from '../../../components/icons/whatsapp-icon';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes';
import {CellPhoneIcon} from '../../../components/icons/cell-phone-icon';
import {StackNavigationProp} from '@react-navigation/stack';
import {TRootStackParamList} from '../../../navigation/types/types';

const {UIStyles, Color} = Config;

type TNavigationProps = CompositeNavigationProp<
  StackNavigationProp<TRootStackParamList, Routes.DeliveryAndPayment>,
  StackNavigationProp<TRootStackParamList, Routes.Policy>
>;

export const More: React.FC = React.memo(() => {
  const {navigate} = useNavigation<TNavigationProps>();

  const openWhatsApp = () => {
    Linking.openURL('whatsapp://send?text=hello&phone=xxxxxxxxxxxxx');
  };

  const rowItems = [
    {
      title: 'Рестораны',
      Icon: MapMarkerIcon,
      onPress: () => navigate(Routes.Policy),
    },
    {
      title: 'Доставка и оплата',
      Icon: InfoInCircleIcon,
      onPress: () => navigate(Routes.DeliveryAndPayment),
    },
    {
      title: 'Политика конфинденциальности',
      Icon: InfoInCircleIcon,
      onPress: () => navigate(Routes.Policy),
    },
    {
      title: 'Обратная связь (Whatsapp)',
      Icon: WhatsappIcon,
      onPress: openWhatsApp,
    },
  ];

  return (
    <SafeAreaView style={{backgroundColor: Color.WHITE, flex: 1}}>
      <View style={styles.contentContainer}>
        <View style={styles.cellPhoneRowWrapper}>
          <View>
            <Text style={styles.phoneNumber}>+7 (3412) 12-05-12</Text>
            <Text style={styles.description}>Звоните с 10:00 до 20:00</Text>
          </View>
          <TouchableOpacity style={styles.cellPhoneWrapper}>
            <CellPhoneIcon fill={Color.WHITE} />
          </TouchableOpacity>
        </View>
        {rowItems.map(el => {
          return (
            <ListItemIcons
              key={el.title}
              leftComponent={el.Icon}
              rightComponent={ArrowRightWithoutLineIcon}
              title={el.title}
              onPress={el.onPress}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    ...UIStyles.paddingH16,
  },
  cellPhoneRowWrapper: {
    marginTop: 12,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Color.WHITE,
    borderRadius: 12,
    ...UIStyles.shadowNormal,
  },
  phoneNumber: {
    ...UIStyles.font18b,
  },
  description: {
    marginTop: 4,
    ...UIStyles.font14,
    color: Color.GREY_400,
  },
  cellPhoneWrapper: {
    backgroundColor: Color.SECONDARY,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
});
