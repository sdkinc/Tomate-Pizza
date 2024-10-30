import 'react';
import styles from './shortNewsBlock.module.css';
import ShortNewsType from '../../../features/blog/types/ShortNewsType';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function ShortNewsBlock(): JSX.Element {
	const { t } = useTranslation();

	const shortNews: ShortNewsType[] = [
		/*{
			id: '01',
			textKey: 'new 1',
			title: 'ShortNews Title 1',
			title2: 'ShortNews Title 1.2',
			subtitle: 'ShortNews Subtitle 1.1',
			imageUrl: '/taxi.webp',
		},*/
		{
			id: '02',
			textKey: 'new 2',
			title: 'ShortNews Title 2',
			title2: 'ShortNews Title 2.2',
			subtitle: 'ShortNews Subtitle 2.1',
			imageUrl: '/buchmesse.webp',
		},
		/*{
			id: '03',
			textKey: 'new 3',
			title: 'ShortNews Title 3',
			title2: 'ShortNews Title 3.2',
			subtitle: 'ShortNews Subtitle 3.1',
			imageUrl: '/Oktoberfest.webp',
		},*/
		{
			id: '04',
			textKey: 'new 4',
			title: 'ShortNews Title 4',
			title2: 'ShortNews Title 4.2',
			subtitle: 'ShortNews Subtitle 4.1',
			imageUrl: '/Halloween.webp',
		},
		{
			id: '05',
			textKey: 'new 5',
			title: 'ShortNews Title 5.1',
			title2: 'ShortNews Title 5.2.1',
			subtitle: 'ShortNews Subtitle 5.1',
			imageUrl: '/jazz.webp',
		},
	];

	return (
		<div className={styles.mainContent}>
			<h3 className={styles.sideTitle}>{t('newsTitle')}</h3>
			<div className={styles.sideContent}>
				<div className={styles.newsBlock}>
					{shortNews.map((newsItem) => (
						<div key={newsItem.id} className={styles.categoryBlock}>
							<div className={styles.mediaContainer}>
								<img
									src={newsItem.imageUrl}
									alt={`${t(newsItem.title)} image`}
									className={styles.newsImage}
								/>
							</div>
							<div className={styles.textContainer}>
								<h4 className={styles.newsTitle}>
									{t(newsItem.title)} {}
									{t(newsItem.title2)}
								</h4>
								<p className={styles.newsSubtitle}>
									{t(newsItem.subtitle)}
									<Link to={`/shortNewsDetail/${newsItem.id}`} className={styles.newsLink}>
										...
									</Link>
								</p>
							</div>
						</div>
					))}
					{shortNews.length === 0 && <p>{t('No news updates available.')}</p>}
				</div>
				<div className={styles.linkBox}>
					<Link to="/blog" className={styles.moreNews}>
						{t('moreNews')}
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ShortNewsBlock;
