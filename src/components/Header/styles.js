import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${variaveis.themeColor};

  span {
    font-size: 36px;
  }
`;

export const Title = styled.h1`
  font-family: Roboto, sans-serif;
`;
