import 'react';
import styles from './editor.module.css';
import { t } from 'i18next';

function Editor(): JSX.Element {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.titleContainer}>{t('Editor')}</div>
		</div>
	);
}
export default Editor;
