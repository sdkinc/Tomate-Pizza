import { useTranslation } from 'react-i18next';
import styles from './terms.module.css';

function Terms(): JSX.Element {
	const { t } = useTranslation();
	return (
		<div className={styles.mainBox}>
			<div className={styles.mainContainer}>
				<h1 className={styles.titlePage}>{t('termsFile')}</h1>
				<div className={styles.textContent}>
					<div className={styles.textBox}>
						<p className={styles.firstWord}>{t('termsTitle1')}</p>
						<p className={styles.textLinks}>{t('termsText1.1')}</p>
					</div>
					<div className={styles.textBox}>
						<p className={styles.firstWord}>{t('termsTitle2')}</p>
						<p className={styles.textLinks}>{t('termsText2.1')}</p>
						<p className={styles.textLinks}>{t('termsText2_1.1')}</p>
						<p className={styles.textLinks}>{t('termsText2_1.2')}</p>
						<p className={styles.textLinks}>{t('termsText2_1.3')}</p>
						<p className={styles.textLinks}>{t('termsText2_1.4')}</p>
					</div>
					<div className={styles.textBox}>
						<p className={styles.firstWord}>{t('termsTitle3')}</p>
						<p className={styles.textLinks}>{t('termsText3.1')}</p>
					</div>
					<div className={styles.textBox}>
						<p className={styles.firstWord}>{t('termsTitle4')}</p>
						<p className={styles.textLinks}>{t('termsText4.1')}</p>
					</div>
					<div className={styles.textBox}>
						<p className={styles.firstWord}>{t('termsTitle5')}</p>
						<p className={styles.textLinks}>{t('termsText5.1')}</p>
					</div>
					<div className={styles.textBox}>
						<p className={styles.restOfSentence}>{t('termsText6.1')}</p>
						<p className={styles.restOfSentence}>{t('termsText6.2')}</p>
						<p className={styles.textLinks}>{t('termsText6.2_1')}</p>
						<p className={styles.textLinks}>{t('termsText6.2_2')}</p>
						<p className={styles.textLinks}>{t('termsText6.2_3')}</p>
						<p className={styles.textLinks}>{t('termsText6.2_4')}</p>
						<p className={styles.textLinks}>{t('termsText6.2_5')}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Terms;
