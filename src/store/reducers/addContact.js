import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addContact = createSlice({
  name: "add",
  initialState,
  reducers: {
    addNewContact: (state, action) => {
      const contactData = action.payload;
      const iqualName = state.some((data) => data.name === action.payload.name);

      if (!action.payload.name) {
        alert("Insira um nome para o contato");
        return;
      } else if (!action.payload.email && !action.payload.tel) {
        alert("Insira pelo menos uma forma de contato");
        return;
      }

      if (iqualName) {
        alert("Já possui um item com esse nome");
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
