import styles from './navbarHome.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

function NavbarMain(): JSX.Element {
	const { t } = useTranslation();

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
					<div className={styles.menuContainer}>
						<div className={styles.menuLinks}>
							<div className={styles.dropdown}>
								<button type="button" className={styles.dropBtn}>
									{t('documents')}
								</button>
								<div className={styles.dropdownContent}>
									<div className={styles.dropdownGrid}>
										<Link to="/CVEditor" className={styles.dropdownItemLink}>
											<div className={styles.dropdownItem}>
												<img
													src="/cv_icon.webp"
													alt="Resume Icon"
													className={styles.dropdownIcon}
												/>
												<div className={styles.dropdownText}>
													<div className={styles.subtitleMenu}>{t('createResume')}</div>
													<span className={styles.dropdownSubheading}>{t('resumeSubheading')}</span>
												</div>
											</div>
										</Link>
										<Link to="/termination" className={styles.dropdownItemLink}>
											<div className={styles.dropdownItem}>
												<img
													src="/termination_icon.webp"
													alt="Termination Icon"
													className={styles.dropdownIcon}
												/>
												<div className={styles.dropdownText}>
													<div className={styles.subtitleMenu}>{t('createTermination')}</div>
													<span className={styles.dropdownSubheading}>
														{t('terminationSubheading')}
													</span>
												</div>
											</div>
										</Link>
										<Link to="/letters" className={styles.dropdownItemLink}>
											<div className={styles.dropdownItem}>
												<img
													src="/letter_icon.webp"
													alt="Letter Icon"
													className={styles.dropdownIcon}
												/>
												<div className={styles.dropdownText}>
													<div className={styles.subtitleMenu}>{t('createLetter')}</div>
													<span className={styles.dropdownSubheading}>{t('letterSubheading')}</span>
												</div>
											</div>
										</Link>
										<Link to="/cards" className={styles.dropdownItemLink}>
											<div className={styles.dropdownItem}>
												<img
													src="/cards_icon.webp"
													alt="Cards Icon"
													className={styles.dropdownIcon}
												/>
												<div className={styles.dropdownText}>
													<div className={styles.subtitleMenu}>{t('createCards')}</div>
													<span className={styles.dropdownSubheading}>{t('cardsSubheading')}</span>
												</div>
											</div>
										</Link>
									</div>
								</div>
							</div>
							<Link
								to="/blog"
								id="blogLink"
								className={location.pathname === '/blog' ? styles.activeLink : styles.link}
							>
								{t('blog')}
							</Link>
							<div className={styles.dropdown}>
								<button type="button" className={styles.dropBtn}>
									{t('usefulInformation')}
								</button>
								<div className={styles.dropdownContent}>
									<div className={styles.dropdownGrid}>
										<Link to="/guide" className={styles.dropdownItemLink}>
											<div className={styles.dropdownItem}>
												<img
													src="/guide_icon.webp"
													alt="Guide Icon"
													className={styles.dropdownIcon}
												/>
												<div className={styles.dropdownText}>
													<div className={styles.subtitleMenu}>{t('guide')}</div>
													<span className={styles.dropdownSubheading}>{t('guideSubheading')}</span>
												</div>
											</div>
										</Link>
										<Link to="/facts" className={styles.dropdownItemLink}>
											<div className={styles.dropdownItem}>
												<img
													src="/know_icon.webp"
													alt="Facts Icon"
													className={styles.dropdownIcon}
												/>
												<div className={styles.dropdownText}>
													<div className={styles.subtitleMenu}>{t('doYouKnowThat')}</div>
													<span className={styles.dropdownSubheading}>{t('factsSubheading')}</span>
												</div>
											</div>
										</Link>
										<Link to="/routes" className={styles.dropdownItemLink}>
											<div className={styles.dropdownItem}>
												<img
													src="/routes_icon.webp"
													alt="Routes Icon"
													className={styles.dropdownIcon}
												/>
												<div className={styles.dropdownText}>
													<div className={styles.subtitleMenu}>{t('routes')}</div>
													<span className={styles.dropdownSubheading}>{t('routesSubheading')}</span>
												</div>
											</div>
										</Link>
										<Link to="/federal_states" className={styles.dropdownItemLink}>
											<div className={styles.dropdownItem}>
												<img
													src="/states_icon.webp"
													alt="Federal States Icon"
													className={styles.dropdownIcon}
												/>
												<div className={styles.dropdownText}>
													<div className={styles.subtitleMenu}>{t('federalStates')}</div>
													<span className={styles.dropdownSubheading}>
														{t('federalStatesSubheading')}
													</span>
												</div>
											</div>
										</Link>
									</div>
								</div>
							</div>
							<div className={styles.dropdown}>
								<button type="button" className={styles.dropBtn}>
									{t('supportForWomen')}
								</button>
								<div className={styles.dropdownContent}>
									<div className={styles.dropdownGrid}>
										<Link to="/protection-and-safety" className={styles.dropdownItemLink}>
											<div className={styles.dropdownItem}>
												<img
													src="/protectionAndSafety_icon.webp"
													alt="Protection and Safety Icon"
													className={styles.dropdownIcon}
												/>
												<div className={styles.dropdownText}>
													<div className={styles.subtitleMenu}>{t('protectionAndSafety')}</div>
													<span className={styles.dropdownSubheading}>
														{t('protectionAndSafetySubheading')}
													</span>
												</div>
											</div>
										</Link>
										<Link to="/health-and-motherhood" className={styles.dropdownItemLink}>
											<div className={styles.dropdownItem}>
												<img
													src="/healthAndMotherhood_icon.webp"
													alt="Health and Motherhood Icon"
													className={styles.dropdownIcon}
												/>
												<div className={styles.dropdownText}>
													<div className={styles.subtitleMenu}>{t('healthAndMotherhood')}</div>
													<span className={styles.dropdownSubheading}>
														{t('healthAndMotherhoodSubheading')}
													</span>
												</div>
											</div>
										</Link>
										<Link to="/education-and-career" className={styles.dropdownItemLink}>
											<div className={styles.dropdownItem}>
												<img
													src="/educationAndCareer_icon.webp"
													alt="Education and Career Icon"
													className={styles.dropdownIcon}
												/>
												<div className={styles.dropdownText}>
													<div className={styles.subtitleMenu}>{t('educationAndCareer')}</div>
													<span className={styles.dropdownSubheading}>
														{t('educationAndCareerSubheading')}
													</span>
												</div>
											</div>
										</Link>
										<Link to="/kindergartens" className={styles.dropdownItemLink}>
											<div className={styles.dropdownItem}>
												<img
													src="/kindergartens_icon.webp"
													alt="Kindergartens Icon"
													className={styles.dropdownIcon}
												/>
												<div className={styles.dropdownText}>
													<div className={styles.subtitleMenu}>{t('kindergartens')}</div>
													<span className={styles.dropdownSubheading}>
														{t('kindergartensSubheading')}
													</span>
												</div>
											</div>
										</Link>
										<Link to="/rights-and-inclusion" className={styles.dropdownItemLink}>
											<div className={styles.dropdownItem}>
												<img
													src="/rightsAndInclusion_icon.webp"
													alt="Rights and Inclusion Icon"
													className={styles.dropdownIcon}
												/>
												<div className={styles.dropdownText}>
													<div className={styles.subtitleMenu}>{t('rightsAndInclusion')}</div>
													<span className={styles.dropdownSubheading}>
														{t('rightsAndInclusionSubheading')}
													</span>
												</div>
											</div>
										</Link>
										<Link to="/global-projects" className={styles.dropdownItemLink}>
											<div className={styles.dropdownItem}>
												<img
													src="/globalProjects_icon.webp"
													alt="Global Projects Icon"
													className={styles.dropdownIcon}
												/>
												<div className={styles.dropdownText}>
													<div className={styles.subtitleMenu}>{t('globalProjects')}</div>
													<span className={styles.dropdownSubheading}>
														{t('globalProjectsSubheading')}
													</span>
												</div>
											</div>
										</Link>
									</div>
								</div>
							</div>
							<Link
								to="/contactUs"
								id="contactUsLink"
								className={location.pathname === '/contactUs' ? styles.activeLink : styles.link}
							>
								{t('contactUs')}
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
