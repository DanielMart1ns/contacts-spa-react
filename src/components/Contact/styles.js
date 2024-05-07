import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Item = styled.div`
  border: 1px solid ${variaveis.themeColor};
  border-radius: 12px;
  width: 300px;
  margin-bottom: 12px;
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

export const EditingText = styled.p`
  font-weight: bolder;
  font-family: Nunito, sans-serif;
  color: ${variaveis.themeColor};
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

export const ContactOptions = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 120px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.toEdit ? `${variaveis.themeColor}` : "red"};
  border-radius: 12px;
  font-weight: bold;
  color: #fff;
  border: 2px solid #fff;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: ${(props) => (props.toEdit ? `${variaveis.themeColor}` : "red")};
    border: 2px solid;
    border-color: ${(props) =>
      props.toEdit ? `${variaveis.themeColor}` : "red"};
    transition: all 0.1s ease-in-out;
  }

  span {
    margin-left: 4px;
    font-size: 18px;
  }
`;

export const ButtonStopEdit = styled(Button)`
  background-color: green;
  width: 140px;

  &:hover {
    background-color: #fff;
    border-color: green;
    color: green;
  }
`;
