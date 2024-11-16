import { useLocation } from 'react-router-dom';
import styles from './footerPage.module.css';

import { useEffect } from 'react';

function FooterPage(): JSX.Element {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);
	return (
		<div className={styles.footerBox}>
			<div className={styles.bottomInfoBox}>
				<span>© 2024 Tomate Pizza. All Rights Reserved</span>
			</div>
		</div>
	);
}
export default FooterPage;
