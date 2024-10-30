import { RootState } from '../../app/store';
import FeedbackDto from './types/FeedbackDto';

export const selectFeedback = (state: RootState): FeedbackDto[] => state.feedback.feedbacks;
