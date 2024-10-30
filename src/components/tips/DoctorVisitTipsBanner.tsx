import { useTranslation } from 'react-i18next';
import styles from './doctorVisitTipsBanner.module.css';

function DoctorVisitTipsBanner(): JSX.Element {
	const { t } = useTranslation();

	return (
		<div className={styles.bannerContainer}>
			<div className={styles.imageContainer}>
				<img src="/tips.webp" alt="tipsBanner" />
			</div>
			<div className={styles.textContainer}>
				<h1 className={styles.titleContainer}>{t('doctorVisitNotifications')}</h1>
				<ul className={styles.ulContainer}>
					<li>
						<span className={styles.firstWord}>{t('personalCommunication')}</span>{' '}
						<span className={styles.restOfSentence}>{t('personalCommunicationText')}</span>
					</li>

					<li>
						<span className={styles.firstWord}>{t('medicalCertificate')}</span>{' '}
						<span className={styles.restOfSentence}>{t('medicalCertificateText')}</span>
					</li>
					<li>
						<span className={styles.firstWord}>{t('advanceNotification')}</span>{' '}
						<span className={styles.restOfSentence}>{t('advanceNotificationText')}</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default DoctorVisitTipsBanner;
