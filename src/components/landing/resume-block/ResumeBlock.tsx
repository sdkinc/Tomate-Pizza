import { useState, useEffect } from 'react';
import styles from './resumeBlock.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const resumeImages = [
	'/resumeEN.webp',
	'/resumeDE.webp',
	'/resumeES.webp',
	'/resumeRU.webp',
	'/resumeTR.webp',
	'/resumeUK.webp',
];

function ResumeBlock(): JSX.Element {
	const { t } = useTranslation();
	const [activeIndex, setActiveIndex] = useState(0);
	const [isRunning, setIsRunning] = useState(true);
	const imageCount = resumeImages.length;

	useEffect(() => {
		let intervalId: number;
		if (isRunning) {
			intervalId = window.setInterval(() => {
				setActiveIndex((current) => (current + 1) % imageCount);
			}, 3000);
		}
		return () => {
			if (intervalId !== undefined) clearInterval(intervalId);
		};
	}, [imageCount, isRunning]);

	const handleMouseEnter = (): void => {
		setIsRunning(false);
	};

	const handleMouseLeave = (): void => {
		setIsRunning(true);
	};

	return (
		<div className={styles.resumeBlock}>
			<div className={styles.textContainer}>
				<div className={styles.textBlock}>
					<h2 className={styles.title}>{t('resumeTitle')}</h2>
					<p className={styles.resumeParagraph}>{t('resumeParagraph1')}</p>
					<p className={styles.resumeParagraph}>{t('resumeParagraph2')}</p>
					<p className={styles.resumeParagraph}>{t('resumeParagraph3')}</p>
				</div>
				<Link to="/CVEditor" className={styles.resumeCreateButton}>
					{t('createResume').toUpperCase()}
				</Link>
			</div>
			<div className={styles.resumeContainer}>
				{resumeImages.map((image, index) => {
					const angle = (360 / imageCount) * index - (360 / imageCount) * activeIndex;
					const transform = `rotateY(${angle}deg) translateZ(300px)`;
					const isActive = index === activeIndex;

					return (
						<img
							key={index}
							src={image}
							alt={`Resume ${index + 1}`}
							className={`${styles.resumeImage} ${isActive ? styles.active : ''}`}
							style={{ transform, opacity: isActive ? 1 : 0.6 }}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default ResumeBlock;
