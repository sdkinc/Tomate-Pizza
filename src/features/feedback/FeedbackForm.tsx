import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import { addFeedback } from './feedbackSlice';
import NewFeedbackDto from './types/NewFeedbackDto';
import styles from './FeedbackForm.module.css';
import { useTranslation } from 'react-i18next';
import { selectUser } from '../auth/selectors';

const FeedbackForm: React.FC = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch<AppDispatch>();
	const { isLoading, error } = useSelector((state: RootState) => state.feedback);
	const user = useSelector(selectUser);
	const [textMessage, setTextMessage] = useState<string>('');

	const handleSubmit = async (e: React.FormEvent): Promise<void> => {
		e.preventDefault();
		if (user) {
			const newFeedback: NewFeedbackDto = { userId: user.userId, textMessage };
			await dispatch(addFeedback(newFeedback));
		} else {
			console.error('User is not logged in');
		}
	};
	const maxLength = 500;
	return (
		<div className={styles.feedbackFormContainer}>
			<h2 className={styles.title}>{t('add feedback').toUpperCase()}</h2>
			<div className={styles.feedbackFormBox}>
				<div className={styles.messageContainer}>
					<label htmlFor="textMessage">{t('message')}</label>
				</div>
				<form onSubmit={handleSubmit} className={styles.feedbackForm}>
					<div className={styles.formGroup}>
						<textarea
							id="textMessage"
							value={textMessage}
							onChange={(e) => setTextMessage(e.target.value)}
							required
							maxLength={maxLength}
						/>
						<div
							className={styles.characterCount}
						>{`${textMessage.length}/${maxLength} ${t('charactersUsed')}`}</div>
					</div>
					<button type="submit" disabled={isLoading}>
						{isLoading ? t('add feedback.sending') : t('add feedback.submit')}
					</button>
					{error && <p className={styles.error}>{error}</p>}
				</form>
			</div>
		</div>
	);
};

export default FeedbackForm;
