import 'react';
import AboutUs from '../components/aboutUs/AboutUs';
import FooterPage from '../components/footers/FooterPage';
import Cookies from '../components/cookies/Cookies';
import FeedbackForm from '../features/feedback/FeedbackForm';
import ScrollToTopButton from '../ScrollToTopButton';
import Navbar from '../components/navbars/Navbar';

function PageAboutUs(): JSX.Element {
	return (
		<>
			<Navbar />
			<AboutUs />
			<FeedbackForm />
			<FooterPage />
			<Cookies />
			<ScrollToTopButton />
		</>
	);
}
export default PageAboutUs;
