
import { createGlobalStyle } from 'styled-components/macro';
import generateFontFace from 'ui-core/dist/generateFontFace';

const GlobalStyle = createGlobalStyle`
     ${generateFontFace()}
 `;

export default GlobalStyle;