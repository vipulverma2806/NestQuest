import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setLoading } from "./AuthSlice";
import { toast } from "react-toastify";
const URL = import.meta.env.VITE_URL;
import { useNavigate } from "react-router-dom";
import { getUserData } from "./AuthSlice";
export const getAll = createAsyncThunk(
  "listingMain/getAll",
  async (_, { rejectWithValue }) => {
    try {
      // console.log("pending");
      const totalList = await axios.get(`${URL}/listingMain/getAll`);
      // console.log("fullfilled");
      return totalList.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const handleSubmit = createAsyncThunk(
  "listingMain/past",
  async ({ bimg1, bimg2, bimg3 }, { getState, rejectWithValue, dispatch }) => {
    try {
      const state = getState();
      const listing = state.listing;

      let formdata = new FormData();
      formdata.append("title", listing.title);
      formdata.append("description", listing.description);
      console.log(bimg1, bimg2, bimg3);
      formdata.append("bimg1", bimg1);
      formdata.append("bimg2", bimg2);
      formdata.append("bimg3", bimg3);
      formdata.append("rent", listing.rent);
      formdata.append("city", listing.city);
      formdata.append("landmark", listing.landmark);
      formdata.append("latitude", listing.latitude);
      formdata.append("longitude", listing.longitude);
      formdata.append("category", listing.category);

      console.log("listingMain/past working");
      dispatch(setLoading(true));
      const result = await axios.post(`${URL}/listingMain/post`, formdata);
      console.log("listingMain/past Api responded");
      dispatch(setLoading(false));
      dispatch(getUserData());
      return result.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.data);
    }
  }
);

const ListingSlice = createSlice({
  name: "listingSlice",
  initialState: {
    title: "",
    description: "",
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
    navigate: null,
    city: "",
    loading: null,
    previous: "",
  },
  reducers: {
    productViewPage: (state, action) => {
      state.fimg1 = action.payload.img1;
      state.fimg2 = action.payload.img2;
      state.fimg3 = action.payload.img3;
      // state.bimg1 = action.payload.bimg1;
      // state.bimg2 = action.payload.bimg2;
      // state.bimg3 = action.payload.bimg3;
      state.previous = action.payload.previous;
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
    setNavigate: (state, action) => {
      state.navigate = action.payload;
    },
    resetListing: (state) => {
      state.title = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.fulfilled, (state, action) => {
        // console.log("addCase fulfill");
        state.allProperties = action.payload;
        // console.log("getAll fulfilled");
      })
      .addCase(getAll.rejected, (state, action) => {
        toast.error("network Error");
      })
      .addCase(handleSubmit.pending, (state, action) => {
        state.navigate = false;
        state.loading = true;
      })
      .addCase(handleSubmit.fulfilled, (state, action) => {
        // console.log("uploaded");
        toast.success("listing uploaded");

        state.navigate = true;
        state.loading = false;
      })
      .addCase(handleSubmit.rejected, (state, action) => {
        // console.log("Rejected");
        toast.error("Some error occured rejected");
        state.loading = false;
      });
  },
});

export const { productViewPage, categorySelect, setNavigate, resetListing } =
  ListingSlice.actions;
export default ListingSlice.reducer;
