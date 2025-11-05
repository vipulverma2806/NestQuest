import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL = import.meta.env.VITE_URL;

export const getAll = createAsyncThunk(
  "listingMain/getAll",
  async (_, { rejectedWithValue }) => {
    try {
      console.log("pending");
      const totalList = await axios.get(`${URL}/listingMain/getAll`);
      console.log("fullfilled");
      return totalList.data;
    } catch (err) {
      return rejectedWithValue(err.message);
    }
  }
);

const ListingSlice = createSlice({
  name: "listingSlice",
  initialState: {
    title: "",
    descriptiion: "",
    fimg1: null,
    fimg2: null,
    fimg3: null,
    bimg1: null,
    bimg2: null,
    bimg3: null,
    rent: "",
    landmark: "",
    latitude: "",
    longitude: "",
    category: "",
    propertyID: 0,
    allProperties: [],
    hostId: "",
  },
  reducers: {
    productViewPage: (state, action) => {
      state.fimg1 = action.payload.fimg1;
      state.fimg2 = action.payload.fimg2;
      state.fimg3 = action.payload.fimg3;
      state.bimg1 = action.payload.bimg1;
      state.bimg2 = action.payload.bimg2;
      state.bimg3 = action.payload.bimg3;

      state.title = action.payload.title;
      state.rent = action.payload.rent;

      state.description = action.payload.description;
      state.landmark = action.payload.landmark;
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.city = action.payload.city;
      state.propertyID = action.payload._id;
      state.hostId = action.payload.host;
    },
    categorySelect: (state, action) => {
      state.category = action.payload.category;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      console.log("addCase fulfill");
      state.allProperties = action.payload;
      console.log("getAll fulfilled");
    });
  },
});

export const { productViewPage, categorySelect } = ListingSlice.actions;
export default ListingSlice.reducer;
