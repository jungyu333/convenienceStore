import { createGlobalStyle } from 'styled-components';
import CookieFont from './CookieRun.ttf';

export default createGlobalStyle`		      
  @font-face {
    font-family: 'COOKIE';	
    src: local('COOKIE'),    
    url(${CookieFont}) format('truetype');
    font-weight: 300; 		
    font-style: normal;
  }
    `;
