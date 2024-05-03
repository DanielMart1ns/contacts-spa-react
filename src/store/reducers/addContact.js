import { createSlice } from "@reduxjs/toolkit";

// class ContactData {
//   constructor(contactName, contactEmail, contactNumber) {
//     this.name = contactName;
//     this.email = contactEmail;
//     this.number = contactNumber;
//   }
// }

const initialState = [{}];

const addContact = createSlice({
  name: "add",
  initialState,
  reducers: {
    addNewContact: (state, action) => {
      const contactData = action.payload;
      state.push(contactData);
      console.log(initialState);
    },
  },
});

export const { addNewContact } = addContact.actions;
export default addContact.reducer;
