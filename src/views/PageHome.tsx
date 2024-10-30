import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import IntroBanner from '../components/landing/introBanner/IntroBanner';
import Cookies from '../components/cookies/Cookies';
import NavbarHomeMain from '../components/navbars/NavbarHomeMain';
import ScrollToTopButton from '../ScrollToTopButton';
import FooterPage from '../components/footers/FooterPage';
import PizzaMenu from '../features/pizza-items/PizzaMenu';

function PageHome(): JSX.Element {
	const { category } = useParams<{ category?: string }>();
	const [selectedMenu, setSelectedMenu] = useState(category || 'Pizza');

	useEffect(() => {
		if (category) setSelectedMenu(category);
	}, [category]);

	const renderMenu = (): JSX.Element => {
		switch (selectedMenu) {
			case 'Pizza':
				return <PizzaMenu />;
			case 'Pasta':
				return <PizzaMenu />;
			case 'Burger':
				return <PizzaMenu />;
			case 'Salad':
				return <PizzaMenu />;
			default:
				return <PizzaMenu />;
		}
	};

	return (
		<>
			<NavbarHomeMain />
			<IntroBanner setSelectedMenu={setSelectedMenu} />
			{renderMenu()}
			<Cookies />
			<FooterPage />
			<ScrollToTopButton />
		</>
	);
}

export default PageHome;
