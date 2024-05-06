import { createSlice } from "@reduxjs/toolkit";

// class ContactData {
//   constructor(contactName, contactEmail, contactNumber) {
//     this.name = contactName;
//     this.email = contactEmail;
//     this.number = contactNumber;
//   }
// }

const initialState = [];

const addContact = createSlice({
  name: "add",
  initialState,
  reducers: {
    addNewContact: (state, action) => {
      const contactData = action.payload;

      if (!action.payload.name) {
        alert("Insira um nome para o contato");
        return;
      } else if (!action.payload.email && !action.payload.tel) {
        alert("Insira pelo menos uma forma de contato");
        return;
      }

      return [...state, contactData];
    },
    removeContact: (state, action) => {
      return state.filter((contact) => contact.name !== action.payload);
    },
  },
});

export const { addNewContact, removeContact } = addContact.actions;
export default addContact.reducer;
