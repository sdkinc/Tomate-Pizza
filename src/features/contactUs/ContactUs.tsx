import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './contactUs.module.css';
import addFeedback from './api';

function ContactUs(): JSX.Element {
	const { t } = useTranslation();
	const [nameError, setNameError] = useState(false);
	const [name, setName] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [isSending, setIsSending] = useState(false);

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const nameValue = e.target.value.trim();
		const isValidName = /^[a-zA-Z\u00C0-\u00FF\s'-]+$/.test(nameValue);
		setName(nameValue);
		setNameError(!isValidName);
	};

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const emailValue = e.target.value.trim();
		const isValidEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/.test(emailValue);
		setEmail(emailValue);
		setEmailError(!isValidEmail);
	};

	const checkFullCorrect = (): boolean =>
		name.length > 0 && !nameError && email.length > 0 && !emailError && message.length > 0;

	const handleSubmit = async (): Promise<void> => {
		setIsSending(true);

		const feedback = {
			name,
			email,
			message,
		};

		const res = await addFeedback(feedback);
		if (res.email === email) {
			setIsSending(false);
			setIsSubmittedSuccessfully(true);
		} else {
			setIsSending(false);
			setIsSubmittedSuccessfully(false);
		}
	};

	const handleBackBtn = (): void => {
		// Reset form after successful submission
		setIsSubmittedSuccessfully(false);
		setErrorMessage('');
		setIsSending(false);
		setName('');
		setEmail('');
		setMessage('');
		setErrorMessage('');
	};

	const maxLength = 500;

	return (
		<div className={styles.mainBody}>
			<div id="contactUs" className={styles.mainContainer}>
				<div className={styles.bannerContainer}>
					<div className={styles.bannerContainerText}>
						<p className={styles.contact_title}>{t('contactUsToday')}</p>
						<p className={styles.contact_subtitle1}>{t('contact_subtitle1')}</p>
						<p className={styles.contact_subtitle2}>{t('contact_subtitle2')}</p>
					</div>
				</div>
				<div className={styles.contactUsContainer}>
					<div className={styles.formContainer}>
						<form onSubmit={handleSubmit} className={styles.contactForm}>
							{!isSubmittedSuccessfully && !isSending && !errorMessage ? (
								<>
									<div className={styles.formGroup_left}>
										<div className={styles.formGroup}>
											<label htmlFor="name">{t('nameLabel')} *</label>
											<input
												type="text"
												id="name"
												name="name"
												placeholder={t('namePlaceholder')}
												value={name}
												onChange={(e) => handleNameChange(e)}
												required
												pattern="^[a-zA-Z\u00C0-\u00FF\s'-]+$"
											/>
											{nameError && (
												<p className={styles.lineCheckValidPass}>
													<span className={`${styles.iconCheckPass} ${styles.cross}`} />
													<span className={styles.errorMessage}>{t('nameErrorDescription')}</span>
												</p>
											)}
										</div>
										<div className={styles.formGroup}>
											<label htmlFor="email">{t('emailLabel')} *</label>
											<input
												type="email"
												id="email"
												name="email"
												placeholder={t('emailPlaceholder')}
												value={email}
												onChange={handleEmailChange}
												required
												pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
											/>
											{emailError && (
												<p className={styles.lineCheckValidPass}>
													<span className={`${styles.iconCheckPass} ${styles.cross}`} />
													<span className={styles.errorMessage}>{t('emailErrorDescription')}</span>
												</p>
											)}
										</div>
									</div>
									<div className={styles.formGroup_right}>
										<div className={styles.formGroup}>
											<label htmlFor="message">{t('messageLabel')} *</label>
											<textarea
												id="message"
												name="message"
												placeholder={t('messagePlaceholder')}
												value={message}
												onChange={(e) => setMessage(e.target.value)}
												required
												maxLength={maxLength}
											/>
											<div
												className={styles.characterCount}
											>{`${message.length}/${maxLength} ${t('charactersUsed')}`}</div>
										</div>
									</div>
								</>
							) : (
								<div className={styles.successfulForm}>
									{isSending ? (
										<p className={styles.sendingMessage}>{t('sendingMessage')}</p>
									) : isSubmittedSuccessfully ? (
										<>
											<h1 className={styles.titlePage}>{t('Successful')}</h1>
											<p className={styles.successfulFormText}>
												{t('FeedbackRequestConfirmation')}
											</p>
											<button type="button" className={styles.backButton} onClick={handleBackBtn}>
												{t('back').toUpperCase()}
											</button>
										</>
									) : (
										<>
											<p className={styles.errorMessageBack}>{t('errorMessageBack')}</p>
											<button
												type="button"
												className={styles.backButtonTryAgain}
												onClick={handleBackBtn}
											>
												{t('tryAgain').toUpperCase()}
											</button>
										</>
									)}
								</div>
							)}
						</form>
						<div className={styles.submitButtonContainer}>
							<button
								type={checkFullCorrect() ? 'submit' : 'button'}
								className={`${styles.submitButton} ${checkFullCorrect() ? '' : styles.noActive}`}
								disabled={!checkFullCorrect()}
							>
								<div className={styles.buttonSendText}>
									<span>{t('send').toUpperCase()}</span>
								</div>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
