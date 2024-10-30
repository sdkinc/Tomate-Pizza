import { useState } from 'react';
import styles from './blogNews.module.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import News from '../types/NewsType';

function BlogNews(): JSX.Element {
	const newsItems: News[] = [
		{
			id: '13',
			contentType: 'news',
			category: 'Rules and Tips',
			textKey: 'News Item 13',
			title: 'Title 13',
			subtitle: 'Subtitle 13',
			text: ['text13_p1'],
			summary: ['summary13_p1', 'summary13_p2', 'summary13_p3'],
			imageUrl: '/flohmarkt.webp',
		},
		{
			id: '12',
			contentType: 'news',
			category: 'Work',
			textKey: 'News Item 12',
			title: 'Title 12',
			subtitle: 'Subtitle 12',
			text: ['text12_p1'],
			summary: ['summary12_p1', 'summary12_p2', 'summary12_p3'],
			imageUrl: '/EducationChoice.webp',
		},
		{
			id: '11',
			contentType: 'news',
			category: 'Social Services',
			textKey: 'News Item 11',
			title: 'Title 11',
			subtitle: 'Subtitle 11',
			text: ['text11_p1'],
			summary: ['summary11_p1', 'summary11_p2', 'summary11_p3'],
			imageUrl: '/jobcenter.webp',
		},
		{
			id: '1',
			contentType: 'news',
			category: 'Work',
			textKey: 'News Item 1',
			title: 'Title 1',
			subtitle: 'Subtitle 1',
			text: ['text1_p1'],
			summary: ['summary1_p1', 'summary1_p2', 'summary1_p3'],
			imageUrl: '/resume.webp',
		},
		{
			id: '3',
			contentType: 'news',
			category: 'Education',
			textKey: 'News Item 3',
			title: 'Title 3',
			subtitle: 'Subtitle 3',
			text: ['text3_p1'],
			summary: ['summary3_p1', 'summary3_p2', 'summary3_p3'],
			imageUrl: '/apologyLetter.webp',
		},
		{
			id: '4',
			contentType: 'news',
			category: 'Work',
			textKey: 'News Item 4',
			title: 'Title 4',
			subtitle: 'Subtitle 4',
			text: ['text4_p1'],
			summary: ['summary4_p1', 'summary4_p2', 'summary4_p3'],
			imageUrl: '/CVMasterClass.webp',
		},
		{
			id: '5',
			contentType: 'news',
			category: 'Education',
			textKey: 'News Item 5',
			title: 'Title 5',
			subtitle: 'Subtitle 5',
			text: ['text5_p1'],
			summary: ['summary5_p1', 'summary5_p2', 'summary5_p3'],
			imageUrl: '/education.webp',
		},
		{
			id: '6',
			contentType: 'news',
			category: 'Education',
			textKey: 'News Item 6',
			title: 'Title 6',
			subtitle: 'Subtitle 6',
			text: ['text6_p1'],
			summary: ['summary6_p1', 'summary6_p2', 'summary6_p3'],
			imageUrl: '/shoolRules.webp',
		},
		{
			id: '7',
			contentType: 'news',
			category: 'Rules and Tips',
			textKey: 'News Item 7',
			title: 'Title 7',
			subtitle: 'Subtitle 7',
			text: ['text7_p1'],
			summary: ['summary7_p1', 'summary7_p2', 'summary7_p3'],
			imageUrl: '/Hausordnung.webp',
		},
		{
			id: '8',
			contentType: 'news',
			category: 'Rules and Tips',
			textKey: 'News Item 8',
			title: 'Title 8',
			subtitle: 'Subtitle 8',
			text: ['text8_p1'],
			summary: ['summary8_p1', 'summary8_p2', 'summary8_p3'],
			imageUrl: '/houseRule.webp',
		},
		{
			id: '9',
			contentType: 'news',
			category: 'Social Services',
			textKey: 'News Item 9',
			title: 'Title 9',
			subtitle: 'Subtitle 9',
			text: ['text9_p1'],
			summary: ['summary9_p1', 'summary9_p2', 'summary9_p3'],
			imageUrl: '/familyCenters.webp',
		},
		{
			id: '10',
			contentType: 'news',
			category: 'Healthcare',
			textKey: 'News Item 10',
			title: 'Title 10',
			subtitle: 'Subtitle 10',
			text: ['text10_p1'],
			summary: ['summary10_p1', 'summary10_p2', 'summary10_p3'],
			imageUrl: '/Emergency.webp',
		},
	];

	const { t } = useTranslation();
	const navigate = useNavigate();
	const [activeVideo, setActiveVideo] = useState<string>('');
	const [searchCategory, setSearchCategory] = useState<string>('All Categories');

	const filteredNewsItems =
		searchCategory === 'All Categories'
			? newsItems
			: newsItems.filter((item) => item.category === searchCategory);

	const stopOtherVideos = (): void => {
		const videos = document.querySelectorAll('video');
		videos.forEach((video) => {
			if (video.src && !video.src.endsWith(activeVideo)) {
				video.pause();
			}
		});
	};
	const handlePlay = (videoUrl: string | undefined): void => {
		if (videoUrl) {
			setActiveVideo(videoUrl);
			stopOtherVideos();
		}
	};
	const getBorderColorClass = (index: number): string => {
		const borderColorClasses = [
			'border-color-1',
			'border-color-2',
			'border-color-3',
			'border-color-4',
		];
		return borderColorClasses[index % borderColorClasses.length];
	};

	return (
		<div className={styles.newsBlog}>
			<div className={styles.searchBox}>
				<div className={styles.searchBar}>
					<label className={styles.searchTitle} htmlFor="categorySelect">
						{t('selectCategory')}:
					</label>
					<select
						id="categorySelect"
						value={searchCategory}
						onChange={(e) => setSearchCategory(e.target.value)}
						className={styles.categorySelect}
					>
						<option value="All Categories">{t('allCategories')}</option>
						<option value="Work">{t('work')}</option>
						<option value="Education">{t('education')}</option>
						<option value="Rules and Tips">{t('rulesAndTips')}</option>
						<option value="Healthcare">{t('healthcare')}</option>
						<option value="Social Services">{t('socialServices')}</option>
					</select>
					{/* <a href="/editor" className={styles.editorButton}>
						{t('openEditor')}
					</a> */}
				</div>
			</div>

			<div className={styles.mainContent}>
				{filteredNewsItems.map((item, index) => (
					<div key={item.textKey} className={styles.blog}>
						<div className={styles.blogContainer}>
							<div className={`${styles.secondaryBlock} ${styles[getBorderColorClass(index)]}`}>
								<div className={styles.mediaBlock}>
									{item.contentType === 'news' ? (
										<div className={styles.mediaContainer}>
											<img
												src={item.imageUrl}
												alt={`${t(item.title)} image`}
												className={styles.newsImage}
											/>
										</div>
									) : item.contentType === 'video' ? (
										<div className={styles.mediaContainer}>
											<video
												src={item.videoUrl}
												className={styles.newsVideo}
												controls
												onPlay={() => handlePlay(item.videoUrl)}
											>
												<track kind="captions" />
												Your browser does not support the video tag.
											</video>
										</div>
									) : null}
									<div className={styles.rightBlock}>
										{/* 	<div className={styles.blogDatum}>
												<p className={`${styles.datum} ${styles[getBorderColorClass(index)]}`}>
													{item.date}
												</p>
											</div>*/}
										<h3 className={styles.newsTitle}>{t(item.title)}</h3>
										<h4 className={styles.newsSubtitle}>{t(item.subtitle)}</h4>
										<div className={styles.tipsBox}>
											<p className={styles.textTips}>
												{item.text && item.text.length > 0 && (
													<>
														{t('textTips')}:
														{item.text.map((paragraph, textIndex) => (
															<span key={textIndex} className={styles.text}>
																{t(paragraph)}{' '}
															</span>
														))}
													</>
												)}
											</p>
										</div>
									</div>
								</div>
								<div className={styles.newsContent}>
									{item.summary.map((paragraph, summaryIndex) => (
										<p key={summaryIndex} className={styles.newsSummary}>
											{t(paragraph)}
										</p>
									))}
									<button
										type="button"
										onClick={() => navigate(`/news/${item.id}`)}
										className={styles.moreButton}
									>
										{t('more')}
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default BlogNews;
