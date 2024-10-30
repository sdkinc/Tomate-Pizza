import axios from 'axios';

interface Newsletter {
	email: string;
}

const addNewsletter = async (newsletter: Newsletter): Promise<Newsletter> => {
	try {
		const response = await axios.post<Newsletter>(`${API_BASE_URL}/api/newsletter`, newsletter);
		return response.data;
	} catch (error) {
		throw new Error('Failed to add newsletter');
	}
};

export default addNewsletter;
