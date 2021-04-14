import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Color, UIStyles} from '../../../../../assets/styles';

interface IPolicyAcceptProps {
  isChecked: boolean;
  onToggle: () => void;
  onPressPolicy: () => void;
}

export const PolicyAccept: React.FC<IPolicyAcceptProps> = ({
  isChecked,
  onToggle,
  onPressPolicy,
}) => {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={20}
        bounceEffect={1}
        bounceFriction={10}
        iconStyle={{borderColor: Color.BLACK, borderRadius: 4}}
        fillColor={Color.BLACK}
        onPress={onToggle}
        isChecked={isChecked}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Согласен у условиями</Text>
        <Text
          onPress={onPressPolicy}
          style={[styles.text, {textDecorationLine: 'underline'}]}>
          Пользовательского соглашения
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  textWrapper: {
    marginTop: 16,
  },
  text: {
    ...UIStyles.font15,
    color: Color.GREY_200,
  },
});
