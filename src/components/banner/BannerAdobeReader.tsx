import styles from './bannerAdobeReader.module.css';
import { useTranslation } from 'react-i18next';

export default function BannerAdobeReader(): JSX.Element {
	const { t } = useTranslation();
	return (
		<div className={styles.banner}>
			<div className={styles.content}>
				<img className={styles.bannerImage} src="/logoAR.png" alt="Adobe Reader Logo" />
				<a
					href="https://get.adobe.com/reader/"
					target="_blank"
					rel="noopener noreferrer"
					className={styles.downloadLinkAdobe}
				></a>
			</div>
			<div className={styles.textContainer}>
				<div className={styles.downloadLinkAdobe}>{t('downloadAdobeReader')}</div>

				<p className={styles.explanatoryNote}>{t('adobeReaderText1')}</p>
				<p className={styles.subtitle}>{t('adobeReaderText2')}</p>
			</div>
			<div>
				<a href="https://get.adobe.com/reader/" target="_blank" rel="noopener noreferrer">
					<button type="button" className={styles.downloadButton}>
						{t('adobeReaderButton')}
					</button>
				</a>
			</div>
		</div>
	);
}
