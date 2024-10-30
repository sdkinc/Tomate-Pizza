import 'react';
import FooterPage from '../components/footers/FooterPage';
import Cookies from '../components/cookies/Cookies';
import Subscribe from '../features/blog/subscribe/Subscribe';
import BlogNews from '../features/blog/blog-news/BlogNews';
import ShortNews from '../features/blog/short-news/ShortNews';
import styles from './pageBlog.module.css';
import Navbar from '../components/navbars/Navbar';
import ScrollToTopButton from '../ScrollToTopButton';

function PageBlog(): JSX.Element {
	return (
		<>
			<Navbar />
			<Subscribe />
			<div className={styles.newsContainer}>
				<div className={styles.blogNewsContainer}>
					<BlogNews />
				</div>
				<div className={styles.shortNewsContainer}>
					<ShortNews />
				</div>
			</div>
			<FooterPage />
			<Cookies />
			<ScrollToTopButton />
		</>
	);
}
export default PageBlog;
