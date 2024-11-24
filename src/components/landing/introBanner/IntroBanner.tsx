import 'react';
import styles from './introBanner.module.css';

const IntroBanner: React.FC = () => {
	return (
		<div className={styles.pageBox}>
			<div className={styles.bannerContainer}>
				<img src="/shapka2.png" alt="Banner" className={styles.bannerImage} />
			</div>
		</div>
	);
};

export default IntroBanner;
