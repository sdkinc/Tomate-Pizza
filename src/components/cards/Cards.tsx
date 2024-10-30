// eslint-disable-next-line import/default
import React, { useState, useEffect } from 'react';
import styles from './cards.module.css';
import { useTranslation } from 'react-i18next';

const cardImages = [
	'/card1.webp',
	'/card2.webp',
	'/card3.webp',
	'/card4.webp',
	'/card5.webp',
	'/card6.webp',
	'/card7.webp',
	'/card8.webp',
	'/card9.webp',
	'/card10.webp',
];

function Cards(): JSX.Element {
	const { t } = useTranslation();
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	useEffect(() => {
		const handleResize = (): void => setIsMobile(window.innerWidth <= 768);

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className={styles.letterBox}>
			<h1 className={styles.titlePage}>{t('cardsHeading')}</h1>
			<div className={styles.mainContainer}>
				<p className={styles.letterSubtitle1}>{t('cardsSubtitle1')}</p>
				{!isMobile && (
					<div className={styles.slideshowContainer}>
						{cardImages.map((src, index) => (
							<div
								key={index}
								className={`${styles.slide} ${index === 0 ? styles.firstSlide : ''} ${styles[`slide${index}`]}`}
							>
								<img src={src} alt={`card ${index + 1}`} className={styles.hiddenImage} />
							</div>
						))}
					</div>
				)}
				<div className={styles.textContent}>
					<p className={styles.letterSubtitle2}>{t('cardsSubtitle2')}</p>
					<div className={styles.letterParagraph}>
						<p className={styles.text}>
							<span className={styles.firstWord}>{t('cardsParagraph1Title')}</span>{' '}
							<span className={styles.restOfSentence}>{t('cardsParagraph1')}</span>
						</p>
					</div>
					<div className={styles.letterParagraph}>
						<p className={styles.text}>
							<span className={styles.firstWord}>{t('cardsParagraph2Title')}</span>{' '}
							<span className={styles.restOfSentence}>{t('cardsParagraph2')}</span>
						</p>
					</div>
					<div className={styles.letterParagraph}>
						<p className={styles.text}>
							<span className={styles.firstWord}>{t('cardsParagraph3Title')}</span>{' '}
							<span className={styles.restOfSentence}>{t('cardsParagraph3')}</span>
						</p>
					</div>
				</div>
				<div className={styles.paragraphBox}>
					<p className={styles.title}>{t('cardsTitleParagraph1')}</p>
					<div className={styles.letterParagraph}>
						{Array.from({ length: 3 }, (_, i) => (
							<React.Fragment key={i}>
								<p className={styles.text}>
									<span className={styles.titleParagraph}>
										{t(`cardTextTitleParagraph${i + 2}`)}
									</span>
									<span className={styles.paragraphs}>{t(`cardTextParagraph${i + 2}`)}</span>
								</p>
							</React.Fragment>
						))}
					</div>
					<p className={styles.title}>{t('cardsTitleParagraph2')}</p>
					<p className={styles.paragraphs}>{t('cardTextParagraph5')}</p>
					<p className={styles.paragraphLast}>{t('cardTextParagraph6')}</p>
				</div>
			</div>
		</div>
	);
}

export default Cards;
