import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    ${({ theme }) => `
        *,
        *::before,
        *::after {
            box-sizing: inherit;
        }
        html, body {
            height: 100%;
            box-sizing: inherit;
            margin: 0;
        }
        body {
            color: ${theme.colors.primary};
            font-family: ${theme.font.body};
            overflow-y: scroll;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        a {
            text-decoration: none;
            color: ${theme.colors.primary};
        }
    `};
`;