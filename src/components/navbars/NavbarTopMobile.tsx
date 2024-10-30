import 'react';
import { Link } from 'react-router-dom';
import mobileStyles from './navbarTopMobile.module.css';
import LanguageSelectorMobile from './LanguageSelectorMobile';

function NavbarTopMobile(): JSX.Element {
	return (
		<div className={mobileStyles.navbarBox}>
			<div className={mobileStyles.navigationPanelTop}>
				<div className={mobileStyles.logoBox}>
					<Link to="/" className={mobileStyles.logoBoxHome}>
						<img className={mobileStyles.logo} src={`/logoML.png`} alt="MLdoc-icon" />
						<span className={mobileStyles.textLogo}>Integrate Germany</span>
					</Link>
					<div className={mobileStyles.languageBox}>
						<LanguageSelectorMobile />
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavbarTopMobile;
