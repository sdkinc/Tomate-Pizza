import 'react';
import { Link } from 'react-router-dom';
import { articlesData } from './ArticlesData';
import { Article } from '../article/type/types';
import styles from './articles.module.css';
import { useTranslation } from 'react-i18next';

const EducationAndCareerArticles: React.FC = (): JSX.Element => {
	const { t } = useTranslation();
	const filteredArticles = articlesData.filter((article: Article) =>
		article.category.includes('Education and Career')
	);

	return (
		<div className={styles.mainContainer}>
			<div className={styles.articlesList}>
				{filteredArticles.map((article: Article) => (
					<div key={article.id} className={styles.articleBlock}>
						<div key={article.id} className={styles.articlePreview}>
							<div className={styles.imageBlock}>
								<img
									src={article.imageUrl}
									alt={article.title}
									className={styles.articlePreviewImage}
								/>
							</div>
							<div className={styles.lowerContainer}>
								<h2 className={styles.articlePreviewTitle}>{article.title}</h2>
								<p className={styles.articlePreviewDescription}>{article.shortDescription}</p>
							</div>
							<Link to={`/articles/${article.id}`} className={styles.articlePreviewLink}>
								{t('moreDetails')}
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default EducationAndCareerArticles;
