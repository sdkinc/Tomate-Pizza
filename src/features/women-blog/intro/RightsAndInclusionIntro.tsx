import 'react';
import styles from './intro.module.css';
import { useTranslation } from 'react-i18next';
function RightsAndInclusionIntro(): JSX.Element {
	const { t } = useTranslation();

	return (
		<div className={styles.mainContainer}>
			<div className={styles.mainBox}>
				<div className={styles.contextWrapper}>
					<div className={styles.topContainer}>
						<div className={styles.imageContainer}>
							<img
								src="/rightsAndInclusion.webp"
								alt="Right and Inclusion for Women"
								className={styles.imageBox}
							/>
						</div>
						<div className={styles.contextBox}>
							<div className={styles.titleBox}>
								<h1 className={styles.title}>{t('rightsAndInclusionTitle')}</h1>
							</div>
							<div className={styles.textIntroBox}>
								<p className={styles.textIntro}>{t('rightsAndInclusionParagraph')}</p>
								<p className={styles.textTip}>{t('rightsAndInclusionParagraphTip')}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default RightsAndInclusionIntro;
