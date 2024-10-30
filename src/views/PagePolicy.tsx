import 'react';
import Privacy from '../components/privacy/Privacy';
import FooterPage from '../components/footers/FooterPage';
import Cookies from '../components/cookies/Cookies';
import ScrollToTopButton from '../ScrollToTopButton';
import Navbar from '../components/navbars/Navbar';

function PagePolicy(): JSX.Element {
	return (
		<>
			<Navbar />
			<Privacy />
			<FooterPage />
			<Cookies />
			<ScrollToTopButton />
		</>
	);
}
export default PagePolicy;
