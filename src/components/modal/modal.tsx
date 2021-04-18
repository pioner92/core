import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React, {useContext} from 'react';
import {Config} from '../../config';
import {windowHeight, windowWidth} from '../../system/helpers/window-size';
import ModalView from 'react-native-modal';
import {ModalContext} from './modal-provider';
import {ThemedButton} from '../buttons/themed-button';

const {Color, UIStyles} = Config;

export const Modal = () => {
  const {
    title,
    description,
    isVisible,
    close,
    buttons,
    buttonsDirection,
  } = useContext(ModalContext);

  return (
    <ModalView
      // style={containerStyle}
      deviceHeight={windowHeight}
      deviceWidth={windowWidth}
      hasBackdrop={true}
      backdropColor={Config.Color.BLACK}
      backdropOpacity={0.6}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      onBackdropPress={close}
      isVisible={isVisible}>
      {/*<View style={[styles.modalView, modalStyle]}>{children}</View>*/}
      <View style={[styles.modalView]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View
          style={[styles.buttonsContainer, {flexDirection: buttonsDirection}]}>
          {buttons.map(({styles, ...rest}, index) => {
            return (
              <ThemedButton
                rounded={true}
                wrapperStyle={{
                  marginBottom: 8,
                  flexShrink: 1,
                  marginHorizontal: buttonsDirection === 'column' ? 0 : 5,
                }}
                key={index}
                {...rest}
                {...styles}
              />
            );
          })}
        </View>
      </View>
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
  title: {
    ...UIStyles.font20b,
    color: Color.DARK,
    textAlign: 'center',
  },
  description: {
    ...UIStyles.font15,
    color: Color.GREY_600,
    marginTop: 32,
  },
  buttonsContainer: {
    marginTop: 16,
  },
});
