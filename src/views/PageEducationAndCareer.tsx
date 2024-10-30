import 'react';
import styles from './pageRoutes.module.css';
import Cookies from '../components/cookies/Cookies';
import FooterPage from '../components/footers/FooterPage';
import Navbar from '../components/navbars/Navbar';
import ScrollToTopButton from '../ScrollToTopButton';
import EducationAndCareerIntro from '../features/women-blog/intro/EducationAndCareerIntro';
import EducationAndCareer from '../features/women-blog/intro-text/EducationAndCareer';
import EducationAndCareerArticles from '../features/women-blog/article/EducationAndCareerArticles';
import EducationAndCareerHighlights from '../features/women-blog/highlights/EducationAndCareerHighlights';

function PageEducationAndCareer(): JSX.Element {
	return (
		<>
			<Navbar />
			<div className={styles.routesContainer}>
				<EducationAndCareerIntro />
				<EducationAndCareer />
				<EducationAndCareerHighlights />
				<EducationAndCareerArticles />
			</div>
			<FooterPage />
			<Cookies />
			<ScrollToTopButton />
		</>
	);
}

export default PageEducationAndCareer;
