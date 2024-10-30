import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavbarLeftDesktop from '../components/navbars/NavbarLeftDesktop';
import Cookies from '../components/cookies/Cookies';
import FooterPage from '../components/footers/FooterPage';
import styles from './pageLetters.module.css';
import ScrollToTopButton from '../ScrollToTopButton';
import Navbar from '../components/navbars/Navbar';

const PageLetters = (): JSX.Element => {
	const [isMenuVisible, setIsMenuVisible] = useState(true);

	const toggleMenuVisibility = (): void => {
		setIsMenuVisible(!isMenuVisible);
	};

	return (
		<>
			<div className={styles.navbarArea}>
				<Navbar />
			</div>

			<div className={styles.mainContentArea}>
				<div className={`${styles.navBarLeftContentArea} ${!isMenuVisible ? styles.hidden : ''}`}>
					<button type="button" className={styles.toggleButton} onClick={toggleMenuVisibility}>
						{isMenuVisible ? '❮' : '❯'}
					</button>
					<NavbarLeftDesktop toggleMenuVisibility={toggleMenuVisibility} />
				</div>
				<div
					className={`${styles.contentArea} ${isMenuVisible ? styles.withMenu : styles.centered}`}
				>
					<Outlet />
				</div>
			</div>
			<div className={styles.footer}>
				<FooterPage />
			</div>
			<Cookies />
			<ScrollToTopButton />
		</>
	);
};

export default PageLetters;
