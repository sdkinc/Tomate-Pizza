import 'react';
import { useTranslation } from 'react-i18next';
import styles from './swimmingLessonsTipsBanner.module.css';

function SwimmingLessonsTipsBanner(): JSX.Element {
	const { t } = useTranslation();

	return (
		<div className={styles.bannerContainer}>
			<div className={styles.imageContainer}>
				<img src="/tips.webp" alt="tipsBanner" />
			</div>
			<div className={styles.textContainer}>
				<h1 className={styles.titleContainer}>{t('swimmingLessonsTips')}</h1>
				<ul>
					<li>
						<span className={styles.firstWord}>{t('useTemplate')}</span>{' '}
						<span className={styles.restOfSentence}>{t('useTemplateText')}</span>
					</li>
					<li>
						<span className={styles.firstWord}>{t('noMedicalCertificateRequired')}</span>{' '}
						<span className={styles.restOfSentence}>{t('noMedicalCertificateRequiredText')}</span>
					</li>
					<li>
						<span className={styles.firstWord}>{t('submitEarly')}</span>{' '}
						<span className={styles.restOfSentence}>{t('submitEarlyText')}</span>
					</li>
					<li>
						<span className={styles.firstWord}>{t('guardianSignature')}</span>{' '}
						<span className={styles.restOfSentence}>{t('guardianSignatureText')}</span>
						<li>
							<span className={styles.firstWord}>{t('teachingStaff')}</span>{' '}
							<span className={styles.restOfSentence}>{t('teachingStaffText')}</span>
						</li>
					</li>
				</ul>
			</div>
		</div>
	);
}
export default SwimmingLessonsTipsBanner;
