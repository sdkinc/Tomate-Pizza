import IntroBanner from '../components/landing/introBanner/IntroBanner';
import Reviews from '../components/landing/reviews/Reviews';
import ShortNewsBlock from '../components/landing/short-news/ShortNewsBlock';
import MainMenu from '../components/landing/main-menu/MainMenu';
import Cookies from '../components/cookies/Cookies';
import NavbarHomeMain from '../components/navbars/NavbarHomeMain';
import ScrollToTopButton from '../ScrollToTopButton';
import Footers from '../components/footers/Footers';

function PageHome(): JSX.Element {
	return (
		<>
			<NavbarHomeMain />
			<IntroBanner />
			<MainMenu />
			<ShortNewsBlock />
			<Reviews />
			<Cookies />
			<Footers />
			<ScrollToTopButton />
		</>
	);
}

export default PageHome;
