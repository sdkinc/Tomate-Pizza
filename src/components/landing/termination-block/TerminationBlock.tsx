import 'react';
import styles from './terminationBlock.module.css';

const cardImages = [
	'/termination1.webp',
	'/termination2.webp',
	'/termination3.webp',
	'/termination4.webp',
];

function TerminationBlock(): JSX.Element {
	return (
		<div className={styles.block}>
			<div className={styles.container}>
				{cardImages.map((image, index) => (
					<div key={index} className={`${styles.cardWrapper} ${styles[`cardWrapper${index + 1}`]}`}>
						<div className={styles.cardImageContainer}>
							<div className={`${styles.colorLayer} ${styles[`colorLayer${index + 1}`]}`}></div>
							<img src={image} alt={`Card ${index + 1}`} className={styles.cardImage} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default TerminationBlock;
