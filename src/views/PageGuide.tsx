import 'react';
import styles from './pageGuide.module.css';
import Cookies from '../components/cookies/Cookies';
import FooterPage from '../components/footers/FooterPage';
import Navbar from '../components/navbars/Navbar';
import Guide from '../features/guide/Guide';
import ScrollToTopButton from '../ScrollToTopButton';

function PageGuide(): JSX.Element {
	return (
		<>
			<Navbar />
			<div className={styles.guideContainer}>
				<Guide />
			</div>
			<FooterPage />
			<Cookies />
			<ScrollToTopButton />
		</>
	);
}
export default PageGuide;
