import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ScreenHeaderTitleWithBackButton} from '../../../components/screen-header/screen-header-title-with-back-button';
import {textPolicy} from './text';
import {Config} from '../../../config';
const {UIStyles, Color} = Config;

export const Policy: React.FC = React.memo(() => {
  return (
    <SafeAreaView>
      <ScreenHeaderTitleWithBackButton title={'Политика'} />
      <ScrollView contentContainerStyle={{paddingBottom:50}} indicatorStyle={'black'}>
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
