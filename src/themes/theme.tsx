import { ThemeProvider } from 'styled-components';

const fontSizes: any = [14, 16, 20, 30, 72];

fontSizes.body = fontSizes[0];
fontSizes.bodyLarge = fontSizes[1];
fontSizes.bodyExtraLarge = fontSizes[2];
fontSizes.displayLarge = fontSizes[3];
fontSizes.displayExtraLarge = fontSizes[4];

const primary = '#EDF2F7';
const tertiary = '#54DBBF';
const secondary = '#F9B531';
const font = '#343946';

const theme = {
  fontSizes,
  colors: {
    primary,
    secondary,
    tertiary,
    font,
  },
};
export type ThemeType = typeof theme;

export const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
