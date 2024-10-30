import { useState, useEffect } from 'react';
import styles from './letters.module.css';
import { useTranslation } from 'react-i18next';
import LetterBlock from '../landing/letter-block/LetterBlock';

function Letters(): JSX.Element {
	const { t } = useTranslation();
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

	useEffect(() => {
		const handleResize = (): void => setIsMobile(window.innerWidth <= 1024);

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className={styles.letterBox}>
			<h1 className={styles.titlePage}>{t('letterHeading')}</h1>
			<div className={styles.mainContainer}>
				<p className={styles.letterSubtitle1}>{t('letterSubtitle1')}</p>
				{!isMobile && <LetterBlock />}
				{/* <video className={styles.videoContent} controls>
                    <source src="instruction.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео-тег.
                </video> */}
				<div className={styles.textContent}>
					<p className={styles.letterSubtitle2}>{t('letterSubtitle2')}</p>
					<div className={styles.letterParagraph}>
						<p className={styles.text}>
							<span className={styles.firstWord}>{t('letterParagraph1Title')}</span>{' '}
							<span className={styles.restOfSentence}>{t('letterParagraph1')}</span>
						</p>
					</div>
					<div className={styles.letterParagraph}>
						<p className={styles.text}>
							<span className={styles.firstWord}>{t('letterParagraph2Title')}</span>{' '}
							<span className={styles.restOfSentence}>{t('letterParagraph2')}</span>
						</p>
					</div>
					<div className={styles.letterParagraph}>
						<p className={styles.text}>
							<span className={styles.firstWord}>{t('letterParagraph3Title')}</span>{' '}
							<span className={styles.restOfSentence}>{t('letterParagraph3')}</span>
						</p>
					</div>
					<div>
						<p className={styles.letterLastParagraph}>{t('letterLastParagraph')}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Letters;
