import { useTranslation } from 'react-i18next';
import styles from './introBanner.module.css';

function IntroBanner(): JSX.Element {
	const { t } = useTranslation();
	return (
		<div className={styles.pageBox}>
			<div className={styles.container}>
				<div className={styles.bannerContainer}></div>
				<div className={styles.textContainer}>
					<div className={styles.introducing}>
						<p className={styles.introducingParagraph1}>{t('infoHeading')}</p>
						<p className={styles.introducingParagraph3}>{t('infoSubtitle1')}</p>
						<p className={styles.introducingParagraph3}>{t('infoSubtitle2')}</p>
						<p className={styles.introducingParagraph3}>{t('infoSubtitle3')}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default IntroBanner;
