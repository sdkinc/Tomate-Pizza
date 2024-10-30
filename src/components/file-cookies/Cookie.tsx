import 'react';
import { useTranslation } from 'react-i18next';
import styles from './cookie.module.css';
import ScrollToTopButton from '../../ScrollToTopButton';

function Cookie(): JSX.Element {
	const { t } = useTranslation();
	return (
		<div className={styles.mainBox}>
			<div className={styles.mainContainer}>
				<h1 className={styles.titlePage}>{t('cookieFile')}</h1>
				<div className={styles.textContent}>
					<p className={styles.restOfSentence}>{t('cookieIntroduction')}</p>
					<p className={styles.restOfSentence}>{t('cookieIntroduction2')}</p>
					<div className={styles.letterParagraph}></div>
					<div className={styles.textBox}>
						<p className={styles.textLinksItalic}>{t('cookieText1')}</p>
						<p className={styles.textLinks}>{t('cookieText1.1')}</p>
						<p className={styles.textLinks}>{t('cookieText1.2')}</p>
						<p className={styles.textLinks}>{t('cookieText1.3')}</p>
						<p className={styles.textLinks}>{t('cookieText1.4')}</p>
					</div>

					<div className={styles.textBox}>
						<p className={styles.textLinksItalic}>{t('cookieText2')}</p>

						<p className={styles.firstWord}>{t('cookieTextTitle1')}</p>
						<p className={styles.restOfSentence}>{t('cookieRest1.1')}</p>
						<p className={styles.subtitle}>{t('cookieRest1.2')}</p>
						<p className={styles.firstWord}>{t('cookieTextTitle2')}</p>
						<p className={styles.restOfSentence}>{t('cookieRest2.1')}</p>
						<p className={styles.subtitle}>{t('cookieRest2.2')}</p>
						<p className={styles.firstWord}>{t('cookieTextTitle3')}</p>
						<p className={styles.restOfSentence}>{t('cookieRest3.1')}</p>
						<p className={styles.subtitle}>{t('cookieRest3.2')}</p>
						<p className={styles.firstWord}>{t('cookieTextTitle4')}</p>
						<p className={styles.restOfSentence}>{t('cookieRest34.1')}</p>
						<p className={styles.subtitle}>{t('cookieRest4.2')}</p>
						<p className={styles.firstWord}>{t('cookieTextTitle5')}</p>
						<p className={styles.restOfSentence}>{t('cookieRest5.1')}</p>
						<p className={styles.subtitle}>{t('cookieRest5.2')}</p>
						<p className={styles.firstWord}>{t('cookieTextTitle6')}</p>
						<p className={styles.restOfSentence}>{t('cookieRest6.1')}</p>
						<p className={styles.subtitle}>{t('cookieRest6.2')}</p>
						<p className={styles.firstWord}>{t('cookieTextTitle7')}</p>
						<p className={styles.restOfSentence}>{t('cookieRest7.1')}</p>
						<p className={styles.subtitle}>{t('cookieRest7.2')}</p>
						<p className={styles.firstWord}>{t('cookieTextTitle8')}</p>
						<p className={styles.restOfSentence}>{t('cookieRest8.1')}</p>
						<p className={styles.subtitle}>{t('cookieRest8.2')}</p>
					</div>
					<div className={styles.textBox}>
						<p className={styles.restOfSentence}>{t('cookieText9.1')}</p>
						<p className={styles.restOfSentence}>{t('cookieText9.2')}</p>
					</div>
				</div>
			</div>
			<ScrollToTopButton />
		</div>
	);
}
export default Cookie;
