import { createSlice } from "@reduxjs/toolkit";

class initialState {
  constructor(contactName, contactEmail, contactNumber) {
    this.name = contactName;
    this.email = contactEmail;
    this.number = contactNumber;
  }
}

const addContact = createSlice({
  name: "add",
  initialState,
  reducers: {
    addContact: (state, action) => {
      const newContact = new initialState();
    },
  },
});
