import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "../../utils/api";

export const getCampers = createAsyncThunk(
	"campers/getAll",
	async (query, { rejectWithValue }) => {
		try {
			const data = await fetchCampers(query) // (query ?? {});
			return data;
		} catch (err) {
			if (err.response && err.response.status === 404) {
				return { items: [], total: 0 };
			}
			return rejectWithValue(err?.message || "Failed to load campers");
		}
	}
)
export const getCamperById = createAsyncThunk(
	"campers/getById",
	async (id, { rejectWithValue }) => {
		try {
			const data = await fetchCamperById(id);
			return data;
		} catch (err) {
			return rejectWithValue(err?.message || "Failed to load camper");
		}
	}
)