import axios from 'axios';
import { axiosDefault } from '../../utils/axios/config';
import Resume from '../resumeEditor/types/Resume';
import Template from './types/Template';

export async function createHtmlResume(resume: Resume): Promise<string> {
	const res = await axiosDefault.post(
		`${API_BASE_URL}/api/resumes/generate-html`,
		JSON.stringify(resume)
	);
	if (res.status !== 201) {
		throw res.data;
	}
	return res.data;
}

export async function createPdfResume(resume: Resume): Promise<string> {
	const res = await axios.post(`${API_BASE_URL}/api/resumes/generate-pdf`, JSON.stringify(resume), {
		responseType: 'arraybuffer',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	if (res.status !== 200) {
		throw res.data;
	}
	const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
	const pdfUrl = URL.createObjectURL(pdfBlob);
	return pdfUrl;
}

export async function getHtmlTemplates(): Promise<Template[]> {
	const res = await axiosDefault.get(`${API_BASE_URL}/api/resumes/templates`);
	if (res.status !== 200) {
		throw res.data;
	}
	return res.data;
}
