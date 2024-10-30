import 'react';
import { useTranslation } from 'react-i18next';
import styles from './schoolAbsenceNotificationBanner.module.css';

function SchoolAbsenceNotificationBanner(): JSX.Element {
	const { t } = useTranslation();

	return (
		<div className={styles.bannerContainer}>
			<div className={styles.imageContainer}>
				<img src="/tips.webp" alt="tipsBanner" />
			</div>
			<div className={styles.textContainer}>
				<h1 className={styles.titleContainer}>{t('notifications')}</h1>
				<ul className={styles.ulContainer}>
					<li>
						<span className={styles.firstWord}>{t('localLaws')}</span>{' '}
						<span className={styles.restOfSentence}>
							{t('localLawsText')}
							<a
								href="https://www.gesetze-bayern.de/Content/Document/BaySchO2016-20"
								className={styles.linkBox}
								target="_blank"
								rel="noopener noreferrer"
							>
								{t('BaySchOBavaria')}
							</a>
						</span>
					</li>

					<li>
						<span className={styles.firstWord}>{t('parentalNote')}</span>{' '}
						<span className={styles.restOfSentence}>{t('parentalNoteText')}</span>
					</li>
					<li>
						<span className={styles.firstWord}>{t('medicalConfirmation')}</span>{' '}
						<span className={styles.restOfSentence}>{t('medicalConfirmationText')}</span>
					</li>
					<li>
						<span className={styles.firstWord}>{t('informationForNRW')}</span>{' '}
						<span className={styles.restOfSentence}>{t('informationForNRWText')}</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default SchoolAbsenceNotificationBanner;
