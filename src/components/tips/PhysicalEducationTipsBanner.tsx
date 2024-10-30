import 'react';
import { useTranslation } from 'react-i18next';
import styles from './physicalEducationTipsBanner.module.css';

function PhysicalEducationTipsBanner(): JSX.Element {
	const { t } = useTranslation();
	return (
		<div className={styles.bannerContainer}>
			<div className={styles.imageContainer}>
				<img src="/tips.webp" alt="tipsBanner" />
			</div>
			<div className={styles.textContainer}>
				<h1 className={styles.titleContainer}>{t('physicalEducationTipsTitle')}</h1>
				<ul className={styles.ulContainer}>
					<li>
						<span className={styles.firstWord}>{t('specifyTheDate')}</span>{' '}
						<span className={styles.restOfSentence}>{t('specifyTheDateText')}</span>
					</li>
					<li>
						<span className={styles.firstWord}>{t('priorCommunication')}</span>{' '}
						<span className={styles.restOfSentence}>{t('priorCommunicationText')}</span>
					</li>
					<li>
						<span className={styles.firstWord}>{t('formalLanguageAndCourtesy')}</span>{' '}
						<span className={styles.restOfSentence}>{t('formalLanguageAndCourtesyText')}</span>
					</li>
				</ul>
			</div>
		</div>
	);
}
export default PhysicalEducationTipsBanner;
