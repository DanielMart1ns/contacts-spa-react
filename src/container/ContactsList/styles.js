import { Link } from "react-router-dom";
import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
`;

export const CirclePlus = styled(Link)`
  display: flex;
  height: 64px;
  width: 64px;
  background-color: ${variaveis.themeColor};
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 80px;

  &:hover {
    background-color: #fff;
    color: ${variaveis.themeColor};
    border: 2px solid ${variaveis.themeColor};
    transition: all 0.1s ease-in-out;
  }

  @media (max-width: 768px) {
    bottom: 40px;
    right: 32px;
  }
`;
