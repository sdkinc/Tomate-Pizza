import 'react';
import styles from './introText.module.css';
import { useTranslation } from 'react-i18next';

function GlobalProjects(): JSX.Element {
	const { t } = useTranslation();

	return (
		<div className={styles.mainContainer}>
			<div className={styles.lowerContainer}>
				<p className={styles.text}>{t('globalProjectsParagraph1')}</p>
				<p className={styles.text2}>{t('globalProjectsParagraph2')}</p>
				<p className={styles.textItalic}>{t('globalProjectsParagraph3')}</p>
			</div>
		</div>
	);
}
export default GlobalProjects;
