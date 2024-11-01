import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import IntroBanner from '../components/landing/introBanner/IntroBanner';
import Cookies from '../components/cookies/Cookies';
import ScrollToTopButton from '../ScrollToTopButton';
import FooterPage from '../components/footers/FooterPage';
import MenuTabs from '../components/landing/main-menu/MenuTabs';
import styles from './pageHome.module.css';
import NavbarHome from '../components/navbars/NavbarHome';
import RenderMenu from '../components/landing/main-menu/RenderMenu';

function PageHome(): JSX.Element {
	const { category } = useParams<{ category?: string }>();
	const [selectedMenu, setSelectedMenu] = useState('Pizza');

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
			<Cookies />
			<FooterPage />
			<ScrollToTopButton />
		</>
	);
}

export default PageHome;
