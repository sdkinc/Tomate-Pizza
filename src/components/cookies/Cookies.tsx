import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './cookies.module.css';
import PageCookie from '../../views/PageCookie';

function Cookies(): JSX.Element {
	const { t } = useTranslation();
	const [showCookieConsent, setShowCookieConsent] = useState(false);
	const [showOverlay, setShowOverlay] = useState(false);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		const cookieConsent = localStorage.getItem('cookieConsent');
		if (!cookieConsent) {
			setShowOverlay(true);
			setShowCookieConsent(true);
		}
	}, []);

	const acceptCookies = (): void => {
		localStorage.setItem('cookieConsent', 'accepted');
		setShowCookieConsent(false);
		setShowOverlay(false);
	};

	const declineCookies = (): void => {
		setShowCookieConsent(false);
		setShowOverlay(false);
	};

	const openModal = (): void => {
		setShowModal(true);
	};

	const closeModal = (): void => {
		setShowModal(false);
	};

	return (
		<>
			{showOverlay && <div className={styles.overlay} />}
			{showCookieConsent && (
				<div className={styles.cookieConsentContainer}>
					<img src="/cookies2.webp" alt="Cookies" className={styles.cookieImage} />
					<div className={styles.cookiesBox}>
						<p className={styles.weUseCookies}>{t('weUseCookies')}</p>
						<p className={styles.cookieText}>
							{t('cookiesText')}
							<span onClick={openModal} className={styles.privacyPolicy}>
								{t('cookie')}
							</span>
						</p>
					</div>

					<div className={styles.cookieButtons}>
						<button type="button" onClick={acceptCookies}>
							{t('Accept')}
						</button>
						<button type="button" onClick={declineCookies}>
							{t('Decline')}
						</button>
					</div>
				</div>
			)}

			{showModal && (
				<div className={styles.modalOverlay}>
					<div className={styles.modalContent}>
						<button type="button" onClick={closeModal} className={styles.closeButton}>
							&times;
						</button>
						<PageCookie />
					</div>
				</div>
			)}
		</>
	);
}

export default Cookies;
