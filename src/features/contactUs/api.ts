import axios from 'axios';

interface Feedback {
	name: string;
	email: string;
	message: string;
}

const addFeedback = async (feedback: Feedback): Promise<Feedback> => {
	try {
		const response = await axios.post<Feedback>(`${API_BASE_URL}/api/feedback`, feedback);
		return response.data;
	} catch (error) {
		throw new Error('Failed to add feedback');
	}
};

export default addFeedback;
