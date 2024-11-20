import 'react';
import Cookies from '../components/cookies/Cookies';
import ScrollToTopButton from '../ScrollToTopButton';
import CartPage from '../features/cart-items/CartPage';

function PageCart(): JSX.Element {
	return (
		<>
			<CartPage />
			<Cookies />
			<ScrollToTopButton />
		</>
	);
}

export default PageCart;
