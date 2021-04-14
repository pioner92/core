import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Config} from '../../config';

export const HandleComponent = React.memo(() => {
  return (
    <View style={styles.handleComponent}>
      <Line />
    </View>
  );
});

const Line = React.memo( () => {
  return <View style={styles.line} />;
});

const styles = StyleSheet.create({
  handleComponent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  line: {
    height: 4,
    width: 50,
    borderRadius: 40,
    backgroundColor: Config.Color.GREY_400,
  },
});
