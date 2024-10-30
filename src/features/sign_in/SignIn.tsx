import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import Privacy from '../../components/privacy/Privacy';
import Terms from '../../components/terms/Terms';
import styles from './signIn.module.css';
import { ChangeEvent, useCallback, useState } from 'react';
import Cookies from '../../components/cookies/Cookies';
import { useAppDispatch } from '../../app/hooks';
import { login } from '../auth/authSlice';

function SignIn(): JSX.Element {
	const { t, i18n } = useTranslation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [modalContentKey, setModalContentKey] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleOpenModal = (contentKey: string): void => {
		setModalContentKey(contentKey);
		setIsModalOpen(true);
	};

	const handleCloseModal = (): void => {
		setIsModalOpen(false);
	};

	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const emailValue = e.target.value;
		setEmail(emailValue);
	};

	const handleInputPasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const passwordValue = e.target.value;
		setPassword(passwordValue);
	};

	const handleClick = useCallback(
		async (event: React.FormEvent) => {
			event.preventDefault();
			const dispatchResult = await dispatch(
				login({
					login: email,
					password,
				})
			);

			if (login.fulfilled.match(dispatchResult)) {
				const userRole = dispatchResult.payload.role;
				if (userRole === 'ADMIN') {
					navigate('/admin');
				} else {
					navigate('/');
				}
			}

			if (login.rejected.match(dispatchResult)) {
				console.error(dispatchResult.error.message);
			}
		},
		[dispatch, email, password, navigate]
	);

	return (
		<div className={styles.signInBox}>
			{isModalOpen && (
				<div className={styles.modalOverlay} onClick={handleCloseModal} role="button">
					<div className={styles.modalContent} onClick={(e) => e.stopPropagation()} role="button">
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

			<div className={styles.mainContainer}>
				<div className={styles.logoBox}>
					<Link to="/" className={styles.logoBoxHome}>
						<img className={styles.logo} src={`/logoML.png`} alt="MLdoc-icon" />
						<span className={styles.textLogo}>MultilingualDocs</span>
					</Link>
				</div>
				<div className={styles.signInBlock}>
					<div className={styles.signInBox}>
						<div className={styles.loginHeaderContainer}>
							<h1 className={styles.title}>{t('signInTitle')}</h1>
							<p className={styles.loginContainer}>
								{t('notMember')}
								<Link to="/signUp" className={styles.linkLogin} id="signUpLink">
									{t('signUp')}
								</Link>
							</p>
						</div>
						<div className={styles.inputContainer}>
							<p className={styles.email}>{t('emailHeading')} *</p>
							<input
								type="email"
								className={`${styles.emailInput} ${styles.emailExample}`}
								placeholder={t('emailExample')}
								value={email}
								onChange={handleEmailChange}
								required
								id="emailInput"
							/>
						</div>

						<div className={styles.passwordContainer}>
							<p className={styles.password}>{t('passwordHeading')} *</p>
							<div className={styles.passwordInputContainer}>
								<input
									type="password"
									className={`${styles.passwordInput} ${styles.passwordExample}`}
									placeholder={t('passwordExample')}
									value={password}
									onChange={handleInputPasswordChange}
									required
									id="passwordInput"
								/>
							</div>
						</div>

						<div className={styles.button}>
							<button
								className={styles.buttonContinue}
								type="button"
								onClick={handleClick}
								id="loginContinueButton"
							>
								<div className={styles.buttonContinueText}>
									<span>{t('loginButtonContinue')}</span>
								</div>
							</button>
						</div>
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
								{t('agreementText2')}
								<button
									type="button"
									onClick={() => handleOpenModal('privacy')}
									className={styles.link}
									id="privacyPolicyLink"
								>
									{t('privacy-policy')}
								</button>
								{i18n.language === 'de' && t('agreementText3')}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Cookies />
		</div>
	);
}

export default SignIn;
