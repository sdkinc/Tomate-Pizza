import FooterPage from '../components/footers/FooterPage';
import Cookies from '../components/cookies/Cookies';
import styles from './pageCVEditor.module.css';
import ResumeForm from '../features/resumeEditor/ResumeForm';
import PreviewBlock from '../components/CV/previewBlock/PreviewBlock';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectShowSelectorHtmlTemplate } from '../features/previewPdf/selectors';
import SelectorHtmlTemplate from '../components/CV/htmlTemplates/SelectorHtmlTemplate';
import Loading from '../components/loading/Loading';
import { selectIsResumeLoading } from '../features/resumeEditor/selectors';
import { useTranslation } from 'react-i18next';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { setShowSelectorHtmlTemplate } from '../features/previewPdf/previewPdfSlice';
import Navbar from '../components/navbars/Navbar';
import ScrollToTopButton from '../ScrollToTopButton';

function PageCVEditor(): JSX.Element {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const showSelectorHtmlTemplate = useAppSelector(selectShowSelectorHtmlTemplate);
	const isLoading = useAppSelector(selectIsResumeLoading);
	const isMobile = window.matchMedia('(max-width: 768px)').matches;

	const handleClick = (): void => {
		dispatch(setShowSelectorHtmlTemplate(true));
	};

	return (
		<div className={styles.pageStyle}>
			<Navbar />

			{isLoading ? (
				<Loading />
			) : (
				<div className={styles.editorContainer}>
					{showSelectorHtmlTemplate ? (
						<SelectorHtmlTemplate />
					) : (
						<div className={styles.resumeBlockWithBtn}>
							<button type="button" className={styles.btnBackToTemplates} onClick={handleClick}>
								<KeyboardBackspaceIcon />
								{t('toTemplateSelection')}
							</button>
							<ResumeForm />
						</div>
					)}
					{isMobile ? showSelectorHtmlTemplate ? <></> : <PreviewBlock /> : <PreviewBlock />}
				</div>
			)}

			<FooterPage />
			<Cookies />
			<ScrollToTopButton />
		</div>
	);
}

export default PageCVEditor;
