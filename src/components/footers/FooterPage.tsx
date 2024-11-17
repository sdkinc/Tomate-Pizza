import { Link, useLocation } from 'react-router-dom';
import styles from './footerPage.module.css';

function FooterPage(): JSX.Element | null {
	const location = useLocation();

	// Если путь равен '/admin', возвращаем null, чтобы скрыть футер
	if (location.pathname === '/admin') {
		return null;
	}

	return (
		<footer className={styles.footerBox}>
			<div className={styles.bottomInfoBox}>
				<span>© 2024 Tomate Pizza. All Rights Reserved</span>
				<Link to="/impressum" className={styles.link}>
					Impressum
				</Link>
			</div>
		</footer>
	);
}

export default FooterPage;
