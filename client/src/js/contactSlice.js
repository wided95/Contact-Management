import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const addcontact = createAsyncThunk("contact/add", async (contact) => {
    try {
      let result = axios.post("http://localhost:5000/contact/add", contact);
      return result;
    } catch (error) {}
  });
  export const getcontacts = createAsyncThunk("contact/get", async () => {
    try {
      let result = axios.get("http://localhost:5000/contact/");
      return result;
    } catch (error) {}
  });
  export const updatecontact = createAsyncThunk(
    "contact/update",
    async ({ id, contact }) => {
      try {
        let result = axios.put(`http://localhost:5000/contact/${id}`, contact);
        return result;
      } catch (error) {
        console.log(error);
      }
    }
  );
  export const deletecontact = createAsyncThunk("contact/delete", async (id) => {
    try {
      let result = axios.delete(`http://localhost:5000/contact/${id}`);
      return result;
    } catch (error) {
      console.log(error);
    }
  });
  const initialState = {
    contacts: null,
    status: null,
  };
  export const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {},
    extraReducers: {
      [addcontact.pending]: (state) => {
        state.status = "pending";
      },
      [addcontact.fulfilled]: (state) => {
        state.status = "fulfilled";
      },
      [addcontact.rejected]: (state) => {
        state.status = "rejected";
      },
      [getcontacts.pending]: (state) => {
        state.status = "pending";
      },
      [getcontacts.fulfilled]: (state, action) => {
        state.status = "fulfilled";
        state.contacts = action.payload.data.contacts;
      },
      [getcontacts.rejected]: (state) => {
        state.status = "rejected";
      },
      [updatecontact.pending]: (state) => {
        state.status = "pending";
      },
      [updatecontact.fulfilled]: (state) => {
        state.status = "fulfilled";
      },
      [updatecontact.rejected]: (state) => {
        state.status = "rejected";
      },
      [deletecontact.pending]: (state) => {
        state.status = "pending";
      },
      [deletecontact.fulfilled]: (state) => {
        state.status = "fulfilled";
      },
      [deletecontact.rejected]: (state) => {
        state.status = "rejected";
      },
    },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = productSlice.actions

export default contactSlice.reducer;