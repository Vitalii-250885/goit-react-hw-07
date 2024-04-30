import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    // addContact: {
    //   reducer: (state, action) => {
    //     state.items.push(action.payload);
    //   },
    //   prepare: (contact) => {
    //     return {
    //       payload: {
    //         ...contact,
    //         id: nanoid(),
    //       },
    //     };
    //   },
    // },
    // deleteContact: (state, action) => {
    //   return {
    //     items: state.items.filter((contact) => contact.id !== action.payload),
    //   };
    // },
    // fetchingInProgres: (state, action) => {},
    // fetchingSuccess: (state, action) => {},
    // fetchingError: (state, action) => {},
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;
