import 'react';
import Cookies from '../components/cookies/Cookies';
import ScrollToTopButton from '../ScrollToTopButton';
import NavbarHome from '../components/navbars/NavbarHome';
import CartPage from '../features/cart-items/CartPage';

function PageCart(): JSX.Element {
	return (
		<>
			<NavbarHome />
			<CartPage />
			<Cookies />
			<ScrollToTopButton />
		</>
	);
}

export default PageCart;
