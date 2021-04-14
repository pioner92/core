import {Color} from './styles';

const createTheme = (normal: string, disabled: string, text: string) => {
  return {
    normal,
    disabled,
    text,
  };
};

export const Theme = {
  PRIMARY: createTheme(Color.PRIMARY, Color.BUTTON_DISABLED, Color.WHITE),
  SECONDARY: createTheme(Color.SECONDARY, Color.BUTTON_DISABLED, Color.WHITE),
  SUCCESS: createTheme(Color.SUCCESS, Color.BUTTON_DISABLED, Color.WHITE),
  DANGER: createTheme(Color.DANGER, Color.BUTTON_DISABLED, Color.WHITE),
  WARNING: createTheme(Color.WARNING, Color.BUTTON_DISABLED, Color.WHITE),
};
