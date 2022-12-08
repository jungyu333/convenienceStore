import { DefaultTheme } from 'styled-components';

const colors = {
  orange: '#f09618',
  gray: '#c7c3c3',
  lightgray: '#d9d4d4',
  red: '#d60202',
  green: '#55ab4f',
  darkOrange: '#d48c59',
  white: '#ffffff',
  black: '#000000',
};

const deviceSizes = {
  mobile: '500px',
  smallTablet: '700px',
  laptop: '1000px',
};

const device = {
  mobile: `screen and (min-width: ${deviceSizes.mobile})`,
  smallTablet: `screen and (min-width: ${deviceSizes.smallTablet})`,
  laptop: `screen and (min-width: ${deviceSizes.laptop})`,
};

export type ColorsTypes = typeof colors;
export type DeviceTypes = typeof device;

export const theme: DefaultTheme = {
  colors,
  device,
};
