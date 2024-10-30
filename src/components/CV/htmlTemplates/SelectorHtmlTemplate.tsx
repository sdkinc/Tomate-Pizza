import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
	getHtmlResume,
	getHtmlTemplates,
	setCurrenHtmlTemplate,
	setShowSelectorHtmlTemplate,
} from '../../../features/previewPdf/previewPdfSlice';
import { selectHtmlTemplates } from '../../../features/previewPdf/selectors';
import styles from './selectorHtmlTemplate.module.css';
import { exampleResume } from '../../../constants';
import Template from '../../../features/previewPdf/types/Template';
import Loading from '../../loading/Loading';
import { useTranslation } from 'react-i18next';

export default function SelectorHtmlTemplate(): JSX.Element {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const templates = useAppSelector(selectHtmlTemplates);
	const isMobile = window.matchMedia('(max-width: 768px)').matches;

	const getPrettyTitleFromFileName = (fileName: string): string => {
		const baseName = fileName.split('.').slice(0, -1).join('.');
		const result = baseName
			.split('-')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
			.join(' ');
		return result;
	};

	const clickToSelect = (): void => {
		dispatch(setShowSelectorHtmlTemplate(false));
	};

	const clickToPreviewHandler = (template: Template): void => {
		const currResume = exampleResume;
		currResume.resumeTemplateName = template.fileName;
		dispatch(getHtmlResume(currResume));
		dispatch(setCurrenHtmlTemplate(template));
	};

	const handleClickAndCheck = (template: Template): void => {
		if (isMobile) {
			clickToSelect();
			clickToPreviewHandler(template);
		} else {
			clickToPreviewHandler(template);
		}
	};

	useEffect(() => {
		dispatch(getHtmlTemplates());
	}, []);

	return templates.length === 0 ? (
		<Loading />
	) : (
		<div className={styles.mainBlock}>
			<h2 className={styles.titlePage}>{t('selectorTemplates')}</h2>
			<div className={styles.templatesContainer}>
				{templates.map((temp) => (
					<div key={temp.fileName} className={styles.mainBlockTemplate}>
						<button
							type="button"
							className={styles.templateBlock}
							data-content={t('clickToPreview')}
							onClick={() => {
								handleClickAndCheck(temp);
							}}
						>
							<img src={temp.fileName + '.webp'} alt={getPrettyTitleFromFileName(temp.fileName)} />
						</button>
						<button type="button">{getPrettyTitleFromFileName(temp.fileName)}</button>
					</div>
				))}
			</div>
		</div>
	);
}
