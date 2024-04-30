import { DataContact, Item } from "./styles";

const Contact = () => {
  return (
    <>
      <Item>
        <form>
          <DataContact>
            <input type="text" value={"Daniel M. M. Rodrigues"} />
            <span class="material-symbols-outlined">contacts_product</span>
          </DataContact>
          <DataContact>
            <input type="email" value={"danielmmrodrigues09@gmail.com"} />
            <span class="material-symbols-outlined">alternate_email</span>
          </DataContact>
          <DataContact>
            <input type="tel" value={"(11) 9897987"} />
            <span class="material-symbols-outlined">call</span>
          </DataContact>
        </form>
      </Item>
    </>
  );
};

export default Contact;
