import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './footerPage.module.css';

function FooterPage(): JSX.Element | null {
	const location = useLocation();
	const { t } = useTranslation();

	// Если путь равен '/admin', возвращаем null, чтобы скрыть футер
	if (location.pathname === '/admin') {
		return null;
	}

	return (
		<footer className={styles.footerBox}>
			<div className={styles.workingHoursBox}>
				<span className={styles.workingHours}>{t('footer.workingHours')}</span>{' '}
				<span className={styles.workingHours2}>{t('footer.mondayClosed')}</span>
			</div>
			<div className={styles.bottomInfoBox}>
				<span>© 2024 Tomate Pizza. {t('footer.allRightsReserved')}</span>
				<Link to="/impressum" className={styles.link}>
					{t('footer.impressum')}
				</Link>
			</div>
		</footer>
	);
}

export default FooterPage;
