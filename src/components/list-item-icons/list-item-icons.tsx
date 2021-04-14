import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Color, UIStyles} from '../../assets/styles';
import {Divider} from '../divider';

interface IListItemIcons {
  leftComponent?: React.FC;
  rightComponent?: React.FC;
  titleStyle?: TextStyle;
  title: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
}

export const ListItemIcons: React.FC<IListItemIcons> = ({
  leftComponent: LeftComponent,
  rightComponent: RightComponent,
  title,
  titleStyle,
  onPress,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <View style={styles.content}>
        {LeftComponent ? (
          <View style={[styles.iconWrapper]}>
            <LeftComponent />
          </View>
        ) : null}

        <View style={{flex: 10}}>
          <Text style={[styles.title, titleStyle]}>{title}</Text>
        </View>
        {RightComponent ? (
          <View style={[styles.iconWrapper, {alignItems: 'flex-end'}]}>
            <RightComponent />
          </View>
        ) : null}
      </View>
      <Divider />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingVertical: 9,
  },
  content: {
    paddingVertical: 17.7,
    ...UIStyles.flexRow,
  },
  iconWithTitleWrapper: {
    flex: 1,
    ...UIStyles.flexRow,
  },
  iconWrapper: {
    padding: 8,
    flex: 1,
  },
  title: {
    ...UIStyles.font15,
    color: Color.BLACK,
    marginLeft: 24,
  },
});
