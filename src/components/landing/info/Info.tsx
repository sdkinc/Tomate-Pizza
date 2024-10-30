import { useTranslation } from 'react-i18next';
import styles from './info.module.css';

function Info(): JSX.Element {
	const { t } = useTranslation();

	return (
		<div className={styles.infoBox}>
			<div className={styles.introducingContainer}>
				<div className={styles.introducing}>
					<p className={styles.introducingParagraph1}>{t('infoHeading')}</p>
					<p className={styles.introducingParagraph2}>{t('infoSubtitle1')}</p>
					<p className={styles.introducingParagraph3}>{t('infoSubtitle2')}</p>
				</div>
			</div>
		</div>
	);
}
export default Info;
