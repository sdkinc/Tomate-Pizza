import { useTranslation } from 'react-i18next';
import { Language, OnAddLanguageType } from '../types/Language';
import styles from './languageBlock.module.css';
import { useAppSelector } from '../../../app/hooks';
import { selectResumeOriginal } from '../../../features/resumeEditor/selectors';
import { ChangeEvent, useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

type LanguageBlockProps = {
	onAddLanguage: OnAddLanguageType;
};

export default function LanguageBlock({ onAddLanguage }: LanguageBlockProps): JSX.Element {
	const { t } = useTranslation();
	const resumeOriginal = useAppSelector(selectResumeOriginal);
	const [languages, setLanguages] = useState<Language[]>(resumeOriginal.languages);

	const handleAddNewLanguage = (): void => {
		const newOrderNumber = languages.length + 1;
		const newLanguage = {
			orderNumber: newOrderNumber,
			name: '',
			proficiency: '',
		};
		setLanguages(() => [...languages, newLanguage]);
	};

	const handleEditLanguage = (event: ChangeEvent<HTMLInputElement>, orderNumber: number): void => {
		const { name: key, value } = event.target;
		setLanguages((prevLanguages) =>
			prevLanguages.map((lang) =>
				lang.orderNumber === orderNumber ? { ...lang, [key]: value } : lang
			)
		);
	};

	useEffect(() => {
		onAddLanguage(languages);
	}, [languages]);

	return (
		<div className={styles.mainBlock}>
			<h3>{t('language')}</h3>
			{languages?.map((lang: Language) => (
				<div key={lang.orderNumber}>
					<div className={styles.inputBlock}>
						<input
							id={`nameLanguageId${lang.orderNumber}`}
							className={styles.myInput}
							type="text"
							name="name"
							value={lang.name}
							onChange={(e) => handleEditLanguage(e, lang.orderNumber)}
							required
							aria-label={t('nameLanguagePlaceholder')}
						/>
						<span className={styles.placeholder}>{t('nameLanguagePlaceholder')}</span>
					</div>
					<div className={styles.inputBlock}>
						<input
							id={`proficiencyLanguageId${lang.orderNumber}`}
							className={styles.myInput}
							type="text"
							name="proficiency"
							value={lang.proficiency}
							onChange={(e) => handleEditLanguage(e, lang.orderNumber)}
							required
							aria-label={t('proficiencyLanguagePlaceholder')}
						/>
						<span className={styles.placeholder}>{t('proficiencyLanguagePlaceholder')}</span>
					</div>
				</div>
			))}
			<button className={styles.addBtn} type="button" onClick={handleAddNewLanguage}>
				<AddIcon />
				{t('addNewLanguage')}
			</button>
		</div>
	);
}
