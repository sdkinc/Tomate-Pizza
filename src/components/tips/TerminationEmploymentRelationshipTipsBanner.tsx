// eslint-disable-next-line import/default
import React from 'react';
import styles from './terminationEmploymentRelationshipTipsBanner.module.css';
import { useTranslation } from 'react-i18next';

function TerminationEmploymentRelationshipTipsBanner(): JSX.Element {
	const { t } = useTranslation();

	return (
		<div className={styles.bannerContainer}>
			<div className={styles.imageContainer}>
				<img src="/tips.webp" alt="tipsBanner" />
			</div>
			<div className={styles.textContainer}>
				<h1 className={styles.titleContainer}>{t('employmentTipsTitle')}</h1>
				{Array.from({ length: 3 }, (_, i) => (
					<React.Fragment key={i}>
						<p className={styles.firstWord}>{t(`employmentTextTitleParagraph${i + 2}`)}</p>
						<p className={styles.restOfSentence}>{t(`employmentTextParagraph${i + 2}`)}</p>
					</React.Fragment>
				))}
			</div>
		</div>
	);
}
export default TerminationEmploymentRelationshipTipsBanner;
