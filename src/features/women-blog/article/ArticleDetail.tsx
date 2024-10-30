import 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { articlesData } from './ArticlesData';
import { Article } from './type/types';
import styles from './articleDetail.module.css';
import { useTranslation } from 'react-i18next';

const ProtectionAndSafetyArticleDetail: React.FC = (): JSX.Element => {
	const { t } = useTranslation();
	const { articleId } = useParams<{ articleId: string }>();
	const navigate = useNavigate();
	const article = articlesData.find((a) => a.id === parseInt(articleId!));

	if (!article) {
		return <div>{t('articleNotFound')}</div>;
	}

	const renderContent = (contentBlock: Article['content'][0]): JSX.Element | null => {
		if (contentBlock.type === 'paragraph' && Array.isArray(contentBlock.content)) {
			return (
				<p className={styles.articleContent}>
					{contentBlock.content.map((fragment, index) => {
						switch (fragment.type) {
							case 'text':
								return (
									<span className={styles.text} key={index}>
										{fragment.text}
									</span>
								);
							case 'highlight':
								return (
									<span className={styles.textHighlight} key={index}>
										{fragment.text}
									</span>
								);
							case 'italic':
								return (
									<em className={styles.textItalic} key={index}>
										{fragment.text}
									</em>
								);
							case 'bold':
								return (
									<strong className={styles.textBold} key={index}>
										{fragment.text}
									</strong>
								);
							default:
								return null;
						}
					})}
				</p>
			);
		}

		switch (contentBlock.type) {
			case 'paragraph': {
				return <p className={styles.articleContent}>{contentBlock.text}</p>;
			}
			case 'heading': {
				const Tag = `h${contentBlock.level}` as keyof JSX.IntrinsicElements;
				return <Tag className={styles.articleHeading}>{contentBlock.text}</Tag>;
			}
			case 'list': {
				return (
					<ul className={styles.articleList}>
						{contentBlock.items?.map((item, index) => (
							<li key={index} className={styles.articleListItem}>
								{item.highlightedText && (
									<strong className={styles.highlightedText}>{item.highlightedText}</strong>
								)}
								{item.text.split('{link}')[0]}
								{item.link && (
									<a
										href={item.link.url}
										target="_blank"
										rel="noopener noreferrer"
										className={styles.articleLink}
									>
										{item.link.text}
									</a>
								)}
								{item.text.split('{link}')[1]}
							</li>
						))}
					</ul>
				);
			}
			case 'orderedList': {
				return (
					<ol className={styles.customOrderedList}>
						{contentBlock.items?.map((item, index) => (
							<li key={index} className={styles.customOrderedListItem}>
								{item.highlightedText && (
									<strong className={styles.customHighlightedText}>{item.highlightedText}</strong>
								)}
								<span className={styles.customRegularText}>{item.text.split('{link}')[0]}</span>
								{item.link && (
									<a
										href={item.link.url}
										target="_blank"
										rel="noopener noreferrer"
										className={styles.customArticleLink}
									>
										{item.link.text}
									</a>
								)}
								<span className={styles.customRegularText}>{item.text.split('{link}')[1]}</span>
							</li>
						))}
					</ol>
				);
			}

			case 'image': {
				return (
					<div className={styles.imageBox}>
						<img src={contentBlock.src} alt={contentBlock.alt} />
					</div>
				);
			}
			default: {
				return null;
			}
		}
	};

	return (
		<div className={styles.mainContainer}>
			<div className={styles.articleDetail}>
				<div className={styles.articlePreview}>
					<h1 className={styles.articleDetailTitle}>{article.title}</h1>
					<div className={styles.articleBox}>
						{article.content.map((block, index) => (
							<div key={index}>{renderContent(block)}</div>
						))}
					</div>

					<button type="button" onClick={() => navigate(-1)} className={styles.backButton}>
						{t('back')}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProtectionAndSafetyArticleDetail;
