import 'react';
import styles from './pageRoutes.module.css';
import Cookies from '../components/cookies/Cookies';
import FooterPage from '../components/footers/FooterPage';
import Navbar from '../components/navbars/Navbar';
import ScrollToTopButton from '../ScrollToTopButton';
import Routes from '../features/routes/Routes';

function PageRoutes(): JSX.Element {
	return (
		<>
			<Navbar />
			<div className={styles.routesContainer}>
				<Routes />
			</div>
			<FooterPage />
			<Cookies />
			<ScrollToTopButton />
		</>
	);
}
export default PageRoutes;
