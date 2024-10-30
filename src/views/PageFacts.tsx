import 'react';
import Facts from '../features/facts/Facts';
import FooterPage from '../components/footers/FooterPage';
import Cookies from '../components/cookies/Cookies';
import Navbar from '../components/navbars/Navbar';
import ScrollToTopButton from '../ScrollToTopButton';

function PageFacts(): JSX.Element {
	return (
		<>
			<Navbar />
			<Facts />
			<FooterPage />
			<Cookies />
			<ScrollToTopButton />
		</>
	);
}
export default PageFacts;
