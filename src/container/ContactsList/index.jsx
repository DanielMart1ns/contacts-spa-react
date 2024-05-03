import Contact from "../../components/Contact";
import { CirclePlus, Main } from "./styles";

const ContactsList = () => {
  return (
    <>
      <Main>
        <Contact />
      </Main>
      <CirclePlus to="/new">+</CirclePlus>
    </>
  );
};

export default ContactsList;
