import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
export default GlobalStyle;

export const Container = styled.div`
  margin: 36px auto 0;
  max-width: 80vw;
  width: 100%;
`;
