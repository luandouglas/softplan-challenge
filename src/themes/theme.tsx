import { ThemeProvider } from 'styled-components';

const fontSizes: any = [14, 16, 20, 96];
fontSizes.body = fontSizes[0];
fontSizes.bodyLarge = fontSizes[1];
fontSizes.bodyExtraLarge = fontSizes[2];
fontSizes.displayExtraLarge = fontSizes[3];

const primary = '#EDF2F7';
const secondary = '#F9B531';
const font = '#343946';

const theme = {
  fontSizes,
  colors: {
    primary,
    secondary,
    font,
  },
};
export type ThemeType = typeof theme;

export const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
