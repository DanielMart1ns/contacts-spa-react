import { Button, DataContact, Item, ContactOptions } from "./styles";

const Contact = ({ name, email, tel }) => {
  return (
    <>
      <Item>
        <form>
          <label htmlFor="">Nome Completo</label>
          <DataContact>
            <input type="text" value={name} />
            <span class="material-symbols-outlined">contacts_product</span>
          </DataContact>
          <label htmlFor="">E-mail</label>
          <DataContact>
            <input type="email" value={email} />
            <span class="material-symbols-outlined">alternate_email</span>
          </DataContact>
          <label htmlFor="">Tel</label>
          <DataContact>
            <input type="tel" value={tel} />
            <span class="material-symbols-outlined">call</span>
          </DataContact>
          <ContactOptions>
            <Button toEdit>
              Editar
              <span class="material-symbols-outlined">edit</span>
            </Button>
            <Button>
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
