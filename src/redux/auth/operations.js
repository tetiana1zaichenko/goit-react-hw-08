import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://connections-api.goit.global";
export const goitAPI = axios.create({
  baseURL: "https://connections-api.goit.global",
});

const setAuthHeader = (token) => {
  goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeAuthHeader = () => {
  goitAPI.defaults.headers.common.Authorization = ``;
};

export const register = createAsyncThunk(
  "auth/register",
  async (body, thunkAPI) => {
    try {
      const response = await goitAPI.post("/users/signup", body);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (body, thunkAPI) => {
  try {
    const response = await goitAPI.post("/users/login", body);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await goitAPI.post("/users/logout");
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const refreshUser = createAsyncThunk(
//   "auth/refresh",
//   async (_, thunkAPI) => {
//     try {
//       const response = await goitAPI.get("/contacts");
//       removeAuthHeader();
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
