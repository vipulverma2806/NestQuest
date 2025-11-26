import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { toast } from "react-toastify";
const URL = import.meta.env.VITE_URL;
axios.defaults.withCredentials = true;
import { getUserData } from "./AuthSlice";

export const getAdminData = createAsyncThunk(
  "adminRoute/getAdminData",
  async (_, { rejectWithValue }) => {
    try {
      console.log("pending getAdminData");
      const adminData = await axios.get(`${URL}/adminRoute/getAdminData`);
      // console.log("fullfilled");
      console.log("ye raha admindata", adminData.data);
      return adminData.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// export const deleteProperty = createAsyncThunk(
//   "listingMain/delete",
//   async (propertyID, { rejectWithValue,dispatch }) => {
//     try {
//       const deleted = await axios.delete(
//         `${URL}/listingMain/delete/${propertyID}`
//       );
//       dispatch(getUserData());
//       return deleted.data;
//       // console.log("deleted", deleted);
//     } catch (err) {
//       console.log("deleted", err);
//       return rejectWithValue(err.data);
//     }
//   }
// );

// export const cancelProperty = createAsyncThunk(
//   "listingMain/cancel",
//   async (propertyID, { rejectWithValue,dispatch }) => {
//     try {
//       const canceled = await axios.put(
//         `${URL}/listingMain/cancel/${propertyID}`
//       );
//       // console.log("canceled", canceled);
//       dispatch(getUserData());
//       return canceled.data;

//     } catch (err) {
//       console.log("canceled Error", err);
//       return rejectWithValue(err.data);
//     }
//   }
// );

// export const handleUpdate = createAsyncThunk(
//   "listingMain/update",
//   async (updatedListing, { rejectWithValue, dispatch }) => {
//     try {
//       // console.log("category update",updatedListing.category)
//       let formdata = new FormData();
//       formdata.append("title", updatedListing.title);
//       formdata.append("description", updatedListing.description);
//       console.log(
//         updatedListing.bimg1,
//         updatedListing.bimg2,
//         updatedListing.bimg3
//       );
//       if (updatedListing.bimg1) formdata.append("bimg1", updatedListing.bimg1);
//       if (updatedListing.bimg2) formdata.append("bimg2", updatedListing.bimg2);
//       if (updatedListing.bimg3) formdata.append("bimg3", updatedListing.bimg3);

//       // formdata.append("bimg2", updatedListing.bimg2);
//       // formdata.append("bimg3", updatedListing.bimg3);
//       formdata.append("rent", updatedListing.rent);
//       formdata.append("city", updatedListing.city);
//       formdata.append("landmark", updatedListing.landmark);
//       formdata.append("latitude", updatedListing.latitude);
//       formdata.append("longitude", updatedListing.longitude);
//       formdata.append("category", updatedListing.category);
//       formdata.append("propertyID", updatedListing.propertyID);

//       const result = await axios.put(`${URL}/listingMain/update`, formdata);
//       // console.log("update result", result);

//       dispatch(getUserData());
//       return result.data;
//     } catch (err) {
//       console.log("update error", err);
//       return rejectWithValue(err.data);
//     }
//   }
// );

// export const handleSubmit = createAsyncThunk(
//   "listingMain/post",
//   async ({ bimg1, bimg2, bimg3 }, { getState, rejectWithValue, dispatch }) => {
//     try {
//       const state = getState();
//       const listing = state.listing;

//       let formdata = new FormData();
//       formdata.append("title", listing.title);
//       formdata.append("description", listing.description);
//       // console.log(bimg1, bimg2, bimg3);
//       formdata.append("bimg1", bimg1);
//       formdata.append("bimg2", bimg2);
//       formdata.append("bimg3", bimg3);
//       formdata.append("rent", listing.rent);
//       formdata.append("city", listing.city);
//       formdata.append("landmark", listing.landmark);
//       formdata.append("latitude", listing.latitude);
//       formdata.append("longitude", listing.longitude);
//       formdata.append("category", listing.category);

//       // console.log("listingMain/past working");
//       dispatch(setLoading(true));
//       const result = await axios.post(`${URL}/listingMain/post`, formdata);
//       // console.log("listingMain/past Api responded");
//       dispatch(setLoading(false));
//       dispatch(getUserData());
//       return result.data;
//     } catch (err) {
//       console.log(err);
//       return rejectWithValue(err.data);
//     }
//   }
// );

const AdminSlice = createSlice({
  name: "AdminSlice",
  initialState: {
    allBookings: [],
    allUsers: [],
    allListings: [],
    allReviews: [],
  },
  reducers: {
    cleanAdminData: (state, action) => {
      state.allBookings = [];
      state.allListings = [];
      state.allReviews = [];
      state.allUsers = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAdminData.fulfilled, (state, action) => {
        console.log("addCase fulfill");

        state.allListings = action.payload.allListings;
        state.allUsers = action.payload.allUsers;
        state.allBookings = action.payload.allBookings;
        state.allReviews = action.payload.allReviews;
      })
      .addCase(getAdminData.pending, (state, action) => {
        console.log("pending")
      })
      .addCase(getAdminData.rejected, (state, action) => {
        console.log("unsuccessfull")
      });
  },
});

export const {
  //   getAdminData
  //   categorySelect,
  //   setNavigate,
  //   resetListing,
  cleanAdminData,
} = AdminSlice.actions;
export default AdminSlice.reducer;
