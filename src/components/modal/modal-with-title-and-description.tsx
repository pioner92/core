import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {ModalComponent} from './modal-component';
import {Config} from '../../config';

const {Color, UIStyles} = Config;

interface IModalWithTitleAndDescription {
  title: string;
  description: string;
  descriptionStyle?: TextStyle;
  titleStyle?: TextStyle;
}

export const ModalWithTitleAndDescription: React.FC<IModalWithTitleAndDescription> = ({
  title,
  description,
  descriptionStyle,
  titleStyle,
  children,
}) => {
  return (
    <ModalComponent>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <Text style={[styles.description, descriptionStyle]}>{description}</Text>
      {children}
    </ModalComponent>
  );
};

const styles = StyleSheet.create({
  title: {
    ...UIStyles.font20b,
    color: Color.DARK,
    textAlign: 'center',
    marginTop: 17,
  },
  description: {
    ...UIStyles.font15,
    paddingTop: 32,
    paddingBottom: 32,
    color: Color.GREY_600,

  },
});
