import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import IntroBanner from '../components/landing/introBanner/IntroBanner';
import Cookies from '../components/cookies/Cookies';
import NavbarHomeMain from '../components/navbars/NavbarHomeMain';
import ScrollToTopButton from '../ScrollToTopButton';
import FooterPage from '../components/footers/FooterPage';
import RenderMenu from '../features/pizza-items/RenderMenu';

function PageHome(): JSX.Element {
	const { category } = useParams<{ category?: string }>();
	const [selectedMenu, setSelectedMenu] = useState(category || 'Pizza');

	useEffect(() => {
		if (category) setSelectedMenu(category);
	}, [category]);

	return (
		<>
			<NavbarHomeMain />
			<IntroBanner setSelectedMenu={setSelectedMenu} />
			<RenderMenu selectedMenu={selectedMenu} />
			<Cookies />
			<FooterPage />
			<ScrollToTopButton />
		</>
	);
}

export default PageHome;
