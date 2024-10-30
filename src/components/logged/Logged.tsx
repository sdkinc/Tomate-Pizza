import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './logged.module.css';

export default function Logged(): JSX.Element {
	const { t } = useTranslation();

	return (
		<div className={styles.messageContainer}>
			<h1>{t('userAlreadyLoggedIn')}</h1>
			<p>{t('loggedInMessage')}</p>
			<br />
			<Link className={styles.toHomeBtn} id="goToHomeBtn" to="/">
				<span className={styles.toHomeBtnText}>{t('goToHomePage')}</span>
			</Link>
		</div>
	);
}
