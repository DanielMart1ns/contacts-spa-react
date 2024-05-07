import { useDispatch } from "react-redux";
import { Button, DataContact, Item, ContactOptions } from "./styles";
import { removeContact } from "../../store/reducers/addContact";

const Contact = ({ name, email, tel }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Item>
        <form>
          <label>Nome Completo</label>
          <DataContact>
            <input type="text" value={name} disabled />
            <span class="material-symbols-outlined">contacts_product</span>
          </DataContact>
          <label>E-mail</label>
          <DataContact>
            <input type="email" value={email} />
            <span class="material-symbols-outlined">alternate_email</span>
          </DataContact>
          <label>Tel</label>
          <DataContact>
            <input type="tel" value={tel} />
            <span class="material-symbols-outlined">call</span>
          </DataContact>
          <ContactOptions>
            <Button toEdit>
              Editar
              <span class="material-symbols-outlined">edit</span>
            </Button>
            <Button onClick={() => dispatch(removeContact(name))}>
              Remover
              <span class="material-symbols-outlined">delete</span>
            </Button>
          </ContactOptions>
        </form>
      </Item>
    </>
  );
};

export default Contact;
