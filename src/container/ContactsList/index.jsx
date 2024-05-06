import { useSelector } from "react-redux";
import Contact from "../../components/Contact";
import { CirclePlus, Main } from "./styles";

const ContactsList = () => {
  const dataUser = useSelector((state) => state.add);
  return (
    <>
      <Main>
        {dataUser.map((data) => (
          <Contact
            name={data.name}
            email={data.email}
            tel={data.tel}
            key={data.name}
          />
        ))}
      </Main>
      <CirclePlus to="/new">+</CirclePlus>
    </>
  );
};

export default ContactsList;
