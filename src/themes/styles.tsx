import { createGlobalStyle } from 'styled-components';
import { ThemeType } from 'themes';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }
    .leaflet-container {
        width: 100%;
        height: 500px;
    }
    body {
        background-color: ${({ theme }) => theme.colors.primary};
    }

`;
