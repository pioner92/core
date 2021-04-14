import {Dimensions, PixelRatio, StyleSheet, TextStyle} from 'react-native';

const fontFamily = 'Roboto-Regular';
const fontRegular = 'Roboto-Regular';
const fontBold = 'Roboto-Bold';

const fontWeight = '600';

export enum themeNames {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  SUCCESS = 'SUCCESS',
  DANGER = 'DANGER',
  WARNING = 'WARNING',
}

export const DEFAULT_BUTTON_THEME = themeNames.PRIMARY;

export const BUTTON_RADIUS = 88;

// LAST VERSION
export enum Color {
  BLACK = '#000',
  DARK = '#08202F',
  WHITE = '#fff',
  BACKGROUND_COLOR = '#F3F3F3',
  PRIMARY = '#EB645A',
  PRIMARY_60 = '#F3A29C',
  PRIMARY_40 = '#F7C1BD',
  PRIMARY_20 = '#FBE0DE',
  SECONDARY = '#00C8C8',
  SECONDARY_60 = '#66DEDE',
  SECONDARY_40 = '#99E9E9',
  SECONDARY_20 = '#CCF4F4',
  SUCCESS = '#20B03F',
  SUCCESS_60 = '#79DE8F',
  SUCCESS_40 = '#A6E9B5',
  SUCCESS_20 = '#D2F4DA',
  WARNING = '#FFC289',
  WARNING_60 = '#FFDAB8',
  WARNING_40 = '#FFE7D0',
  WARNING_20 = '#FFF3E7',
  DANGER = '#DE3D43',
  DANGER_60 = '#F08F92',
  DANGER_40 = '#F5B4B7',
  DANGER_20 = '#FADADB',
  GREY_BLUE = '#EFF2F8',
  GREY_900 = '#1A1A1A',
  GREY_800 = '#333333',
  GREY_700 = '#4D4D4D',
  GREY_600 = '#666666',
  GREY_500 = '#808080',
  GREY_400 = '#B3B3B3',
  GREY_300 = '#B3B3B3',
  GREY_200 = '#CCCCCC',
  GREY_100 = '#E5E5E5',
  GREY_50 = '#F2F2F2',
  SHADOW_COLOR_200 = 'rgba(0,0,0,0.2)',
  SHADOW_COLOR_MD = 'rgba(0, 0, 0, 0.12)',
  SHADOW_COLOR_NORMAL = 'rgba(0, 0, 0, 0.08)',
  SHADOW_COLOR_XL = 'rgba(0, 0, 0, 0.16)',
  RGBA_0 = 'rgba(0,0,0,0)',
  RGBA_50 = 'rgba(0,0,0,0.05)',
  RGBA_80 = 'rgba(0, 0, 0, 0.08)',
  RGBA_100 = 'rgba(0, 0, 0, 0.1)',
  RGBA_200 = 'rgba(0,0,0,0.2)',
  RGBA_250 = 'rgba(0,0,0,0.25)',
  RGBA_300 = 'rgba(0,0,0,0.3)',
  RGBA_400 = 'rgba(0, 0, 0, 0.4)',
  RGBA_600 = 'rgba(0,0,0,0.6)',
  RGBA_500 = 'rgba(0,0,0,0.5)',
  RGBA_700 = 'rgba(0, 0, 0, 0.7)',
  BUTTON_DISABLED = 'rgba(0,0,0,0.2)',
}

export const COLORS = {
  black: {color: Color.GREY_800},
  white: {color: Color.WHITE},
  red: {color: Color.DANGER},
  darkMuted: {color: Color.RGBA_400},
};

const fontB: TextStyle = {
  ...COLORS.black,
  fontFamily,
  fontWeight,
};

const font: TextStyle = {
  ...COLORS.black,
  fontFamily,
};

const fontR: TextStyle = {
  color: Color.DANGER,
  fontFamily,
};

const fontD: TextStyle = {
  ...COLORS.darkMuted,
  fontFamily,
};

const fontDb: TextStyle = {
  ...COLORS.red,
  fontFamily,
  fontWeight,
};

const fontW: TextStyle = {
  ...COLORS.white,
  fontFamily,
};

const fontWb: TextStyle = {
  ...COLORS.white,
  fontFamily,
  // fontWeight,
  fontWeight: 'bold',
};

