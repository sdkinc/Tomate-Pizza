import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import PreviewPdfState from './types/PreviewPdfState';
import Resume from '../resumeEditor/types/Resume';
import Template from './types/Template';

const initialState: PreviewPdfState = {
	generatedPdfResume: '',
	generatedHtmlCode: '',
	htmlTemplates: [],
	currenHtmlTemplate: {
		fileName: '',
		htmlContent: '',
	},
	showSelectorHtmlTemplate: true,
	isLoading: false,
	previewPdfError: '',
	templatesWithExample: [],
};

export const getHtmlResume = createAsyncThunk('getHtmlResume', async (resume: Resume) =>
	api.createHtmlResume(resume)
);

export const getPdfResume = createAsyncThunk('getPdfResume', async (resume: Resume) =>
	api.createPdfResume(resume)
);

export const getHtmlTemplates = createAsyncThunk('getHtmlTemplates', async () =>
	api.getHtmlTemplates()
);

const previewPdfSlice = createSlice({
	name: 'previewPdf',
	initialState,
	reducers: {
		setShowSelectorHtmlTemplate: (state, action) => {
			state.showSelectorHtmlTemplate = action.payload;
		},
		setCurrenHtmlTemplate: (state, action) => {
			state.currenHtmlTemplate = action.payload;
		},
		setTemplatesWithExample: (state, action) => {
			const newTemplateWithExample: Template = action.payload;
			if (
				!state.templatesWithExample.some((obj) => obj.fileName === newTemplateWithExample.fileName)
			) {
				state.templatesWithExample.push(newTemplateWithExample);
			}
		},
		clearTemplatesWithExample: (state) => {
			state.templatesWithExample = [];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getHtmlResume.fulfilled, (state, action) => {
				state.generatedHtmlCode = action.payload;
				state.isLoading = false;
				state.previewPdfError = '';
			})
			.addCase(getHtmlResume.pending, (state) => {
				state.isLoading = true;
				state.previewPdfError = '';
			})
			.addCase(getHtmlResume.rejected, (state, action) => {
				state.isLoading = false;
				state.previewPdfError = action.error.message || 'Something went wrong';
			})
			.addCase(getPdfResume.fulfilled, (state, action) => {
				state.generatedPdfResume = action.payload;
				state.isLoading = false;
				state.previewPdfError = '';
			})
			.addCase(getHtmlTemplates.fulfilled, (state, action) => {
				state.htmlTemplates = action.payload;
				state.isLoading = false;
				state.previewPdfError = '';
			});
	},
});

export const {
	setShowSelectorHtmlTemplate,
	setCurrenHtmlTemplate,
	setTemplatesWithExample,
	clearTemplatesWithExample,
} = previewPdfSlice.actions;
export default previewPdfSlice.reducer;
