import Template from './Template';

export default interface PreviewPdfState {
	generatedPdfResume: string;
	generatedHtmlCode: string;
	htmlTemplates: Template[];
	templatesWithExample: Template[];
	currenHtmlTemplate: Template;
	showSelectorHtmlTemplate: boolean;
	isLoading: boolean;
	previewPdfError: string;
}
