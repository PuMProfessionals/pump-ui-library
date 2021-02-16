import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/theme/GlobalStyles';
import { baseTheme } from '../src/theme/theme';

export const decorators = [
  Story => (
    <>
      <ThemeProvider theme={baseTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </>
  ),
];


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}