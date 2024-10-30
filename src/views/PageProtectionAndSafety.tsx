import 'react';
import styles from './pageRoutes.module.css';
import Cookies from '../components/cookies/Cookies';
import FooterPage from '../components/footers/FooterPage';
import Navbar from '../components/navbars/Navbar';
import ScrollToTopButton from '../ScrollToTopButton';
import ProtectionAndSafetyIntro from '../features/women-blog/intro/ProtectionAndSafetyIntro';
import ProtectionAndSafety from '../features/women-blog/intro-text/ProtectionAndSafety';
import ProtectionAndSafetyArticles from '../features/women-blog/article/ProtectionAndSafetyArticles';
import ProtectionAndSafetyHighlights from '../features/women-blog/highlights/ProtectionAndSafetyHighlights';

function PageProtectionAndSafety(): JSX.Element {
	return (
		<>
			<Navbar />
			<div className={styles.routesContainer}>
				<ProtectionAndSafetyIntro />
				<ProtectionAndSafety />
				<ProtectionAndSafetyHighlights />
				<ProtectionAndSafetyArticles />
			</div>
			<FooterPage />
			<Cookies />
			<ScrollToTopButton />
		</>
	);
}
export default PageProtectionAndSafety;
