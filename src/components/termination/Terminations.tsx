// eslint-disable-next-line import/default
import React, { useState, useEffect } from 'react';
import styles from './terminations.module.css';
import { useTranslation } from 'react-i18next';
import TerminationBlock from '../landing/termination-block/TerminationBlock';

function Terminations(): JSX.Element {
	const { t } = useTranslation();
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 1280);

	useEffect(() => {
		const handleResize = (): void => setIsMobile(window.innerWidth <= 1280);

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className={styles.letterBox}>
			<h1 className={styles.titlePage}>{t('kuendigungsHeading')}</h1>
			<div className={styles.mainContainer}>
				<p className={styles.letterSubtitle1}>{t('kuendigungsSubtitle1')}</p>
				{!isMobile && <TerminationBlock />}
				<div className={styles.textContent}>
					<p className={styles.letterSubtitle2}>{t('kuendigungsSubtitle2')}</p>

					<div className={styles.letterParagraph}>
						{Array.from({ length: 11 }, (_, i) => (
							<React.Fragment key={i}>
								<p className={styles.text}>
									<span className={styles.firstWord}>
										{t(`kuendigungsTextTitleParagraph${i + 2}`)}
									</span>
									<br />
									<span className={styles.restOfSentence}>{t(`kuendigungsParagraph${i + 2}`)}</span>
								</p>
							</React.Fragment>
						))}
					</div>
				</div>
				<div className={styles.paragraphBox}>
					<p className={styles.title}>{t('kuendigungsTitleParagraph1')}</p>
					<div className={styles.letterParagraph}>
						{Array.from({ length: 8 }, (_, i) => (
							<React.Fragment key={i}>
								<p className={styles.text}>
									<span className={styles.titleParagraph}>
										{t(`kuendigungsText2TitleParagraph${i + 2}`)}{' '}
									</span>

									<span className={styles.paragraphs}>
										{t(`kuendigungsText2Paragraph${i + 2}`)}
									</span>
								</p>
							</React.Fragment>
						))}
					</div>

					<p className={styles.paragraphLast}>{t('kuendigungsTextParagraph10')}</p>
				</div>
			</div>
		</div>
	);
}

export default Terminations;
