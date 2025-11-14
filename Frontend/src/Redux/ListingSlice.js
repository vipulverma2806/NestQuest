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

export const deleteProperty = createAsyncThunk(
  "listingMain/delete",
  async (propertyID, { rejectWithValue }) => {
    try {
      const deleted = await axios.delete(
        `${URL}/listingMain/delete/${propertyID}`
      );
      return deleted.data;
      console.log("deleted", deleted);
    } catch (err) {
      console.log("deleted", err);
      return rejectWithValue(err.data);
    }
  }
);

export const cancelProperty = createAsyncThunk(
  "listingMain/cancel",
  async (propertyID, { rejectWithValue }) => {
    try {
      const canceled = await axios.put(
        `${URL}/listingMain/cancel/${propertyID}`
      );
      console.log("canceled", canceled);
      return canceled.data;
      
    } catch (err) {
      console.log("canceled Error", err);
      return rejectWithValue(err.data);
    }
  }
);





export const handleUpdate = createAsyncThunk(
  "listingMain/update",
  async (updatedListing, { rejectWithValue, dispatch }) => {
    try {
      let formdata = new FormData();
      formdata.append("title", updatedListing.title);
      formdata.append("description", updatedListing.description);
      console.log(
        updatedListing.bimg1,
        updatedListing.bimg2,
        updatedListing.bimg3
      );
      if (updatedListing.bimg1) formdata.append("bimg1", updatedListing.bimg1);
      if (updatedListing.bimg2) formdata.append("bimg2", updatedListing.bimg2);
      if (updatedListing.bimg3) formdata.append("bimg3", updatedListing.bimg3);
      // formdata.append("bimg2", updatedListing.bimg2);
      // formdata.append("bimg3", updatedListing.bimg3);
      formdata.append("rent", updatedListing.rent);
      formdata.append("city", updatedListing.city);
      formdata.append("landmark", updatedListing.landmark);
      formdata.append("latitude", updatedListing.latitude);
      formdata.append("longitude", updatedListing.longitude);
      formdata.append("category", updatedListing.category);
      formdata.append("propertyID", updatedListing.propertyID);
      console.log("formdata is", formdata);

      const result = await axios.put(`${URL}/listingMain/update`, formdata);
      console.log("update result", result);

      dispatch(getUserData());
      return result.data;
    } catch (err) {
      console.log("update error", err);
      return rejectWithValue(err.data);
    }
  }
);

export const handleSubmit = createAsyncThunk(
  "listingMain/post",
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
    guestId:"",
    navigate: null,
    city: "",
    loading: null,
    previous: "",
    selectCat: "All",
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
      state.guestId = action.payload.guest;
    },
    categorySelect: (state, action) => {
      state.category = action.payload.category;
    },
    setNavigate: (state, action) => {
      state.navigate = action.payload;
    },
    resetListing: (state) => {
      state.title = "";
      state.navigate = null;
    },
    setSelectCat: (state, action) => {
      state.selectCat = action.payload;
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
      })
      .addCase(handleUpdate.fulfilled, (state, action) => {
        toast.success("updated Successfully");
        state.loading = false;
        state.navigate = true;
      })
      .addCase(handleUpdate.pending, (state, action) => {
        state.loading = true;
        toast.success("please wait loadind add kro");
      })
      .addCase(handleUpdate.rejected, (state, action) => {
        toast.error("Some error occured");
        state.loading = false;
      })
      .addCase(deleteProperty.rejected, (state, action) => {
        toast.error("Some error occured");
        state.loading = false;
      })
      .addCase(deleteProperty.pending, (state, action) => {
        state.loading = true;
        toast.error("please wait delete add add kro");
      })
      .addCase(deleteProperty.fulfilled, (state, action) => {
        state.loading = false;
        toast.success("Deleted successfully");
        state.navigate = true;
      })
      .addCase(cancelProperty.rejected, (state, action) => {
        toast.error("Some error occured");
        state.loading = false;
      })
      .addCase(cancelProperty.pending, (state, action) => {
        state.loading = true;
        toast.error("please wait ");
      })
      .addCase(cancelProperty.fulfilled, (state, action) => {
        state.loading = false;
        toast.success("canceled successfully");
        state.navigate = true;
      });
  },
});

export const {
  productViewPage,
  categorySelect,
  setNavigate,
  resetListing,
  setSelectCat,
} = ListingSlice.actions;
export default ListingSlice.reducer;
