import 'react';
import Terms from '../components/terms/Terms';
import FooterPage from '../components/footers/FooterPage';
import Cookies from '../components/cookies/Cookies';
import ScrollToTopButton from '../ScrollToTopButton';
import Navbar from '../components/navbars/Navbar';

function PageTerms(): JSX.Element {
	return (
		<>
			<Navbar />
			<Terms />
			<FooterPage />
			<Cookies />
			<ScrollToTopButton />
		</>
	);
}
export default PageTerms;
