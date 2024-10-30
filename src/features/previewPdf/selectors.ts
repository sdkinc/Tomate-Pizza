import { RootState } from '../../app/store';
import Template from './types/Template';

export const selectGeneratedHtmlCode = (state: RootState): string =>
	state.previewPdf.generatedHtmlCode;
export const selectShowSelectorHtmlTemplate = (state: RootState): boolean =>
	state.previewPdf.showSelectorHtmlTemplate;
export const selectHtmlTemplates = (state: RootState): Template[] => state.previewPdf.htmlTemplates;
export const selectCurrentHtmlTemplate = (state: RootState): Template =>
	state.previewPdf.currenHtmlTemplate;
export const selectGeneratedPdfResume = (state: RootState): string =>
	state.previewPdf.generatedPdfResume;
export const selectTemplatesWithExample = (state: RootState): Template[] =>
	state.previewPdf.templatesWithExample;
export const selectIsLoading = (state: RootState): boolean => state.previewPdf.isLoading;
