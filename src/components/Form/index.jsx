import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const names = useSelector((state) => state.add);

  const backToHome = () => {
    navigate("/");
  };

  const registerContact = (event) => {
    event.preventDefault();
    dispatch(
      addNewContact({
        name,
        email,
        tel,
      })
    );

    if (name !== "" && (email !== "" || tel !== undefined)) {
      if (!names.some((data) => data.name === name)) backToHome();
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

        <form onSubmit={registerContact}>
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
              minLength={8}
            />
            <span class="material-symbols-outlined">call</span>
          </DataContact>

          <Navigate>
            <Button onClick={backToHome}>
              Cancelar
              <span class="material-symbols-outlined">cancel</span>
            </Button>

            <Button register type="submit">
              Cadastrar
              <span class="material-symbols-outlined">app_registration</span>
            </Button>
          </Navigate>
        </form>
      </Container>
    </>
  );
};

export default Form;
