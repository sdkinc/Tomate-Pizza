import { Link, useLocation } from 'react-router-dom';
import styles from './footerPage.module.css';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function FooterPage(): JSX.Element {
	const location = useLocation();
	const { t } = useTranslation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);
	return (
		<div className={styles.footerBox}>
			<div className={styles.container}>
				<div className={styles.bannerContainer}>
					<div className={styles.navBox}>
						<div className={styles.navContainer}>
							<div className={styles.navContainer_left}>
								<Link
									to="/blog"
									id="blogLink"
									className={location.pathname === '/blog' ? styles.activeLink : ''}
								>
									{t('blog')}
								</Link>
								<div className={styles.divider} />
								<Link
									to="/aboutUs"
									id="aboutUsLink"
									className={location.pathname === '/aboutUs' ? styles.activeLink : ''}
								>
									{t('aboutUs')}
								</Link>
								<div className={styles.divider} />
								<Link
									to="/contactUs"
									id="contactLink"
									className={location.pathname === '/contactUs' ? styles.activeLink : ''}
								>
									{t('contactUs')}
								</Link>
								<div className={styles.divider} />
							</div>

							<div className={styles.navContainer_right}>
								<Link
									to="/faq"
									id="faqButton"
									className={location.pathname === '/faq' ? styles.activeLink : ''}
								>
									{t('faq')}
								</Link>
								<div className={styles.divider} />
								<Link
									to="/privacy"
									id="privacyLink"
									className={location.pathname === '/privacy' ? styles.activeLink : ''}
								>
									{t('privacyPolicy')}
								</Link>
								<div className={styles.divider} />
								<Link
									to="/terms"
									id="termsLink"
									className={location.pathname === '/terms' ? styles.activeLink : ''}
								>
									{t('termsAndConditions')}
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.footerContent}>
					<div className={styles.bottomInfoBoxButtons}>
						<button type="button" id="facebookButton">
							<img src="/facebook.webp" alt="facebook" />
						</button>
						<button type="button" id="instagramButton">
							<img src="/instagram.webp" alt="instagram" />
						</button>
						<button type="button" id="twitterButton">
							<img src="/twitter.webp" alt="X" />
						</button>
						<a href="https://t.me/Integrate_Germany" target="_blank" rel="noopener noreferrer">
							<img src="/telegram.webp" alt="telegram" />
						</a>
						<button type="button" id="tiktokButton">
							<img src="/tiktok.webp" alt="tik-tok" />
						</button>
					</div>
					<div className={styles.bottomInfoBox}>
						<span>© 2024 MultiLingualDocs. All Rights Reserved</span>
					</div>
				</div>
			</div>
		</div>
	);
}
export default FooterPage;
