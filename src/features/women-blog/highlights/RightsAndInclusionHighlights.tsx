import { useState, useEffect } from 'react';
import { HighlightData } from './HighlightsData';
import { Highlights } from './type/HighlightsType';
import { useTranslation } from 'react-i18next';
import styles from './rightsAndInclusionHighlights.module.css';

function RightsAndInclusionHighlights(): JSX.Element {
	const { t } = useTranslation();
	const filteredHighlights = HighlightData.filter((tips: Highlights) =>
		tips.category.includes('Rights and Inclusion')
	);

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredHighlights.length);
		}, 5000);

		return () => clearInterval(intervalId);
	}, [filteredHighlights.length]);

	const currentHighlight = filteredHighlights[currentIndex];

	const getBorderColorClass = (index: number): string => {
		const borderColorClasses = ['border-color-variant-1', 'border-color-variant-2'];
		return borderColorClasses[index % borderColorClasses.length];
	};

	return (
		<div className={styles.mainContainer}>
			<div className={styles.highlightsTitle}>{t('highlights').toUpperCase()}</div>
			<div className={styles.highlightsList}>
				<div className={`${styles.highlightItem} ${styles[getBorderColorClass(currentIndex)]}`}>
					<div className={styles.textContainer}>
						{currentHighlight.textTitle && (
							<div className={styles.highlightTitle}>{currentHighlight.textTitle}</div>
						)}
						{currentHighlight.text && (
							<div className={styles.highlightText}>{currentHighlight.text}</div>
						)}
						{currentHighlight.textItalic && (
							<div className={styles.highlightItalic}>{currentHighlight.textItalic}</div>
						)}
						{currentHighlight.textBold && (
							<div className={styles.highlightBold}>{currentHighlight.textBold}</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
export default RightsAndInclusionHighlights;
