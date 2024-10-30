import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './navbarSubMenuMobile.module.css';

const NavbarSubMenuMobile = (): JSX.Element => {
	const location = useLocation();
	const { t } = useTranslation();
	const [isDocumentsOpen, setIsDocumentsOpen] = useState(false);
	const [isUsefulInfoOpen, setIsUsefulInfoOpen] = useState(false);
	const [isWomenSupportOpen, setIsWomenSupportOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleDocumentsMenu = (): void => {
		setIsUsefulInfoOpen(false);
		setIsWomenSupportOpen(false);
		setIsDocumentsOpen(!isDocumentsOpen);
	};

	const toggleUsefulInfoMenu = (): void => {
		setIsDocumentsOpen(false);
		setIsWomenSupportOpen(false);
		setIsUsefulInfoOpen(!isUsefulInfoOpen);
	};

	const toggleWomenSupportMenu = (): void => {
		setIsDocumentsOpen(false);
		setIsUsefulInfoOpen(false);
		setIsWomenSupportOpen(!isWomenSupportOpen);
	};

	const toggleMainMenu = (): void => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className={styles.navigationPanel}>
			<div className={styles.navigationHeader}>
				<button type="button" className={styles.hamburgerButton} onClick={toggleMainMenu}>
					<span className={styles.hamburgerIcon}>&#9776;</span>
				</button>
			</div>

			{isMenuOpen && (
				<div className={styles.menuContainer}>
					<div className={styles.menuLinks}>
						<div>
							<button type="button" className={styles.menuButton} onClick={toggleDocumentsMenu}>
								{t('documents')}
							</button>
							{isDocumentsOpen && (
								<div className={styles.dropdownContent}>
									<Link to="/CVEditor" className={styles.dropdownItemLink}>
										{t('createResume')}
									</Link>
									<Link to="/termination" className={styles.dropdownItemLink}>
										{t('createTermination')}
									</Link>
									<Link to="/letters" className={styles.dropdownItemLink}>
										{t('createLetter')}
									</Link>
									<Link to="/cards" className={styles.dropdownItemLink}>
										{t('createCards')}
									</Link>
								</div>
							)}
						</div>
						<Link
							to="/blog"
							id="blogLink"
							className={location.pathname === '/blog' ? styles.activeLinkMenu : styles.linkMenu}
						>
							{t('blog')}
						</Link>
						<div>
							<button type="button" className={styles.menuButton} onClick={toggleUsefulInfoMenu}>
								{t('usefulInformation')}
							</button>
							{isUsefulInfoOpen && (
								<div className={styles.dropdownContent}>
									<Link to="/guide" id="guide" className={styles.dropdownItemLink}>
										{t('guide')}
									</Link>
									<Link to="/facts" className={styles.dropdownItemLink}>
										{t('doYouKnowThat')}
									</Link>
									<Link to="/routes" className={styles.dropdownItemLink}>
										{t('routes')}
									</Link>
									<Link to="/federal_states" className={styles.dropdownItemLink}>
										{t('federalStates')}
									</Link>
								</div>
							)}
						</div>
						<div>
							<button type="button" className={styles.menuButton} onClick={toggleWomenSupportMenu}>
								{t('supportForWomen')}
							</button>
							{isWomenSupportOpen && (
								<div className={styles.dropdownContent}>
									<Link
										to="/protection-and-safety"
										id="Protection and Safety"
										className={styles.dropdownItemLink}
									>
										{t('protectionAndSafety')}
									</Link>
									<Link
										to="/health-and-motherhood"
										id="Health and Motherhood"
										className={styles.dropdownItemLink}
									>
										{t('healthAndMotherhood')}
									</Link>
									<Link
										to="/education-and-career"
										id="Education and Career"
										className={styles.dropdownItemLink}
									>
										{t('educationAndCareer')}
									</Link>
									<Link to="/kindergartens" id="Kindergartens" className={styles.dropdownItemLink}>
										{t('kindergartens')}
									</Link>
									<Link
										to="/rights-and-inclusion"
										id="Rights and Inclusion"
										className={styles.dropdownItemLink}
									>
										{t('rightsAndInclusion')}
									</Link>
									<Link
										to="/global-projects"
										id="Global Projects"
										className={styles.dropdownItemLink}
									>
										{t('globalProjects')}
									</Link>
								</div>
							)}
						</div>
						<Link
							to="/contactUs"
							id="contactUsLink"
							className={
								location.pathname === '/contactUs' ? styles.activeLinkMenu : styles.linkMenu
							}
						>
							{t('contactUs')}
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default NavbarSubMenuMobile;
