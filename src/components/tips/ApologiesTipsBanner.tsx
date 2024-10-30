import 'react';
import { useTranslation } from 'react-i18next';
import styles from './apologiesTipsBanner.module.css';

function ApologiesTipsBanner(): JSX.Element {
	const { t } = useTranslation();

	return (
		<div className={styles.bannerContainer}>
			<div className={styles.imageContainer}>
				<img src="/tips.webp" alt="tipsBanner" />
			</div>
			<div className={styles.textContainer}>
				<h1 className={styles.titleContainer}>{t('apologies3TitleTips')}</h1>
				<ul className={styles.ulContainer}>
					<li>
						<span className={styles.firstWord}>{t('apologies3LocalLaws')}</span>{' '}
						<span className={styles.restOfSentence}>{t('apologies3LocalLawsText')}</span>
					</li>

					<li>
						<span className={styles.firstWord}>{t('parentalApology3')}</span>{' '}
						<span className={styles.restOfSentence}>{t('parentalApology3Text')}</span>
					</li>
					<li>
						<span className={styles.firstWord}>{t('apologies3MedicalConfirmation')}</span>{' '}
						<span className={styles.restOfSentence}>{t('apologies3MedicalConfirmationText')}</span>
					</li>
					<li>
						<span className={styles.firstWord}>{t('apologies3GeneralRegulations')}</span>{' '}
						<span className={styles.restOfSentence}>{t('apologies3GeneralRegulationsText')}</span>
					</li>
				</ul>
			</div>
		</div>
	);
}
export default ApologiesTipsBanner;
