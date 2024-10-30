import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Resume from './types/Resume';
import * as api from './api';
import ResumeState from './types/ResumeState';

const emptyResume: Resume = {
	id: '',
	userId: '',
	creationDate: '',
	resumeLanguage: '',
	originalResumeId: '',
	title: '',
	personalInfo: {
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		address: '',
	},
	summary: '',
	experiences: [],
	education: [],
	skills: [],
	languages: [],
	certifications: [],
	projects: [],
	resumeTemplateName: '',
};

const initialState: ResumeState = {
	resumeOriginal: emptyResume,
	resumeEn: emptyResume,
	resumeDe: emptyResume,
	isLoading: false,
	resumeError: '',
};

export const createResume = createAsyncThunk('createResume', async (resume: Resume) => {
	const listResume = await api.createResume(resume);
	return listResume;
});

const resumeSlice = createSlice({
	name: 'resume',
	initialState,
	reducers: {
		setOriginalResume: (state, action) => {
			state.resumeOriginal = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createResume.fulfilled, (state, action) => {
				const listResume = action.payload;
				listResume.map((r) => {
					switch (r.resumeLanguage) {
						case 'en':
							state.resumeEn = r;
							break;
						case 'de':
							state.resumeDe = r;
							break;
						default:
							state.resumeOriginal = r;
							break;
					}
				});
				state.isLoading = false;
			})
			.addCase(createResume.pending, (state) => {
				state.isLoading = true;
				state.resumeError = '';
			})
			.addCase(createResume.rejected, (state, action) => {
				state.isLoading = false;
				state.resumeError = action.error.message || 'Something went wrong';
			});
	},
});

export const { setOriginalResume } = resumeSlice.actions;
export default resumeSlice.reducer;
