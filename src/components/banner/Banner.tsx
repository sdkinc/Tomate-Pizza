import styles from './banner.module.css';

function Banner(): JSX.Element {
	return (
		<div className={styles.bannerContainer}>
			<video className={styles.bannerVideo} autoPlay loop muted>
				<source src="banner/bannerSuccess.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
}

export default Banner;
