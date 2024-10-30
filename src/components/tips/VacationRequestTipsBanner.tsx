import 'react';
import styles from './vacationRequestTipsBanner.module.css';
import { useTranslation } from 'react-i18next';

function VacationRequestTipsBanner(): JSX.Element {
	const { t } = useTranslation();

	return (
		<div className={styles.bannerContainer}>
			<div className={styles.imageContainer}>
				<img src="/tips.webp" alt="tipsBanner" />
			</div>
			<div className={styles.textContainer}>
				<h1 className={styles.titleContainer}>{t('vacationRequestTipsTitle')}</h1>
				<ul className={styles.ulContainer}>
					<li>
						<span className={styles.firstWord}>{t('earlyCommunication')}</span>{' '}
						<span className={styles.restOfSentence}>{t('earlyCommunicationText')}</span>
					</li>
					<li>
						<span className={styles.firstWord}>{t('showFlexibility')}</span>{' '}
						<span className={styles.restOfSentence}>{t('showFlexibilityText')}</span>
					</li>
					<li>
						<span className={styles.firstWord}>{t('coverYourResponsibilities')}</span>{' '}
						<span className={styles.restOfSentence}>{t('coverYourResponsibilitiesText')}</span>
					</li>
				</ul>
			</div>
		</div>
	);
}
export default VacationRequestTipsBanner;
