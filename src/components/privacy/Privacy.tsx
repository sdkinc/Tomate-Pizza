import 'react';
import styles from './privacy.module.css';
import { useTranslation } from 'react-i18next';

function Privacy(): JSX.Element {
	const { t } = useTranslation();
	return (
		<div className={styles.mainBox}>
			<div className={styles.mainContainer}>
				<h1 className={styles.titlePage}>{t('privacyPolicy')}</h1>
				<div className={styles.textContent}>
					<p className={styles.subtitleTitle}>{t('policyIntroduction')}</p>
					<p className={styles.subtitle}>{t('policyIntroductionText')}</p>

					<div className={styles.letterParagraph}></div>
					<div className={styles.textBox}>
						<p className={styles.firstWord}>{t('policyTextTitleParagraph1')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph1')}</p>
						<p className={styles.textLinksItalic}>{t('policyText1_1')}</p>
						<p className={styles.textLinks}>{t('policyText1_1.1')}</p>
						<p className={styles.textLinks2}>{t('policyText1.1')}</p>
						<p className={styles.textLinks2}>{t('policyText1.2')}</p>
						<p className={styles.textLinks2}>{t('policyText1.3')}</p>
						<p className={styles.textLinks2}>{t('policyText1.4')}</p>
						<p className={styles.textLinks2}>{t('policyText1.5')}</p>
						<p className={styles.textLinks2}>{t('policyText1.6')}</p>
						<p className={styles.textLinks}>{t('policyText1_1.2')}</p>
						<p className={styles.textLinks2}>{t('policyText2.1')}</p>
						<p className={styles.textLinks2}>{t('policyText2.2')}</p>
						<p className={styles.textLinks2}>{t('policyText2.3')}</p>
						<p className={styles.textLinks}>{t('policyText1_1.3')}</p>
						<p className={styles.textLinks}>{t('policyText1_1.4')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph2')}</p>
					</div>

					<div className={styles.textBox}>
						<p className={styles.firstWord}>{t('policyTextTitleParagraph2')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph2.1')}</p>
						<p className={styles.textLinksItalic}>{t('policyText3_1')}</p>
						<p className={styles.textLinks}>{t('policyText3.1')}</p>
						<p className={styles.textLinks}>{t('policyText3.2')}</p>
						<p className={styles.textLinks}>{t('policyText3.3')}</p>
						<p className={styles.textLinks}>{t('policyText3.4')}</p>
						<p className={styles.textLinks}>{t('policyText3.5')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph3.1.1')}</p>
					</div>
					<div className={styles.textBox}>
						<p className={styles.firstWord}>{t('policyTextTitleParagraph3')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph3.1')}</p>
						<p className={styles.textLinksItalic}>{t('policyText3_2')}</p>
						<p className={styles.textLinks}>{t('policyText3_1.1')}</p>
						<p className={styles.textLinks}>{t('policyText3_1.2')}</p>
						<p className={styles.textLinks}>{t('policyText3_1.3')}</p>
						<p className={styles.textLinks2}>{t('policyText4.1')}</p>
						<p className={styles.textLinks2}>{t('policyText4.2')}</p>
						<p className={styles.textLinks2}>{t('policyText4.3')}</p>
						<p className={styles.textLinks2}>{t('policyText4.4')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph4.1')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph4.2')}</p>
					</div>
					<div className={styles.textBox}>
						<p className={styles.firstWord}>{t('policyTextTitleParagraph5')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph5.1')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph5.2')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph5.2')}</p>
					</div>
					<div className={styles.textBox}>
						<p className={styles.firstWord}>{t('policyTextTitleParagraph6')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph6.1')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph6.2')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph6.3')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph6.4')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph6.5')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph6.6')}</p>
						<p className={styles.textLinks}>{t('policyText6_1')}</p>
						<p className={styles.textLinks}>{t('policyText6_1.1')}</p>
						<p className={styles.textLinks}>{t('policyText6_1.2')}</p>
						<p className={styles.textLinks}>{t('policyText6_1.3')}</p>
						<p className={styles.textLinks}>{t('policyText6_1.4')}</p>
						<p className={styles.textLinks}>{t('policyText6_1.5')}</p>
						<p className={styles.textLinks}>{t('policyText6_1.6')}</p>
						<p className={styles.textLinks}>{t('policyText6_1.7')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph6.7')}</p>
					</div>
					<div className={styles.textBox}>
						<p className={styles.firstWord}>{t('policyTextTitleParagraph7')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph7.1')}</p>
					</div>
					<div className={styles.textBox}>
						<p className={styles.firstWord}>{t('policyTextTitleParagraph8')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph8.1')}</p>
					</div>
					<div className={styles.textBox}>
						<p className={styles.firstWord}>{t('policyTextTitleParagraph9')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph9.1')}</p>
					</div>
					<div className={styles.textBox}>
						<p className={styles.firstWord}>{t('policyTextTitleParagraph10')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph10.1')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph10.2')}</p>
						<p className={styles.textLinks}>{t('policyParagraph10_1')}</p>
						<p className={styles.textLinks}>{t('policyText10_1.1')}</p>
						<p className={styles.textLinks}>{t('policyText10_1.2')}</p>
						<p className={styles.textLinks}>{t('policyText10_1.3')}</p>
						<p className={styles.textLinks}>{t('policyText10_1.4')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph10.3')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph10.4')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph10.5')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph10.6')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph10.7')}</p>
					</div>
					<div className={styles.textBox}>
						<p className={styles.firstWord}>{t('policyTextTitleParagraph11')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph11.1')}</p>
						<p className={styles.textLinks}>{t('policyText11_1.1')}</p>
						<p className={styles.textLinks}>{t('policyText11_1.2')}</p>
						<p className={styles.textLinks}>{t('policyText11_1.3')}</p>
						<p className={styles.textLinks}>{t('policyText11_1.4')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph11.2')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph11.3')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph11.4')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph11.5')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph11.6')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph11.7')}</p>
					</div>
					<div className={styles.textBox}>
						<p className={styles.firstWord}>{t('policyTextTitleParagraph12')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph12.1')}</p>
						<p className={styles.restOfSentence}>{t('policyParagraph12.2')}</p>
						<p className={styles.paragraphLast}>{t('policyTextParagraph12')}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Privacy;
