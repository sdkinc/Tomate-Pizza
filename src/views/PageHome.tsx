import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import IntroBanner from '../components/landing/introBanner/IntroBanner';
import ScrollToTopButton from '../ScrollToTopButton';
import MenuTabs from '../components/landing/main-menu/MenuTabs';
import styles from './pageHome.module.css';
import NavbarHome from '../components/navbars/NavbarHome';
import RenderMenu from '../components/landing/main-menu/RenderMenu';
import CartButton from '../features/cart-items/CartButton';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

function PageHome(): JSX.Element {
	const { category } = useParams<{ category?: string }>();
	const [selectedMenu, setSelectedMenu] = useState('Appetizers');

	// Проверка, есть ли товары в корзине, чтобы показать кнопку корзины
	const cartItems = useSelector((state: RootState) => state.cart.items);

	useEffect(() => {
		if (category) {
			setSelectedMenu(category);
		}
	}, [category]);

	return (
		<>
			<NavbarHome />
			<div className={styles.relativeContainer}>
				<IntroBanner />
				<MenuTabs setSelectedMenu={setSelectedMenu} />
			</div>
			<RenderMenu selectedMenu={selectedMenu} />
			<RenderMenu selectedMenu="All" excludeCategory={selectedMenu} />
			{cartItems.length > 0 && <CartButton />}
			<ScrollToTopButton />
		</>
	);
}

export default PageHome;
