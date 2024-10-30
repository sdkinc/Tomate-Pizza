import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import feedbackReducer from '../features/feedback/feedbackSlice';
import resumeReducer from '../features/resumeEditor/resumeSlice';
import previewPdfReducer from '../features/previewPdf/previewPdfSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		feedback: feedbackReducer,
		resume: resumeReducer,
		previewPdf: previewPdfReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
