import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import styles from './languageSelector.module.css';

function LanguageSelector(): JSX.Element {
	const { i18n } = useTranslation();
	const [dropdownList, setDropdownList] = useState(false);

	const handleLanguageChange = async (language: string): Promise<void> => {
		await i18n.changeLanguage(language);
		setDropdownList(false);
		Cookies.set('selectedLanguage', language);
	};

	return (
		<div className={styles.customDropdown}>
			<button
				type="button"
				className={styles.dropdownHeader}
				onClick={() => setDropdownList(!dropdownList)}
			>
				<img
					className={styles.imageBox}
					src={`/globe-home.webp`}
					alt="globe"
					width="20"
					height="20"
				/>
				<span>{i18n.language.toUpperCase()}</span>
			</button>
			<div className={dropdownList ? styles.dropdownListActive : styles.dropdownListNoneActive}>
				<button
					className={styles.languageBox}
					type="button"
					onClick={() => handleLanguageChange('en')}
				>
					EN
				</button>
				<button
					className={styles.languageBox}
					type="button"
					onClick={() => handleLanguageChange('de')}
				>
					DE
				</button>
				<button
					className={styles.languageBox}
					type="button"
					onClick={() => handleLanguageChange('tr')}
				>
					TR
				</button>
				{/* <button type="button" onClick={() => handleLanguageChange('ru')}>
					RU
				</button>
				<button type="button" onClick={() => handleLanguageChange('es')}>
					ES
				</button>
				<button type="button" onClick={() => handleLanguageChange('uk')}>
					UK
				</button> */}
			</div>
		</div>
	);
}

export default LanguageSelector;
