import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    --orange-bg: #2f2618;
    --orange: #ff9d01;
    --gray-bg: #2b2b2c;
    --btn-gradient: linear-gradient(83deg, #ebedec, #a8cae3);
}

body {
  margin: 0;
  user-select: none;
  background: #355C7D;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #C06C84, #6C5B7B, #355C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  font-family: 'Poppins', sans-serif;
  -webkit-tap-highlight-color: transparent;
}

a {
    text-decoration: none;
    color:black
}

a:visited {
    color:black
}

li {
    list-style: none;
}
`;

export default GlobalStyle;