export const UIStyles = StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    paddingHorizontal: 16,
  },
  font30Db: {
    ...fontDb,
    fontSize: 30,
  },
  font30Wb: {
    ...fontWb,
    fontSize: 30,
  },
  font30b: {
    ...fontB,
    fontSize: 30,
  },
  font25Wb: {
    ...fontWb,
    fontSize: 25,
  },
  font25b: {
    ...fontB,
    fontSize: 25,
  },
  font24b: {
    ...fontB,
    fontSize: 24,
  },
  font20b: {
    ...fontB,
    fontSize: 20,
  },
  font20w: {
    ...fontW,
    fontSize: 20,
  },
  font18: {
    ...COLORS.black,
    fontSize: 18,
  },
  font18b: {
    ...COLORS.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
  font16b: {
    ...fontB,
    fontSize: 16,
  },
  font15b: {
    ...fontB,
    fontSize: 15,
  },
  font15: {
    ...font,
    fontSize: 15,
  },
  font15R: {
    ...fontR,
    fontSize: 15,
  },
  font15d: {
    ...fontD,
    fontSize: 15,
  },
  font15Db: {
    ...fontDb,
    fontSize: 15,
  },
  font15W: {
    ...fontW,
    fontSize: 15,
  },
  font15Wb: {
    ...fontWb,
    fontSize: 15,
  },
  font14b: {
    ...fontWb,
    fontSize: 14,
  },
  font14: {
    ...font,
    fontSize: 14,
  },
  font13: {
    fontSize: 13,
  },
  font12: {
    ...font,
    fontSize: 12,
  },
  font12b: {
    ...fontB,
    fontSize: 12,
  },
  font12W: {
    ...fontW,
    fontSize: 12,
  },
  font12Wb: {
    ...fontWb,
    fontSize: 12,
  },
  font12Db: {
    ...fontDb,
    fontSize: 12,
  },
  font9: {
    ...font,
    fontSize: 9,
    fontWeight: 'normal',
  },
  font9b: {
    ...font,
    fontSize: 9,
    fontWeight: 'bold',
  },
  heart: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  iconW: {
    ...COLORS.white,
  },
  iconD: {
    ...COLORS.red,
  },
  icon15: {
    ...COLORS.black,
    fontSize: 15,
  },
  icon15D: {
    ...COLORS.red,
    fontSize: 15,
  },
  icon15W: {
    ...COLORS.white,
    fontSize: 15,
  },
  icon20W: {
    ...COLORS.white,
    fontSize: 20,
  },
  icon20D: {
    ...COLORS.red,
    fontSize: 20,
  },
  icon25: {
    color: Color.BLACK,
    fontSize: 25,
  },
  icon25W: {
    ...COLORS.white,
    fontSize: 25,
  },
  icon25D: {
    ...COLORS.red,
    fontSize: 25,
  },
  icon30: {
    color: Color.BLACK,
    fontSize: 30,
  },
  icon30W: {
    ...COLORS.white,
    fontSize: 30,
  },
  icon30D: {
    ...COLORS.red,
    fontSize: 30,
  },
  button: {
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: Color.PRIMARY,
  },
  title: {
    ...fontB,
    fontSize: 30,
    paddingBottom: 30,
  },
  title25: {
    ...fontB,
    fontSize: 25,
    paddingBottom: 25,
  },
  subtitle: {
    ...fontB,
    fontSize: 25,
    paddingBottom: 20,
  },
  image: {
    height: 190,
    borderRadius: 20,
  },
  productImage: {
    borderRadius: 20,
    resizeMode: 'cover',
    backgroundColor: Color.GREY_800,
  },
  image79: {
    width: Dimensions.get('window').width / 5,
    height: 79,
    backgroundColor: Color.WHITE,
    borderRadius: 10,
  },
  flex: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  scale12: {
    fontSize: 12 / PixelRatio.getFontScale(),
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexStart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  borderTop: {
    borderWidth: 1,
    borderColor: Color.WHITE,
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  column: {
    justifyContent: 'space-between',
  },
  dividerH: {
    marginRight: 10,
  },
  dividerV: {
    borderWidth: 0.5,
    borderColor: Color.WHITE,
  },
  dividerL: {
    ...COLORS.black,
    borderBottomWidth: 1,
  },
  marginBottom10: {
    marginBottom: 10,
  },
  padding: {
    padding: 10,
  },
  paddingBottom5: {
    paddingBottom: 5,
  },
  padding20: {
    padding: 20,
  },
  paddingV20: {
    paddingVertical: 20,
  },
  paddingV16: {
    paddingVertical: 16,
  },
  paddingH16: {
    paddingHorizontal: 16,
  },
  paddingL29: {
    paddingLeft: 29,
  },
  paddingTop15: {
    paddingTop: 15,
  },
  paddingBottom10: {
    paddingBottom: 10,
  },
  paddingBottom20: {
    paddingBottom: 20,
  },
  web: {
    width: Dimensions.get('window').width - 60,
  },
  flatList: {
    paddingBottom: 20,
  },
  disabled: {
    opacity: 0.5,
  },
  discount: {
    textDecorationLine: 'line-through',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  dimensions2_5: {
    width: Dimensions.get('window').width / 2.5,
  },
  headerStyle: {
    backgroundColor: Color.WHITE,
    shadowOpacity: 0,
    elevation: 0,
  },
  logo: {
    width: 160,
    height: 38,
  },
  backButton: {
    padding: 2,
    paddingLeft: 20,
  },
  shadowMD: {
    shadowColor: Color.SHADOW_COLOR_MD,
    elevation: 4,
    shadowRadius: 8,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  shadowNormal: {
    shadowColor: Color.SHADOW_COLOR_NORMAL,
    elevation: 4,
    shadowRadius: 8,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  shadowXL: {
    shadowColor: Color.SHADOW_COLOR_XL,
    elevation: 4,
    shadowRadius: 16,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  backButtonShadow: {
    padding: 2,
    backgroundColor: Color.WHITE,
    borderRadius: 16,
    shadowColor: Color.BLACK,
    elevation: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    paddingLeft: 20,
  },
  textCenter: {
    textAlign: 'center',
  },
});
