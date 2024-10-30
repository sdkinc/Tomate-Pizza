import FeedbackDto from './FeedbackDto';

export default interface FeedbackState {
	feedbacks: FeedbackDto[];
	isLoading: boolean;
	error: string | null;
}
