import 'react';
import FAQ from '../components/faq/FAQ';
import FooterPage from '../components/footers/FooterPage';
import Cookies from '../components/cookies/Cookies';
import ScrollToTopButton from '../ScrollToTopButton';
import Navbar from '../components/navbars/Navbar';

function PageFAQ(): JSX.Element {
	return (
		<>
			<Navbar />
			<FAQ />
			<FooterPage />
			<Cookies />
			<ScrollToTopButton />
		</>
	);
}
export default PageFAQ;
