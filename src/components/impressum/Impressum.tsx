import styles from './impressum.module.css';
import { useTranslation } from 'react-i18next';

function Impressum(): JSX.Element {
	const { t } = useTranslation();

	return (
		<div className={styles.mainBox}>
			<div className={styles.mainContainer}>
				<h1 className={styles.titlePage}>{t('impressum.title')}</h1>
				<div className={styles.content}>
					<p>
						<strong>{t('impressum.owner')}</strong>
					</p>
					<p>{t('impressum.address.street')}</p>
					<p>{t('impressum.address.city')}</p>
					<p>
						<strong>{t('impressum.email')}:</strong>{' '}
						<a href="mailto:huseynov@tomate-pizza.de">huseynov@tomate-pizza.de</a>
					</p>
					<p>
						<strong>{t('impressum.registerCourt')}</strong>
					</p>
					<p>
						<strong>{t('impressum.registerNumber')}</strong>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Impressum;
