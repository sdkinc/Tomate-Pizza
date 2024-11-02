import styles from './navbarHome.module.css';
// import { useTranslation } from 'react-i18next';
// import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { Link } from 'react-router-dom';

function NavbarMain(): JSX.Element {
	// const { t } = useTranslation();

	return (
		<div className={styles.navbarBox}>
			<div className={styles.navigationPanelTop}>
				<div className={styles.rightSection}>
					<div className={styles.menuContainer}>
						<div className={styles.menu}>
							{/* <Link
								to="/contactUs"
								id="contactUsLink"
								className={location.pathname === '/contactUs' ? styles.activeLink : styles.link}
							>
								{t('contactUs')}
							</Link> */}
							<Link
								to="/cart"
								className={location.pathname === '/contactUs' ? styles.activeLink : styles.link}
							>
								Посмотреть мой список
							</Link>
						</div>
					</div>
					<div className={styles.languageBox}>
						<LanguageSelector />
					</div>
				</div>
			</div>
		</div>
	);
}
export default NavbarMain;
