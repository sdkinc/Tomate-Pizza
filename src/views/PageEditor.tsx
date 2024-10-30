import 'react';
import styles from './pageRoutes.module.css';
import Cookies from '../components/cookies/Cookies';
import FooterPage from '../components/footers/FooterPage';
import Navbar from '../components/navbars/Navbar';
import ScrollToTopButton from '../ScrollToTopButton';
import Editor from '../features/editor/Editor';

function PageEditor(): JSX.Element {
	return (
		<>
			<Navbar />
			<div className={styles.routesContainer}>
				<Editor />
			</div>
			<FooterPage />
			<Cookies />
			<ScrollToTopButton />
		</>
	);
}
export default PageEditor;
