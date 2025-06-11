import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { common } from "./common";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${common}
`;

export default GlobalStyle;