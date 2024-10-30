import 'react';
import FooterPage from '../components/footers/FooterPage';
import NewsDetail from '../features/blog/blog-news/NewsDetail';
import Cookies from '../components/cookies/Cookies';
import Navbar from '../components/navbars/Navbar';
import ScrollToTopButton from '../ScrollToTopButton';

function PageNewsDetail(): JSX.Element {
	return (
		<>
			<Navbar />
			<NewsDetail />
			<FooterPage />
			<Cookies />
			<ScrollToTopButton />
		</>
	);
}
export default PageNewsDetail;
