import { axiosDefault } from '../../utils/axios/config';
import Resume from './types/Resume';

export async function createResume(resume: Resume): Promise<Resume[]> {
	const res = await axiosDefault.post(`${API_BASE_URL}/api/resumes`, JSON.stringify(resume));
	if (res.status !== 201) {
		throw res.data;
	}
	return res.data;
}
