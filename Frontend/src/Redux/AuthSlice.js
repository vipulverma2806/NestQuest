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
      console.log("getUserData", userData);
      return userData.data;
    } catch (err) {
      // console.log("nhi cahala");
      return rejectWithValue(err.message);
    }
  }
);

export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:5000/auth/");
    } catch (err) {}
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const success = await axios.delete(`${URL}/auth/logout`);

      // console.log(`logout success`);

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
    booking:[],
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
    setResetId:(state,action)=>{
      state.userId = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logout.pending, (state, action) => {
        state.loading = true;
        // console.log("pending");
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        toast.success("Logout Successfull");
        state.name = "";
        state.email = "";
        state.userId = 0;
        state.listing = [];
        state.booking = [];
        // console.log(action.payload);
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        // console.log(action.payload);
        toast.success("Error occured");
      })
      .addCase(getUserData.pending, (state) => {
        state.loading = true;
        // console.log(state.loading)
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.loading = false;
        // console.log(state.loading)
        // console.log("yelo", action.payload);
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.userId = action.payload._id;
        // console.log("this is userId", state.userId);
        state.listing = action.payload.listing;
        state.booking = action.payload.booking;
        toast.success("getUserData Successfull");
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.loading = false;
        console.log(state.loading)
        // console.log(action.payload);
        toast.success("Error getUser occured");
      });
  },
});

export const { setEmail, setName, setLoading,setResetId, } = authSlice.actions;
export default authSlice.reducer;
