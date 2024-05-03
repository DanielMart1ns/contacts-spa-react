import {
  ArrowBack,
  Container,
  DataContact,
  Header,
  Button,
  Navigate,
} from "./styles";

import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };
  return (
    <>
      <Container>
        <ArrowBack onClick={backToHome}>
          <span class="material-symbols-outlined">arrow_back_ios</span>
        </ArrowBack>
        <Header>
          <span class="material-symbols-outlined">how_to_reg</span>
          <h1>Dados do Contato</h1>
        </Header>
        <label htmlFor="contactName">Nome Completo</label>
        <DataContact>
          <input type="text" id="contactName" />
          <span class="material-symbols-outlined">contacts_product</span>
        </DataContact>
        <label htmlFor="email">E-mail</label>
        <DataContact>
          <input type="email" id="email" />
          <span class="material-symbols-outlined">alternate_email</span>
        </DataContact>
        <label htmlFor="tel">Tel</label>
        <DataContact>
          <input type="tel" id="tel" />
          <span class="material-symbols-outlined">call</span>
        </DataContact>

        <Navigate>
          <Button onClick={backToHome}>
            Cancelar
            <span class="material-symbols-outlined">cancel</span>
          </Button>
          <Button register>
            Cadastrar
            <span class="material-symbols-outlined">app_registration</span>
          </Button>
        </Navigate>
      </Container>
    </>
  );
};

export default Form;
