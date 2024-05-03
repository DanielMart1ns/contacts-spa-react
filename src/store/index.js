import { configureStore } from "@reduxjs/toolkit";
import addContactReducer from "./reducers/addContact";

const store = configureStore({
  reducer: {
    add: addContactReducer,
  },
});

export default store;
