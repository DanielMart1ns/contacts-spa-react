import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  ArrowBack,
  Container,
  DataContact,
  Header,
  Button,
  Navigate,
} from "./styles";

import { useNavigate } from "react-router-dom";
import { addNewContact } from "../../store/reducers/addContact";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const backToHome = () => {
    navigate("/");
  };

  const registerContact = () => {
    dispatch(
      addNewContact({
        name,
        email,
        tel,
      })
    );

    if (name !== "" && (email !== "" || tel !== undefined)) {
      backToHome();
      return;
    }
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
          <input
            type="text"
            id="contactName"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          <span class="material-symbols-outlined">contacts_product</span>
        </DataContact>

        <label htmlFor="email">E-mail</label>
        <DataContact>
          <input
            type="email"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <span class="material-symbols-outlined">alternate_email</span>
        </DataContact>

        <label htmlFor="tel">Tel</label>
        <DataContact>
          <input
            type="tel"
            id="tel"
            onChange={(event) => setTel(event.target.value)}
            value={tel}
          />
          <span class="material-symbols-outlined">call</span>
        </DataContact>

        <Navigate>
          <Button onClick={backToHome}>
            Cancelar
            <span class="material-symbols-outlined">cancel</span>
          </Button>

          <Button register onClick={registerContact}>
            Cadastrar
            <span class="material-symbols-outlined">app_registration</span>
          </Button>
        </Navigate>
      </Container>
    </>
  );
};

export default Form;
