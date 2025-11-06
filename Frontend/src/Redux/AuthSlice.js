import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";
const URL = import.meta.env.VITE_URL;
axios.defaults.withCredentials = true;

export const getUserData = createAsyncThunk(
  "auth/getUserData",
  async (_, { rejectWithValue }) => {
    try {
      const userData = await axios.get(`${URL}/auth/getUserData`);
      console.log("sssucesssssssss");
      return userData.data;
    } catch (err) {
      console.log("nhi cahala");
      return rejectWithValue(err.message);
    }
  }
);

export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, { rejectWithValue }) => {
    try{
      const res = await axios.post("http://localhost:5000/auth/");
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const success = await axios.delete(`${URL}/auth/logout`);

      console.log(`logout success`);

      return success.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    name: "",
    email: "",
    listing: [],
    userId: 0,
    loading: false,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logout.pending, (state, action) => {
        state.loading = true;
        console.log("pending");
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        toast.success("Logout Successfull");
        state.name = "";
        state.email = "";
        state.userId = 0;
        state.listing = [];
        console.log(action.payload);
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        toast.success("Error occured");
      })
      .addCase(getUserData.pending, (state) => {
        console.log("pending ");
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.loading = false;
        console.log("yelo", action.payload);
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.userId = action.payload._id;
        console.log("this is userId", state.userId);
        state.listing = action.payload.listing;
        toast.success("getUserData Successfull");
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        toast.success("Error getUser occured");
      });
  },
});

export const { setEmail, setName, setLoading } = authSlice.actions;
export default authSlice.reducer;
