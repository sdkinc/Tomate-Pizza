import styles from './subscribe.module.css';
import { useTranslation } from 'react-i18next';
import Privacy from '../../../components/privacy/Privacy';
import Terms from '../../../components/terms/Terms';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import addNewsletter from '../api';
import { useState } from 'react';

function Subscribe(): JSX.Element {
	const { t, i18n } = useTranslation();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalContentKey, setModalContentKey] = useState<string>('');
	const [emailError, setEmailError] = useState(false);
	const [email, setEmail] = useState('');
	const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
	const [isSending, setIsSending] = useState(false);

	const handleOpenModal = (contentKey: string): void => {
		setModalContentKey(contentKey);
		setIsModalOpen(true);
	};

	const handleCloseModal = (): void => {
		setIsModalOpen(false);
	};

	const checkFullCorrect = (): boolean => {
		return !!email && !emailError;
	};

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const emailValue = e.target.value.trim();
		const isValidEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/.test(emailValue);
		setEmail(emailValue);
		setEmailError(!isValidEmail);
	};

	const handleSubmit = async (): Promise<void> => {
		setIsSending(true);

		const newsletter = {
			email,
		};

		const res = await addNewsletter(newsletter);
		if (res.email === email) {
			setIsSending(false);
			setIsSubmittedSuccessfully(true);
		} else {
			setIsSending(false);
			setIsSubmittedSuccessfully(false);
		}
	};

	return (
		<div className={styles.blogBox}>
			<h1 className={styles.title}>{t('blogTitle')}</h1>
			<div className={styles.bannerContainer}>
				<div className={styles.imageContainer}></div>
				<div className={styles.contactUsContainer}>
					{isModalOpen && (
						<div
							className={styles.modalOverlay}
							onClick={handleCloseModal}
							role="button"
							tabIndex={0}
						>
							<div
								className={styles.modalContent}
								onClick={(e) => e.stopPropagation()}
								role="button"
								tabIndex={0}
							>
								<button type="button" className={styles.closeButton} onClick={handleCloseModal}>
									×
								</button>
								<div className={styles.modalBody}>
									{modalContentKey === 'terms' && <Terms />}
									{modalContentKey === 'privacy' && <Privacy />}
								</div>
							</div>
						</div>
					)}
					<div className={styles.subscriptionForm}>
						{!isSubmittedSuccessfully && !isSending ? (
							<>
								<p className={styles.subscriptionTitle}> {t('subscribe')}</p>
								<p className={styles.subscriptionText1}> {t('subscribeText1')}</p>
								<p className={styles.subscriptionText}> {t('subscribeText2')}</p>
								<p className={styles.subscriptionText3}> {t('subscribeText3')}</p>
								<form
									onSubmit={(e) => {
										e.preventDefault();
										handleSubmit();
									}}
								>
									<label htmlFor="emailInput" className={styles.visuallyHidden}>
										Email Address
									</label>
									<div className={styles.inputContainer}>
										<input
											id="emailInput"
											type="email"
											placeholder={t('emailExample')}
											value={email}
											onChange={handleEmailChange}
											required
											pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
											title={t('emailRequirements')}
											className={styles.emailInput}
										/>
										<button
											type={checkFullCorrect() ? 'submit' : 'button'}
											className={`${styles.subscribeButton} ${checkFullCorrect() ? '' : styles.noActive}`}
										>
											{t('subscribeBtn')}
										</button>
									</div>
								</form>
								<div className={styles.agreementTextContainer}>
									<div className={styles.agreementText}>
										{t('agreementText1')}
										<button
											type="button"
											onClick={() => handleOpenModal('terms')}
											className={styles.link}
											id="termsLink"
										>
											{t('terms-and-conditions')}
										</button>
										<p className={styles.linkAnd}>{t('agreementText2')}</p>

										<button
											type="button"
											onClick={() => handleOpenModal('privacy')}
											className={styles.link2}
											id="privacyPolicyLink"
										>
											{t('privacy-policy')}
										</button>
										<p className={styles.linkAnd}>
											{i18n.language === 'de' && t('agreementText3')}
										</p>
									</div>
								</div>
							</>
						) : (
							<div className={styles.confirmBox}>
								{isSending ? (
									<p className={styles.sendingMessage}>{t('sendingMessage')}</p>
								) : (
									isSubmittedSuccessfully && (
										<>
											<h3 className={styles.titlePage}>{t('Successful')}</h3>

											<p className={styles.successfulFormText}>
												<span>{t('thankYouMessage')}</span>
												<ThumbUpAltIcon className={styles.iconSubscribing} />
											</p>
											<p className={styles.successfulFormText}>{t('subscriptionConfirmation')}</p>
											<p className={styles.successfulFormText}>{t('keepFollowingUpdates')}</p>
										</>
									)
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Subscribe;
