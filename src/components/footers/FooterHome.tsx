import { Link, useLocation } from 'react-router-dom';
import styles from './footerHome.module.css';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function FooterHome(): JSX.Element {
	const location = useLocation();
	const { t } = useTranslation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<div className={styles.footerBox}>
			<div className={styles.bannerContainer}>
				<div className={styles.navContainer}>
					<div className={styles.navContainer_left}>
						<p className={styles.nav_title}>{t('ourCompany')}</p>
						<Link
							to="/blog"
							id="blogLink"
							className={location.pathname === '/blog' ? styles.activeLink : ''}
						>
							{t('blog')}
						</Link>

						<Link
							to="/aboutUs"
							id="aboutUsLink"
							className={location.pathname === '/aboutUs' ? styles.activeLink : ''}
						>
							{t('aboutUs')}
						</Link>
						<Link
							to="/contactUs"
							id="contactLink"
							className={location.pathname === '/contactUs' ? styles.activeLink : ''}
						>
							{t('contactUs')}
						</Link>
					</div>
					<div className={styles.navContainer_right}>
						<p className={styles.nav_title}>{t('support')}</p>
						<Link
							to="/faq"
							id="faqButton"
							className={location.pathname === '/faq' ? styles.activeLink : ''}
						>
							{t('faq')}
						</Link>

						<Link
							to="/privacy"
							id="privacyLink"
							className={location.pathname === '/privacy' ? styles.activeLink : ''}
						>
							{t('privacyPolicy')}
						</Link>
						<Link
							to="/terms"
							id="termsLink"
							className={location.pathname === '/terms' ? styles.activeLink : ''}
						>
							{t('termsAndConditions')}
						</Link>
					</div>
				</div>
				<div className={styles.bottomInfoBoxButtons}>
					<button type="button" id="facebookButton">
						<img src="/facebook.webp" alt="facebook" />
					</button>
					<p className={styles.social}>Facebook</p>
					<button type="button" id="instagramButton">
						<img src="/instagram.webp" alt="instagram" />
					</button>
					<p className={styles.social}>Instagram</p>
					<button type="button" id="twitterButton">
						<img src="/twitter.webp" alt="X" />
					</button>
					<p className={styles.social}>Twitter</p>

					<div className={styles.buttonSocial}>
						<a href="https://t.me/Integrate_Germany" target="_blank" rel="noopener noreferrer">
							<img src="/telegram.webp" alt="telegram" />
							<p className={styles.social}>Telegram</p>
						</a>
					</div>

					<button type="button" id="tiktokButton">
						<img src="/tiktok.webp" alt="tik-tok" />
					</button>
					<p className={styles.social}>TikTok</p>
				</div>
				<div className={styles.bottomInfoBox}>
					<span>© 2024 MultiLingualDocs. All Rights Reserved</span>
				</div>
			</div>
		</div>
	);
}

export default FooterHome;
