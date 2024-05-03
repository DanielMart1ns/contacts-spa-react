import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Item = styled.div`
  border: 1px solid ${variaveis.themeColor};
  border-radius: 12px;
  width: 300px;
  padding: 8px 12px 22px;
  background-color: #f7f7f7;

  form {
    display: flex;
    flex-direction: column;

    label {
      font-family: nunito, sans-serif;
      font-weight: bold;
    }
  }
`;

export const DataContact = styled.div`
  display: grid;
  grid-template-columns: 90% auto;

  span {
    color: ${variaveis.themeColor};
    display: block;
  }

  input {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 12px;
    border: none;
    outline: none;
    height: 36px;
    background-color: #f7f7f7;
    color: ${variaveis.contactText};
  }
`;
