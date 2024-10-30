import 'react';
import styles from './pageGuideDetail.module.css';
import Cookies from '../components/cookies/Cookies';
import FooterPage from '../components/footers/FooterPage';
import Navbar from '../components/navbars/Navbar';
import ScrollToTopButton from '../ScrollToTopButton';
import ArticleDetail from '../features/women-blog/article/ArticleDetail';

function PageArticleDetail(): JSX.Element {
	return (
		<>
			<Navbar />
			<div className={styles.guideContainer}>
				<ArticleDetail />
			</div>
			<FooterPage />
			<Cookies />
			<ScrollToTopButton />
		</>
	);
}
export default PageArticleDetail;
