export default interface FeedbackDto {
	_id: string;
	userId: number;
	createTimeStamp: string;
	textMessage: string;
	countLike: number;
}
