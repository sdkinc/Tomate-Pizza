import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
	selectResumeDe,
	selectResumeEn,
	selectResumeOriginal,
} from '../../../features/resumeEditor/selectors';
import styles from './previewBlock.module.css';
import { useTranslation } from 'react-i18next';
import PreviewPdf from '../../../features/previewPdf/PreviewPdf';
import {
	selectCurrentHtmlTemplate,
	selectShowSelectorHtmlTemplate,
} from '../../../features/previewPdf/selectors';
import {
	getHtmlResume,
	getPdfResume,
	setShowSelectorHtmlTemplate,
} from '../../../features/previewPdf/previewPdfSlice';
import { useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import Resume from '../../../features/resumeEditor/types/Resume';

export default function PreviewBlock(): JSX.Element {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const resumeOriginal = useAppSelector(selectResumeOriginal);
	const resumeEn = useAppSelector(selectResumeEn);
	const resumeDe = useAppSelector(selectResumeDe);
	const showSelectorHtmlTemplate = useAppSelector(selectShowSelectorHtmlTemplate);
	const currTemplate = useAppSelector(selectCurrentHtmlTemplate);
	const [currHtmlResume, setCurrHtmlResume] = useState('original');

	const handleClickLanguageBtn = (value: string): void => {
		switch (value) {
			case 'original': {
				dispatch(getHtmlResume(resumeOriginal));
				setCurrHtmlResume('original');
				break;
			}
			case 'en': {
				if (resumeEn.id !== '') {
					dispatch(getHtmlResume(resumeEn));
					setCurrHtmlResume('en');
				}
				break;
			}
			case 'de': {
				if (resumeDe.id !== '') {
					dispatch(getHtmlResume(resumeDe));
					setCurrHtmlResume('de');
				}
				break;
			}
			default:
				break;
		}
	};

	const handleClickSelectBtn = (): void => {
		dispatch(setShowSelectorHtmlTemplate(false));
	};

	const actionDownloadPdf = (resume: Resume): void => {
		dispatch(getPdfResume(resume)).then((action) => {
			if (getPdfResume.fulfilled.match(action)) {
				const link = document.createElement('a');
				link.href = action.payload;
				link.setAttribute('download', 'resume.pdf');
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			} else {
				// eslint-disable-next-line no-console
				console.error('Failed to generate PDF resume', action.error);
			}
		});
	};

	const handleClickDownloadBtn = (value: string): void => {
		switch (value) {
			case 'original':
				actionDownloadPdf(resumeOriginal);
				break;
			case 'en':
				actionDownloadPdf(resumeEn);
				break;
			case 'de':
				actionDownloadPdf(resumeDe);
				break;

			default:
				break;
		}
	};

	return (
		<div className={styles.mainBlock}>
			{showSelectorHtmlTemplate ? (
				currTemplate.fileName === '' ? (
					<div className={styles.btnBlock}>
						<button type="button" className={`${styles.btnOriginal} ${styles.emptyCurrTemplate}`}>
							{t('selectThisTemplate')}
						</button>
					</div>
				) : (
					<div className={styles.btnBlock}>
						<button type="button" className={styles.btnOriginal} onClick={handleClickSelectBtn}>
							{t('selectThisTemplate')}
						</button>
					</div>
				)
			) : (
				<div className={styles.btnBlock}>
					<div className={styles.oneLangBtnBlock}>
						<button
							type="button"
							className={`${styles.btnOriginal} ${resumeOriginal.id !== '' && currHtmlResume === 'original' ? styles.withDownloadBtn : ''}`}
							onClick={() => handleClickLanguageBtn('original')}
						>
							{t('original')}
						</button>
						{resumeOriginal.id !== '' && currHtmlResume === 'original' && (
							<button
								type="button"
								className={styles.btnDownload}
								onClick={() => handleClickDownloadBtn('original')}
							>
								<DownloadIcon className={styles.downloadIcon} />
							</button>
						)}
					</div>
					<div className={styles.oneLangBtnBlock}>
						<button
							type="button"
							className={`${resumeEn.id === '' ? styles.btnEnglish : styles.btnEnglishActive} ${currHtmlResume === 'en' ? styles.withDownloadBtn : ''}`}
							onClick={() => handleClickLanguageBtn('en')}
						>
							{t('english')}
						</button>
						{resumeEn.id !== '' && currHtmlResume === 'en' && (
							<button
								type="button"
								className={styles.btnDownload}
								onClick={() => handleClickDownloadBtn('en')}
							>
								<DownloadIcon className={styles.downloadIcon} />
							</button>
						)}
					</div>
					<div className={styles.oneLangBtnBlock}>
						<button
							type="button"
							className={`${resumeDe.id === '' ? styles.btnDeutsch : styles.btnDeutschActive} ${currHtmlResume === 'de' ? styles.withDownloadBtn : ''}`}
							onClick={() => handleClickLanguageBtn('de')}
						>
							{t('german')}
						</button>
						{resumeDe.id !== '' && currHtmlResume === 'de' && (
							<button
								type="button"
								className={styles.btnDownload}
								onClick={() => handleClickDownloadBtn('de')}
							>
								<DownloadIcon className={styles.downloadIcon} />
							</button>
						)}
					</div>
				</div>
			)}
			<PreviewPdf />
		</div>
	);
}
