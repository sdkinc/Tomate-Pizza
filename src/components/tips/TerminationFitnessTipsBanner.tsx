// eslint-disable-next-line import/default
import React from 'react';
import styles from './terminationFitnessTipsBanner.module.css';
import { useTranslation } from 'react-i18next';

function TerminationFitnessTipsBanner(): JSX.Element {
	const { t } = useTranslation();

	return (
		<div className={styles.bannerContainer}>
			<div className={styles.imageContainer}>
				<img src="/tips.webp" alt="tipsBanner" />
			</div>
			<div className={styles.textContainer}>
				<h1 className={styles.titleContainer}>{t('fitnessTipsTitle')}</h1>
				{Array.from({ length: 3 }, (_, i) => (
					<React.Fragment key={i}>
						<p className={styles.firstWord}>{t(`fitnessTextTitleParagraph${i + 2}`)}</p>
						<p className={styles.restOfSentence}>{t(`fitnessTextParagraph${i + 2}`)}</p>
					</React.Fragment>
				))}
			</div>
		</div>
	);
}
export default TerminationFitnessTipsBanner;
