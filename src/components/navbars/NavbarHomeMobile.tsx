import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import mobileStyles from './navbarHomeMobile.module.css';
import LanguageSelectorMobile from './LanguageSelectorMobile';

const NavbarHomeMobile = (): JSX.Element => {
	const location = useLocation();
	const { t } = useTranslation();
	const [isDocumentsOpen, setIsDocumentsOpen] = useState(false);
	const [isUsefulInfoOpen, setIsUsefulInfoOpen] = useState(false);

	const toggleDocumentsMenu = (): void => setIsDocumentsOpen(!isDocumentsOpen);
	const toggleUsefulInfoMenu = (): void => setIsUsefulInfoOpen(!isUsefulInfoOpen);

	return (
		<div className={mobileStyles.navbarBox}>
			<div className={mobileStyles.navigationPanelTop}>
				<div className={mobileStyles.logoBox}>
					<Link to="/" className={mobileStyles.logoBoxHome}>
						<img className={mobileStyles.logo} src={`/logoML.png`} alt="MLdoc-icon" />
						<span className={mobileStyles.textLogo}>Integrate Germany</span>
					</Link>
					<LanguageSelectorMobile />
				</div>
			</div>
			<div className={mobileStyles.menuContainer}>
				<div className={mobileStyles.menuLinks}>
					<div>
						<button type="button" className={mobileStyles.menuButton} onClick={toggleDocumentsMenu}>
							{t('documents')}
						</button>
						{isDocumentsOpen && (
							<div className={mobileStyles.dropdownContent}>
								<Link to="/CVEditor" className={mobileStyles.dropdownItemLink}>
									{t('createResume')}
								</Link>
								<Link to="/termination" className={mobileStyles.dropdownItemLink}>
									{t('createTermination')}
								</Link>
								<Link to="/letters" className={mobileStyles.dropdownItemLink}>
									{t('createLetter')}
								</Link>
								<Link to="/cards" className={mobileStyles.dropdownItemLink}>
									{t('createCards')}
								</Link>
							</div>
						)}
					</div>
					<Link
						to="/blog"
						className={
							location.pathname === '/blog' ? mobileStyles.activeLinkMenu : mobileStyles.linkMenu
						}
					>
						{t('blog')}
					</Link>
					<div>
						<button
							type="button"
							className={mobileStyles.menuButton}
							onClick={toggleUsefulInfoMenu}
						>
							{t('usefulInformation')}
						</button>
						{isUsefulInfoOpen && (
							<div className={mobileStyles.dropdownContent}>
								<Link to="/guide" className={mobileStyles.dropdownItemLink}>
									{t('guide')}
								</Link>
								<Link to="/facts" className={mobileStyles.dropdownItemLink}>
									{t('doYouKnowThat')}
								</Link>
								<Link to="/routes" className={mobileStyles.dropdownItemLink}>
									{t('routes')}
								</Link>
								<Link to="/routes" className={mobileStyles.dropdownItemLink}>
									{t('jjjjj')}
								</Link>
							</div>
						)}
					</div>
					<Link
						to="/contactUs"
						className={
							location.pathname === '/contactUs'
								? mobileStyles.activeLinkMenu
								: mobileStyles.linkMenu
						}
					>
						{t('contactUs')}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NavbarHomeMobile;
