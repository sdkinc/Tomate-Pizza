import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import FeedbackState from './types/FeedbackState';
import NewFeedbackDto from './types/NewFeedbackDto';

const initialState: FeedbackState = {
	feedbacks: [],
	isLoading: false,
	error: null,
};

export const addFeedback = createAsyncThunk(
	'feedback/addFeedback',
	async (data: NewFeedbackDto) => {
		return api.addFeedback(data);
	}
);

const feedbackSlice = createSlice({
	name: 'feedback',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(addFeedback.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(addFeedback.fulfilled, (state, action) => {
				state.isLoading = false;
				state.feedbacks.push(action.payload);
			})
			.addCase(addFeedback.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message || 'Failed to add feedback';
			});
	},
});

export default feedbackSlice.reducer;
