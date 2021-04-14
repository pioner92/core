import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ScreenHeaderTitleWithBackButton} from '../../../components/screen-header/screen-header-title-with-back-button';
import {textPolicy} from '../../login/view/text';
import {Config} from '../../../config';

const {Color, UIStyles} = Config;

export const DeliveryAndPayment: React.FC = React.memo(() => {
  return (
    <SafeAreaView>
      <ScreenHeaderTitleWithBackButton title="Доставка и оплата" />
      <ScrollView contentContainerStyle={{paddingBottom: 50}}>
        <View style={styles.contentContainer}>
          <Text style={styles.text}>{textPolicy}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 16,
    ...Config.UIStyles.paddingH16,
  },
  text: {
    color: Color.BLACK,
    ...UIStyles.font15,
  },
});
