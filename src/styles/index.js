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
  margin: 42px auto;
  max-width: 80vw;
  height: 80vh;
  width: 100%;
  padding: 32px;
`;
