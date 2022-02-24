import { fonts } from './fonts.js';

export const loadFonts = () => {
  const head = document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.innerHTML = fonts;
  head.appendChild(style);
};

export default loadFonts;