import { axiosWithAuth } from '../../utils/axios/config';
import FeedbackDto from './types/FeedbackDto';
import NewFeedbackDto from './types/NewFeedbackDto';

export async function addFeedback(data: NewFeedbackDto): Promise<FeedbackDto> {
	const res = await axiosWithAuth.post<FeedbackDto>(
		`${API_BASE_URL}/api/feedbacks`,
		JSON.stringify(data)
	);
	if (res.status !== 201) {
		throw new Error('Failed to add feedback');
	}
	return res.data;
}
