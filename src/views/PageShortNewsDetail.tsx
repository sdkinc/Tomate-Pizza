import 'react';
import FooterPage from '../components/footers/FooterPage';
import ShortNewsDetail from '../features/blog/short-news/ShortNewsDetail';
import Cookies from '../components/cookies/Cookies';
import ScrollToTopButton from '../ScrollToTopButton';
import Navbar from '../components/navbars/Navbar';

function PageShortNewsDetail(): JSX.Element {
	return (
		<>
			<Navbar />
			<ShortNewsDetail />
			<FooterPage />
			<Cookies />
			<ScrollToTopButton />
		</>
	);
}
export default PageShortNewsDetail;
