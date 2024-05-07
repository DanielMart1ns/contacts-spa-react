import { useDispatch } from "react-redux";
import {
  Button,
  ButtonStopEdit,
  DataContact,
  Item,
  ContactOptions,
  EditingText,
} from "./styles";
import { removeContact } from "../../store/reducers/addContact";
import { useState } from "react";

const Contact = ({ name, email, tel }) => {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const [contactName, setName] = useState(name);
  const [contactEmail, setEmail] = useState(email);
  const [contactTel, setTel] = useState(tel);

  function preventAction(event) {
    event.preventDefault();
  }
  return (
    <>
      <Item>
        <form onSubmit={preventAction}>
          {isEditing && <EditingText>Editando...</EditingText>}
          <label>Nome Completo</label>
          <DataContact>
            <input
              type="text"
              value={contactName}
              onChange={(event) => setName(event.target.value)}
              disabled={!isEditing}
            />
            <span class="material-symbols-outlined">contacts_product</span>
          </DataContact>
          <label>E-mail</label>
          <DataContact>
            <input
              type="email"
              value={contactEmail}
              onChange={(event) => setEmail(event.target.value)}
              disabled={!isEditing}
            />
            <span class="material-symbols-outlined">alternate_email</span>
          </DataContact>
          <label>Tel</label>
          <DataContact>
            <input
              type="tel"
              value={contactTel}
              onChange={(event) => setTel(event.target.value)}
              disabled={!isEditing}
            />
            <span class="material-symbols-outlined">call</span>
          </DataContact>
          <ContactOptions>
            {isEditing ? (
              <ButtonStopEdit onClick={() => setEditing(false)}>
                Parar de editar
                <span class="material-symbols-outlined">check_circle</span>
              </ButtonStopEdit>
            ) : (
              <>
                <Button toEdit onClick={() => setEditing(true)}>
                  Editar
                  <span class="material-symbols-outlined">edit</span>
                </Button>
                <Button onClick={() => dispatch(removeContact(name))}>
                  Remover
                  <span class="material-symbols-outlined">delete</span>
                </Button>
              </>
            )}
          </ContactOptions>
        </form>
      </Item>
    </>
  );
};

export default Contact;
