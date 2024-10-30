import 'react';
import styles from './intro.module.css';
import { useTranslation } from 'react-i18next';

function ProtectionAndSafetyIntro(): JSX.Element {
	const { t } = useTranslation();

	return (
		<div className={styles.mainContainer}>
			<div className={styles.mainBox}>
				<div className={styles.contextWrapper}>
					<div className={styles.topContainer}>
						<div className={styles.imageContainer}>
							<img
								src="/frauenProtectionBanner.webp"
								alt="Protection and Safety for Women"
								className={styles.imageBox}
							/>
						</div>
						<div className={styles.contextBox}>
							<div className={styles.titleBox}>
								<h1 className={styles.title}>{t('protectionAndSafetyTitle')}</h1>
							</div>
							<div className={styles.textIntroBox}>
								<p className={styles.textIntro}>{t('protectionParagraph')}</p>
								<p className={styles.textTip}>{t('protectionParagraphTip')}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default ProtectionAndSafetyIntro;
