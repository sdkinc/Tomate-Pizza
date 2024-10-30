import 'react';
import styles from './introText.module.css';
import { useTranslation } from 'react-i18next';

function HealthAndMotherhood(): JSX.Element {
	const { t } = useTranslation();

	return (
		<div className={styles.mainContainer}>
			<div className={styles.lowerContainer}>
				<p className={styles.text}>{t('healthAndMotherhoodParagraph1')}</p>
				<p className={styles.text2}>{t('healthAndMotherhoodParagraph2')}</p>
				<p className={styles.textItalic}>{t('healthAndMotherhoodParagraph3')}</p>
			</div>
		</div>
	);
}
export default HealthAndMotherhood;
