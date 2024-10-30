import 'react';
import styles from './workAbsenceTipsBanner.module.css';
import { useTranslation } from 'react-i18next';

function WorkAbsenceTipsBanner(): JSX.Element {
	const { t } = useTranslation();

	return (
		<div className={styles.bannerContainer}>
			<div className={styles.imageContainer}>
				<img src="/tips.webp" alt="tipsBanner" />
			</div>
			<div className={styles.textContainer}>
				<h1 className={styles.titleContainer}>{t('workAbsenceNotifications')}</h1>
				<ul className={styles.ulContainer}>
					<li>
						<span className={styles.firstWord}>{t('promptCommunication')}</span>{' '}
						<span className={styles.restOfSentence}>{t('promptCommunicationText')}</span>
					</li>
					<li>
						<span className={styles.firstWord}>{t('medicalCertification')}</span>{' '}
						<span className={styles.restOfSentence}>{t('medicalCertificateWAText')}</span>
					</li>
					<li>
						<span className={styles.firstWord}>{t('communicationMethods')}</span>{' '}
						<span className={styles.restOfSentence}>{t('communicationMethodsText')}</span>
					</li>
					<li>
						<span className={styles.firstWord}>{t('prepareAbsence')}</span>{' '}
						<span className={styles.restOfSentence}>{t('prepareAbsenceText')}</span>
					</li>
				</ul>
			</div>
		</div>
	);
}
export default WorkAbsenceTipsBanner;
