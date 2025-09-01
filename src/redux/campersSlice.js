import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCaampers = createAsyncThunk(
	"campers/fetchCampers",
	async(__, thunkAPI) => {
		try {
			const {data} = await axios.get(`${BASE_URL}/campers`);
			return data;
		} catch (err) {
			return thunkAPI.rejectWithValue(err.message);
		}
	}
);
export const fetchCamperById = createAsyncThunk(
	"campers/fetchCamperById",
	async(id, thunkAPI) => {
		try {
			const {data} = await axios.get(`${BASE_URL}/campers/${id}`);
			return data;
		} catch (err) {
			return thunkAPI.rejectWithValue(err.message);
		}
	}
);

const campersSlice = createSlice({
	name: "campers",
	initialState: {
		items: [],
		camper: null,
		isLoading: false,
		err: null,
	},
	reducers: {},
	// extraReducers: 
})

export const campersReducer = campersSlice.reducer;