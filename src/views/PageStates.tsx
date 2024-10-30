import 'react';
import styles from './pageRoutes.module.css';
import Cookies from '../components/cookies/Cookies';
import FooterPage from '../components/footers/FooterPage';
import Navbar from '../components/navbars/Navbar';
import ScrollToTopButton from '../ScrollToTopButton';
import FederalStates from '../features/federal-states/FederalStates';

function PageStates(): JSX.Element {
	return (
		<>
			<Navbar />
			<div className={styles.routesContainer}>
				<FederalStates />
			</div>
			<FooterPage />
			<Cookies />
			<ScrollToTopButton />
		</>
	);
}
export default PageStates;