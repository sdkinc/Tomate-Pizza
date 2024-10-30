import 'react';
import FooterPage from '../components/footers/FooterPage';
import Cookies from '../components/cookies/Cookies';
import ContactUs from '../features/contactUs/ContactUs';
import Navbar from '../components/navbars/Navbar';
import ScrollToTopButton from '../ScrollToTopButton';

function PageContactUs(): JSX.Element {
	return (
		<>
			<Navbar />
			<ContactUs />
			<FooterPage />
			<Cookies />
			<ScrollToTopButton />
		</>
	);
}
export default PageContactUs;
