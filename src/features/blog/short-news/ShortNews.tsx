import styles from './shortNews.module.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ShortNewsType from '../types/ShortNewsType';

function ShortNews(): JSX.Element {
	const { t } = useTranslation();

	const shortNews: ShortNewsType[] = [
		{
			id: '05',
			textKey: 'new 5',
			title: 'ShortNews Title 5',
			title2: 'ShortNews Title 5.2',
			subtitle: 'ShortNews Subtitle 5',
			imageUrl: '/jazz.webp',
		},
		{
			id: '04',
			textKey: 'new 4',
			title: 'ShortNews Title 4',
			title2: 'ShortNews Title 4.2',
			subtitle: 'ShortNews Subtitle 4',
			imageUrl: '/Halloween.webp',
		},
		{
			id: '02',
			textKey: 'new 2',
			title: 'ShortNews Title 2',
			title2: 'ShortNews Title 2.2',
			subtitle: 'ShortNews Subtitle 2',
			imageUrl: '/buchmesse.webp',
		},
		/*	{
			id: '03',
			textKey: 'new 3',
			title: 'ShortNews Title 3',
			title2: 'ShortNews Title 3.2',
			subtitle: 'ShortNews Subtitle 3',
			imageUrl: '/Oktoberfest.webp',
		},*/
		{
			id: '01',
			textKey: 'new 1',
			title: 'ShortNews Title 1',
			title2: 'ShortNews Title 1.2',
			subtitle: 'ShortNews Subtitle 1',
			imageUrl: '/taxi.webp',
		},
	];

	return (
		<div className={styles.sideContent}>
			<h3 className={styles.sideTitle}>{t('shotNewsTitle')}</h3>

			{shortNews.map((newsItem) => (
				<div key={newsItem.id} className={styles.categoryBlock}>
					<div className={styles.mediaContainer}>
						<img
							src={newsItem.imageUrl}
							alt={`${t(newsItem.title)} image`}
							className={styles.newsImage}
						/>
					</div>
					<h4 className={styles.newsTitle}>
						{t(newsItem.title)}
						<br />
						{t(newsItem.title2)}
					</h4>
					<p className={styles.newsList}>{t(newsItem.subtitle)}</p>
					<Link to={`/shortNewsDetail/${newsItem.id}`} className={styles.newsLink}>
						{t('ReadMore')}
					</Link>
				</div>
			))}
			{shortNews.length === 0 && <p>{t('No news updates available.')}</p>}
		</div>
	);
}

export default ShortNews;
