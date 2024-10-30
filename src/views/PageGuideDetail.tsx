import 'react';
import GuideDetail from '../features/guide/GuideDetail';
import styles from './pageGuideDetail.module.css';
import Cookies from '../components/cookies/Cookies';
import FooterPage from '../components/footers/FooterPage';
import Navbar from '../components/navbars/Navbar';
import ScrollToTopButton from '../ScrollToTopButton';

function PageGuideDetail(): JSX.Element {
	return (
		<>
			<Navbar />
			<div className={styles.guideContainer}>
				<GuideDetail />
			</div>
			<FooterPage />
			<Cookies />
			<ScrollToTopButton />
		</>
	);
}
export default PageGuideDetail;
