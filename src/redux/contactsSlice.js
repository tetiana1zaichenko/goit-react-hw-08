import { createSlice, nanoid } from "@reduxjs/toolkit";
import { fetchDataThunk } from "./operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
    dataFulfilledOperation: (state, action) => {
      state.items = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataThunk.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchDataThunk.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const {
  addContact,
  deleteContact,
  dataFulfilledOperation,
  setLoading,
  setError,
} = contactsSlice.actions;
export default contactsSlice.reducer;
