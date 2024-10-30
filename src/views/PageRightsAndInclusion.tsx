import 'react';
import styles from './pageRoutes.module.css';
import Cookies from '../components/cookies/Cookies';
import FooterPage from '../components/footers/FooterPage';
import Navbar from '../components/navbars/Navbar';
import ScrollToTopButton from '../ScrollToTopButton';
import RightsAndInclusionIntro from '../features/women-blog/intro/RightsAndInclusionIntro';
import RightsAndInclusion from '../features/women-blog/intro-text/RightsAndInclusion';
import RightsAndInclusionArticles from '../features/women-blog/article/RightsAndInclusionArticles';
import RightsAndInclusionHighlights from '../features/women-blog/highlights/RightsAndInclusionHighlights';

function PageRightsAndInclusion(): JSX.Element {
	return (
		<>
			<Navbar />
			<div className={styles.routesContainer}>
				<RightsAndInclusionIntro />
				<RightsAndInclusion />
				<RightsAndInclusionHighlights />
				<RightsAndInclusionArticles />
			</div>
			<FooterPage />
			<Cookies />
			<ScrollToTopButton />
		</>
	);
}
export default PageRightsAndInclusion;
