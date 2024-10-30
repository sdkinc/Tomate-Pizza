import 'react';
import styles from './introText.module.css';
import { useTranslation } from 'react-i18next';

function EducationAndCareer(): JSX.Element {
	const { t } = useTranslation();

	return (
		<div className={styles.mainContainer}>
			<div className={styles.lowerContainer}>
				<p className={styles.text}>{t('educationAndCareerParagraph1')}</p>
				<p className={styles.text2}>{t('educationAndCareerParagraph2')}</p>
				<p className={styles.textItalic}>{t('educationAndCareerParagraph3')}</p>
			</div>
		</div>
	);
}
export default EducationAndCareer;
