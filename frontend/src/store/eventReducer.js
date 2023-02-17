import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk(
  "events/getData",
  async (args, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:8080/events");

      const data = await response.json();

      return data.events;
    } catch (error) {
      console.log("************Error****************");
      rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  data: [],
  loading: false,
  message: "",
  isSuccess: false,
};

const eventsSlice = createSlice({
  name: "events",

  initialState,

  reducers: {},

  extraReducers: {
    [getData.pending]: (state, { payload }) => {
      state.loading = true;
      state.isSuccess = false;
    },
    [getData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.message = payload;
      state.isSuccess = false;
    },
  },
});

export const { addEvent, editEvent, removeEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
