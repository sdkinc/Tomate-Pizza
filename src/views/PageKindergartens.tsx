import 'react';
import styles from './pageRoutes.module.css';
import Cookies from '../components/cookies/Cookies';
import FooterPage from '../components/footers/FooterPage';
import Navbar from '../components/navbars/Navbar';
import ScrollToTopButton from '../ScrollToTopButton';
import KindergartensIntro from '../features/women-blog/intro/KindergartensIntro';
import Kindergartens from '../features/women-blog/intro-text/Kindergartens';
import KindergartensArticles from '../features/women-blog/article/KindergartensArticles';
import KindergartensHighlights from '../features/women-blog/highlights/KindergartensHighlights';

function PageKindergartens(): JSX.Element {
	return (
		<>
			<Navbar />
			<div className={styles.routesContainer}>
				<KindergartensIntro />
				<Kindergartens />
				<KindergartensHighlights />
				<KindergartensArticles />
			</div>
			<FooterPage />
			<Cookies />
			<ScrollToTopButton />
		</>
	);
}
export default PageKindergartens;
