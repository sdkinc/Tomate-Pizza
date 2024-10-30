import 'react';
import styles from './introText.module.css';
import { useTranslation } from 'react-i18next';

function RightsAndInclusion(): JSX.Element {
	const { t } = useTranslation();

	return (
		<div className={styles.mainContainer}>
			<div className={styles.lowerContainer}>
				<p className={styles.text}>{t('rightsAndInclusionParagraph1')}</p>
				<p className={styles.text2}>{t('rightsAndInclusionParagraph2')}</p>
				<p className={styles.textItalic}>{t('rightsAndInclusionParagraph3')}</p>
			</div>
		</div>
	);
}
export default RightsAndInclusion;
