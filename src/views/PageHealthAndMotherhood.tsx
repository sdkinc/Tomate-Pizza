import 'react';
import styles from './pageRoutes.module.css';
import Cookies from '../components/cookies/Cookies';
import FooterPage from '../components/footers/FooterPage';
import Navbar from '../components/navbars/Navbar';
import ScrollToTopButton from '../ScrollToTopButton';
import HealthAndMotherhoodIntro from '../features/women-blog/intro/HealthAndMotherhoodIntro';
import HealthAndMotherhood from '../features/women-blog/intro-text/HealthAndMotherhood';
import HealthAndMotherhoodArticles from '../features/women-blog/article/HealthAndMotherhoodArticles';
import HealthAndMotherhoodHighlights from '../features/women-blog/highlights/HealthAndMotherhoodHighlights';

function PageHealthAndMotherhood(): JSX.Element {
	return (
		<>
			<Navbar />
			<div className={styles.routesContainer}>
				<HealthAndMotherhoodIntro />
				<HealthAndMotherhood />
				<HealthAndMotherhoodHighlights />
				<HealthAndMotherhoodArticles />
			</div>
			<FooterPage />
			<Cookies />
			<ScrollToTopButton />
		</>
	);
}

export default PageHealthAndMotherhood;
