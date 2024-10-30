import styles from './loading.module.css';

const Loading: React.FC = () => {
	return (
		<div className={styles.overlay}>
			<div className={styles.loader}></div>
		</div>
	);
};

export default Loading;
