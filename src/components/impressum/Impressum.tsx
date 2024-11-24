import { Link } from 'react-router-dom';
import styles from './impressum.module.css';
import { useTranslation } from 'react-i18next';

function Impressum(): JSX.Element {
	const { t } = useTranslation();

	return (
		<div className={styles.mainBox}>
			<div className={styles.mainContainer}>
				<h1 className={styles.titlePage}>{t('impressum.title')}</h1>
				<div className={styles.content}>
					<div className={styles.owner}>
						<p>
							<strong className={styles.contentTextTitle}>{t('impressum.owner')}</strong>
						</p>

						<p>{t('impressum.address.street')}</p>
						<p>{t('impressum.address.city')}</p>
					</div>
					<p>
						<strong className={styles.contentText}>{t('impressum.email')}:</strong>{' '}
						<a href="mailto:huseynov@tomate-pizza.de">huseynov@tomate-pizza.de</a>
					</p>
					<p>
						<strong className={styles.contentText}>{t('impressum.registerCourt')}</strong>
					</p>
					<p>
						<strong className={styles.contentText}>{t('impressum.registerNumber')}</strong>
					</p>
				</div>
				<div className={styles.backToHome}>
					<Link to="/">
						<span className={styles.arrow}>&larr;</span>
						<span>{t('impressum.backToHome')}</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Impressum;
