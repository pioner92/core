import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Color} from '../../assets/styles';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';

interface CheckboxComponent {
  title: string;
  isChecked: boolean;
  onToggle: (status: boolean) => void;
  containerStyle?: ViewStyle;
}

export const CheckboxComponent: React.FC<CheckboxComponent> = ({
  title,
  isChecked,
  onToggle,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <BouncyCheckbox
        size={20}
        bounceEffect={1}
        bounceFriction={10}
        iconStyle={{borderColor: Color.BLACK, borderRadius: 4}}
        fillColor={Color.BLACK}
        onPress={onToggle}
        isChecked={isChecked}
      />
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
