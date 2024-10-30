import 'react';
import styles from './pageRoutes.module.css';
import Cookies from '../components/cookies/Cookies';
import FooterPage from '../components/footers/FooterPage';
import Navbar from '../components/navbars/Navbar';
import ScrollToTopButton from '../ScrollToTopButton';
import GlobalProjectsIntro from '../features/women-blog/intro/GlobalProjectsIntro';
import GlobalProjects from '../features/women-blog/intro-text/GlobalProjects';
import GlobalProjectsArticles from '../features/women-blog/article/GlobalProjectsArticles';
import GlobalProjectsHighlights from '../features/women-blog/highlights/GlobalProjectsHighlights';

function PageGlobalProjects(): JSX.Element {
	return (
		<>
			<Navbar />
			<div className={styles.routesContainer}>
				<GlobalProjectsIntro />
				<GlobalProjects />
				<GlobalProjectsHighlights />
				<GlobalProjectsArticles />
			</div>
			<FooterPage />
			<Cookies />
			<ScrollToTopButton />
		</>
	);
}

export default PageGlobalProjects;
