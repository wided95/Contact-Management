import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const register = createAsyncThunk("user/register", async (user) => {
  try {
    const result = axios.post("http://localhost:5000/user/register", user);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const login = createAsyncThunk("user/login", async (user) => {
  try {
    const result = axios.post("http://localhost:5000/user/login", user);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const current = createAsyncThunk("user/current", async () => {
  try {
    const result = axios.get("http://localhost:5000/user/current",{headers:{Authorization:localStorage.getItem("token")}});
    return result;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  user: null,
  status: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout:(state,action)=>{
      localStorage.removeItem("token");
    }
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.status = "pending";
    },
    [register.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.user = action.payload.data.newUserToken;
    },
    [register.rejected]: (state) => {
      state.status = "rejected";
    },
  [login.pending]: (state) => {
    state.status = "pending";
  },
  [login.fulfilled]: (state, action) => {
    state.status = "fulfilled";
    state.user = action.payload.data.user;
    localStorage.setItem("token",action.payload.data.token);
  },
  [login.rejected]: (state) => {
    state.status = "rejected";
  },
  [current.pending]: (state) => {
    state.status = "pending";
  },
  [current.fulfilled]: (state, action) => {
    state.status = "fulfilled";
    state.user = action.payload.data.user;
    
  },
  [current.rejected]: (state) => {
    state.status = "rejected";
  },
},
});

// Action creators are generated for each case reducer function
export const { logout} = userSlice.actions;

export default userSlice.reducer;
