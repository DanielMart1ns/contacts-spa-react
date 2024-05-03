import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Container = styled.div`
  font-family: nunito, sans-serif;
  label {
    cursor: pointer;
  }
`;

export const ArrowBack = styled.div`
  span {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    position: fixed;
    top: 20px;
    left: 40px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  color: ${variaveis.themeColor};

  span {
    font-size: 36px;
  }

  h1 {
    text-align: center;
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
    border-bottom: 1px solid ${variaveis.themeColor};
    outline: none;
    height: 36px;
    color: ${variaveis.contactText};

    &:focus {
      border-bottom: 3px solid ${variaveis.themeColor};
      transition: border-bottom 0.1s;
    }
  }
`;

export const Navigate = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto 0;
  width: 230px;
`;

export const Button = styled.button`
  background-color: ${(props) =>
    props.register ? `${variaveis.themeColor}` : "red"};
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 12px;
  font-weight: bold;
  color: #fff;
  border: 2px solid #fff;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: ${(props) => (props.register ? `${variaveis.themeColor}` : "red")};
    border: 2px solid;
    border-color: ${(props) =>
      props.register ? `${variaveis.themeColor}` : "red"};
    transition: all 0.1s ease-in-out;
  }

  span {
    margin-left: 4px;
  }
`;
