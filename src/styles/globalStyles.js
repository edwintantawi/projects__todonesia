import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: 400;
    color: ${colors.black};
  }
  body {
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
