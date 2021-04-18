import {StyleSheet, View, ViewStyle} from 'react-native';
import React, {useImperativeHandle, useState} from 'react';
import {Config} from '../../config';
import {windowHeight, windowWidth} from '../../system/helpers/window-size';
import ModalView from 'react-native-modal';

interface ModalWithComponent {
  containerStyle?: ViewStyle;
  modalStyle?: ViewStyle;
}

export interface IModalMethods {
  show: () => void;
  close: () => void;
}

export const ModalComponent = React.forwardRef<
  IModalMethods,
  React.PropsWithChildren<ModalWithComponent>
>(({children, modalStyle, containerStyle}, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  const close = () => {
    setIsVisible(false);
  };
  const show = () => {
    setIsVisible(true);
  };

  useImperativeHandle(ref, () => {
    return {
      show,
      close,
    };
  });

  return (
    <ModalView
      style={containerStyle}
      deviceHeight={windowHeight}
      deviceWidth={windowWidth}
      hasBackdrop={true}
      backdropColor={Config.Color.BLACK}
      backdropOpacity={0.6}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      onBackdropPress={close}
      isVisible={isVisible}>
      <View style={[styles.modalView, modalStyle]}>{children}</View>
    </ModalView>
  );
});

const styles = StyleSheet.create({
  modalView: {
    width: '100%',
    backgroundColor: Config.Color.WHITE,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 33,
  },
});
