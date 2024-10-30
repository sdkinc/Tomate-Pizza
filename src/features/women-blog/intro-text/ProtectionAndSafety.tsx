import 'react';
import styles from './protection.module.css';
import { useTranslation } from 'react-i18next';

function ProtectionAndSafety(): JSX.Element {
	const { t } = useTranslation();

	return (
		<div className={styles.mainContainer}>
			<div className={styles.lowerContainer}>
				<p className={styles.text}>{t('protectionParagraph1')}</p>
				<p className={styles.textContact}>
					{t('contact')}:<span className={styles.textItalic}>{t('protectionParagraph2')}</span>
					<span className={styles.textItalicRed}>{t('116 016')}</span>
				</p>
				<p className={styles.textTelethon}>
					{t('telethon')}: <span className={styles.text2}>{t('protectionParagraph3')}</span>
				</p>
			</div>
		</div>
	);
}
export default ProtectionAndSafety;
