import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../app/store';
import styles from './navbarTopDesktop.module.css';
import LanguageSelector from './LanguageSelector';
import { logout, resetAuthState } from '../../features/auth/authSlice';

function NavbarTopDesktop(): JSX.Element {
	const { t } = useTranslation();
	const dispatch: AppDispatch = useDispatch();
	const isAuth = useSelector((state: RootState) => state.auth.isAuth);
	const userLogin = useSelector((state: RootState) => state.auth.user.login);

	const handleLogout = (): void => {
		dispatch(logout()).then(() => {
			dispatch(resetAuthState());
		});
	};

	return (
		<div className={styles.navbarBox}>
			<div className={styles.navigationPanelTop}>
				<div className={styles.logoBox}>
					<Link to="/" className={styles.logoBoxHome}>
						<img className={styles.logo} src={`/logoML.png`} alt="MLdoc-icon" />
						<span className={styles.textLogo}>Integrate Germany</span>
					</Link>
				</div>
				<div className={styles.rightSection}>
					<div className={styles.languageBox}>
						<LanguageSelector />
					</div>

					{/* <div className={styles.signBox}>
						{isAuth ? (
							<>
								<span className={styles.greeting}>Hallo, {userLogin}</span>
								<button
									type="button"
									onClick={handleLogout}
									className={styles.signOutButton}
									id="logoutButton"
								>
									{t('signOut')}
								</button>
							</>
						) : (
							<>
								<Link
									to="/signIn"
									className={location.pathname === '/' ? styles.logInHome : styles.logInOther}
									id="loginButton"
								>
									<img className={styles.avatar} src={`/avatar.webp`} alt="MLdoc-icon" />
								</Link>
								<Link
									to="/signUp"
									className={location.pathname === '/' ? styles.signUpHome : styles.signUpOther}
									id="signUpButton"
								>
									{t('signUp')}
								</Link>
							</>
						)}
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default NavbarTopDesktop;
