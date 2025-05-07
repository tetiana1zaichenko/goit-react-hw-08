import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6815012e225ff1af162ace45.mockapi.io";

export const fetchDataThunk = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data.id;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", body);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchDataThunk = () => async (dispatch) => {
//   dispatch(setLoading(true));
//   try {
//     const response = await axios.get("/contacts");
//     console.log("Полученные данные:", response.data);
//     dispatch(dataFulfilledOperation(response.data));
//   } catch (error) {
//     console.error("Ошибка при получении данных:", error);
//     dispatch(setError(error.message));
//   } finally {
//     dispatch(setLoading(false));
//   }
// };
