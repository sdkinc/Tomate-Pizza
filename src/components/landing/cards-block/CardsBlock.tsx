import { useEffect, useState } from 'react';
import styles from './cardsBlock.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

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

function CardsBlock(): JSX.Element {
	const { t } = useTranslation();
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const intervalId = window.setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % cardImages.length);
		}, 4000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className={styles.cardsBlock}>
			<div className={styles.cardsContainer}>
				{cardImages.map((image, index) => (
					<img
						key={index}
						src={image}
						alt={`Card ${index + 1}`}
						className={`${styles.cardImage} ${index === activeIndex ? styles.active : ''}`}
					/>
				))}
			</div>
			<div className={styles.textContainer}>
				<div className={styles.textBlock}>
					<h2 className={styles.title}>{t('cardsTitle')}</h2>
					<p className={styles.cardsParagraph}>{t('cardParagraph1')}</p>
					<p className={styles.cardsParagraph}>{t('cardParagraph2')}</p>
					<p className={styles.cardsParagraph}>{t('cardParagraph3')}</p>
				</div>
				<Link to="/Cards" className={styles.cardsCreateButton}>
					{t('createCards').toUpperCase()}
				</Link>
			</div>
		</div>
	);
}

export default CardsBlock;
