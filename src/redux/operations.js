import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6815012e225ff1af162ace45.mockapi.io";

export const fetchDataThunk = createAsyncThunk("fetchContacts", async () => {
  try {
    const response = await axios.get("/contacts");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

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
