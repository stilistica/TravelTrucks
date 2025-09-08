import { createSlice } from "@reduxjs/toolkit";
import { getCamperById, getCampers } from "./operations";

const initialState = {
  items: [],
  favoriteCampers: [],
  filter: {
    page: 1,
    limit: 4,
    equipment: {},
    form: "",
    location: "",
    transmission: "",
    engine: "",
  },
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
      state.filter.page = 1;
    },
    setPage: (state, action) => {
      state.filter.page = action.payload;
    },

    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload, page: 1 };
    },
    resetFilter: (state) => {
      state.filter = initialState.filter;
    },

    addToFavorites: (state, action) => {
      if (!state.favoriteCampers.includes(action.payload)) {
        state.favoriteCampers.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      state.favoriteCampers = state.favoriteCampers.filter(
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
        if (state.filter.page > 1) {
          state.items = [...state.items, ...action.payload.items];
        } else {
          state.items = action.payload.items;
        }
        state.totalItems = action.payload.total;
        state.error = null;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getCamperById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        const exists = state.items.find((c) => c.id === action.payload.id);
        if (!exists) {
          state.items.push(action.payload);
        }
        state.error = null;
      })
      .addCase(getCamperById.rejected, (state, action) => {
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
  setPage,
} = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
