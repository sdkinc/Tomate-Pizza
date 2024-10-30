// eslint-disable-next-line import/default
import React from 'react';
import styles from './terminationInsuranceTipsBanner.module.css';
import { useTranslation } from 'react-i18next';

function TerminationInsuranceTipsBanner(): JSX.Element {
	const { t } = useTranslation();

	return (
		<div className={styles.bannerContainer}>
			<div className={styles.imageContainer}>
				<img src="/tips.webp" alt="tipsBanner" />
			</div>
			<div className={styles.textContainer}>
				<h1 className={styles.titleContainer}>{t('insuranceTipsTitle')}</h1>
				{Array.from({ length: 5 }, (_, i) => (
					<React.Fragment key={i}>
						<p className={styles.firstWord}>{t(`insuranceTextTitleParagraph${i + 2}`)}</p>
						<p className={styles.restOfSentence}>{t(`insuranceTextParagraph${i + 2}`)}</p>
					</React.Fragment>
				))}
			</div>
		</div>
	);
}
export default TerminationInsuranceTipsBanner;
