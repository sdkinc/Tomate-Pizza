import 'react';
import styles from './introText.module.css';
import { useTranslation } from 'react-i18next';

function Kindergartens(): JSX.Element {
	const { t } = useTranslation();

	return (
		<div className={styles.mainContainer}>
			<div className={styles.lowerContainer}>
				<p className={styles.text}>{t('kindergartensParagraph1')}</p>
				<p className={styles.text2}>{t('kindergartensParagraph2')}</p>
				<p className={styles.textItalic}>{t('kindergartensParagraph3')}</p>
			</div>
		</div>
	);
}
export default Kindergartens;
