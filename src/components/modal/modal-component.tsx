import {StyleSheet, View, ViewStyle} from 'react-native';
import React, {useImperativeHandle, useRef} from 'react';
import {useModal} from './modal-provider';
import {Config} from '../../config';
import {windowHeight, windowWidth} from '../../system/helpers/window-size';
import ModalView from 'react-native-modal';

const {Color} = Config;

interface ModalComponent {
  containerStyle?: ViewStyle;
  modalStyle?: ViewStyle;
}

export const ModalComponent: React.FC<ModalComponent> = ({
  children,
  modalStyle,
  containerStyle,
}) => {
  const modal = useModal();

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
      onBackdropPress={modal.hide}
      isVisible={modal.isVisible}>
      <View style={[styles.modalView, modalStyle]}>{children}</View>
    </ModalView>
  );
};

const styles = StyleSheet.create({
  modalView: {
    width: '100%',
    backgroundColor: Config.Color.WHITE,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 33,
  },
});
