import 'react';
import ScrollToTopButton from '../ScrollToTopButton';
import CartPage from '../features/cart-items/CartPage';

function PageCart(): JSX.Element {
	return (
		<>
			<CartPage />
			<ScrollToTopButton />
		</>
	);
}

export default PageCart;
