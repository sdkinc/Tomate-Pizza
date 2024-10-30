import { useEffect, useState } from 'react';
import styles from './letterBlock.module.css';

const letterImages = ['/letter1.webp', '/letter2.webp', '/letter3.webp', '/letter4.webp'];

function LetterBlock(): JSX.Element {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [fadeState, setFadeState] = useState('fade-in');

	useEffect(() => {
		const interval = setInterval(() => {
			setFadeState('fade-out');
			setTimeout(() => {
				setCurrentImageIndex((prevIndex) => (prevIndex + 1) % letterImages.length);
				setFadeState('fade-in');
			}, 2000);
		}, 6000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className={styles.letterBlock}>
			<div className={styles.letterContainer}>
				<div className={styles.letterTrack}>
					{letterImages.map((image, index) => (
						<img
							key={index}
							src={image}
							alt={`Letter ${index + 1}`}
							className={`${styles.letterImage} ${index === currentImageIndex ? styles[fadeState] : ''}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default LetterBlock;
