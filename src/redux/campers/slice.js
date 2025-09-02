import { createSlice } from "@reduxjs/toolkit";
import { getCampers } from "./operations";

const initialState = {
  items: [],
  favoriteProducts: [],
  filter: { page: 1, perPage: 4, equipment: [], type: "" },
  totalItems: 0,
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    resetItems: (state) => {
      state.items = [];
      state.totalItems = 0;
    },

    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
    resetFilter: (state) => {
      state.filter = initialState.filter;
    },

    addToFavorites: (state, action) => {
      if (!state.favoriteProducts.includes(action.payload)) {
        state.favoriteProducts.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      state.favoriteProducts = state.favoriteProducts.filter(
        (id) => id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.items;
        state.totalItems = action.payload.total;
        state.error = null;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  setFilter,
  resetFilter,
  resetItems,
} = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
