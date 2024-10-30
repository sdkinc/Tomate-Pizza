import styles from './shortNewsDetail.module.css';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ShortNewsDetailType from '../types/ShortNewsDetailType';

function ShortNewsDetail(): JSX.Element {
	const { id } = useParams();
	const { t } = useTranslation();

	const shortNews: ShortNewsDetailType[] = [
		{
			id: '01',
			textKey: 'new 1',
			title: 'ShortNews Title 1',
			subtitle: 'ShortNews Subtitle 1',
			imageUrl: '/taxi.webp',
			sections: [
				{
					textTitle: ['textTitleShortNews1_p1'],
					text: [
						'textShortNews1_p1.1',
						'textShortNews1_p1.2',
						'textShortNews1_p1.3',
						'textShortNews1_p1.4',
					],
				},
				{
					textTitle: ['textTitleShortNews1_p2'],
					text: [
						'textShortNews1_p2.1',
						'textShortNews1_p2.2',
						'textShortNews1_p2.3',
						'textShortNews1_p2.4',
						'textShortNews1_p2.5',
					],
				},
				{
					textTitle: ['textTitleShortNews1_p3'],
					text: [
						'textShortNews1_p3.1',
						'textShortNews1_p3.2',
						'textShortNews1_p3.3',
						'textShortNews1_p3.4',
					],
				},
				{
					textTitle: ['textTitleShortNews1_p4'],
					text: ['textShortNews1_p4.1'],
				},
				{
					textTitle: ['textTitleShortNews1_p5'],
					text: ['textShortNews1_p5.1'],
				},
			],
		},
		{
			id: '02',
			textKey: 'new 2',
			title: 'ShortNews Title 2',
			subtitle: 'ShortNews Subtitle 2',
			imageUrl: '/buchmesse.webp',
			sections: [
				{
					textTitle: ['textTitleShortNews2_p1'],
					text: ['textNews2_p1'],
				},
				{
					textTitle: ['textTitleShortNews2_p2'],
					text: ['textNews2_p2'],
				},
				{
					textTitle: ['textTitleShortNews2_p3'],
					text: ['textNews2_p3'],
				},
				{
					textTitle: ['textTitleShortNews2_p4'],
					listItems: [
						{ key: 'firstWordNews2_p4.1', text: 'restNews2_p4.1' },
						{ key: 'firstWordNews2_p4.2', text: 'restNews2_p4.2' },
						{ key: 'firstWordNews2_p4.3', text: 'restNews2_p4.3' },
						{ key: 'firstWordNews2_p4.4', text: 'restNews2_p4.4' },
						{ key: 'firstWordNews2_p4.5', text: 'restNews2_p4.5' },
					],
				},
				{
					textTitle: ['textTitleShortNews2_p5'],
					text: ['textNews2_p5'],
				},
				{
					textTitle: ['textTitleShortNews2_p6'],
					text: ['textNews2_p6'],
				},
				{
					textTitle: ['textTitleShortNews2_p7'],
					text: ['textNews2_p7.1', 'textNews2_p7.2'],
				},
			],
		},

		{
			id: '03',
			textKey: 'new 3',
			title: 'ShortNews Title 3',
			subtitle: 'ShortNews Subtitle 3',
			imageUrl: '/Oktoberfest.webp',
			sections: [
				{
					text: ['textNews3_p1'],
				},
				{
					textTitle: ['textTitleShortNews3_p2'],
					text: ['textNews3_p2.1'],
				},
				{
					textTitle: ['textTitleShortNews3_p3'],
					text: ['textNews3_p3.1'],
				},
				{
					textTitle: ['textTitleShortNews3_p4'],
					text: ['textNews3_p4.1', 'textNews3_p4.2', 'textNews3_p4.3', 'textNews3_p4.4'],
				},
				{
					textTitle: ['textTitleShortNews3_p5'],
					text: ['textNews3_p5.1'],
				},
				{
					textTitle: ['textTitleShortNews3_p6'],
					text: ['textNews3_p6.1'],
				},
				{
					textTitle: ['textTitleShortNews3_p7'],
					text: [
						'textNews3_p7.1',
						'textNews3_p7.2',
						'textNews3_p7.3',
						'textNews3_p7.4',
						'textNews3_p7.5',
						'textNews3_p7.6',
					],
				},
				{
					textTitle: ['textTitleShortNews3_p8'],
					text: ['textNews3_p8.1'],
				},
				{
					textTitle: ['textTitleShortNews3_p9'],
					text: ['textNews3_p9.1'],
				},
				{
					textTitle: ['textTitleShortNews3_p10'],
					text: ['textNews3_p10.1'],
				},
				{
					textTitle: ['textTitleShortNews3_p11'],
					text: ['textNews3_p11.1'],
				},
			],
		},
		{
			id: '04',
			textKey: 'new 4',
			title: 'ShortNews Title 4',
			subtitle: 'ShortNews Subtitle 4',
			imageUrl: '/Halloween.webp',
			sections: [
				{
					textTitle: ['textTitleShortNews4_p1'],
					text: ['textShortNews4_p1'],
				},
				{
					textTitle: ['textTitleShortNews4_p2'],
					listItems: [
						{ key: 'firstWordNews4_p2.1', text: 'restNews4_p2.1' },
						{ key: 'firstWordNews4_p2.2', text: 'restNews4_p2.2' },
						{ key: 'firstWordNews4_p2.3', text: 'restNews4_p2.3' },
					],
				},
				{
					textTitle: ['textTitleShortNews4_p3'],
					text: ['textShortNews4_p3'],
				},
				{
					textTitle: ['textTitleShortNews4_p4'],
					text: ['textShortNews4_p4'],
				},
				{
					textTitle: ['textTitleShortNews4_p5'],
					text: ['textShortNews4_p5.1', 'textShortNews4_p5.2', 'textShortNews4_p5.3'],
				},
			],
		},
		{
			id: '05',
			textKey: 'new 5',
			title: 'ShortNews Title 5',
			subtitle: 'ShortNews Subtitle 5',
			imageUrl: '/jazz.webp',
			sections: [
				{
					text: ['textShortNews5_p1'],
				},
				{
					textTitle: ['textTitleShortNews5_p2'],
					text: ['textShortNews5_p2.1'],
				},
				{
					textTitle: ['textTitleShortNews5_p3'],
					text: ['textShortNews3_p3.1', 'textShortNews3_p3.2'],
				},
				{
					textTitle: ['textTitleShortNews5_p4'],
					text: ['textShortNews5_p4'],
				},
				{
					textTitle: ['textTitleShortNews5_p5'],
					text: ['textShortNews5_p5.1', 'textShortNews5_p5.2', 'textShortNews5_p5.3'],
				},
			],
		},
	];

	const newsDetail = shortNews.find((news) => news.id === id);

	if (!newsDetail) {
		return <div className={styles.notFound}>{t('newsNotFound')}</div>;
	}

	return (
		<div className={styles.newsDetailContainer}>
			<div className={styles.mainContent}>
				<div className={styles.blogContainer}>
					<div className={styles.secondaryBlock}>
						<div className={styles.titleImageBlock}>
							<div
								className={styles.mediaContainer}
								style={{ backgroundImage: `url(${newsDetail.imageUrl})` }}
								aria-label={`${t(newsDetail.title)} image`}
							/>
							<div className={styles.newsHeader}>
								<h2 className={styles.newsTitle}>{t(newsDetail.title)}</h2>
								<h3 className={styles.newsSubtitle}>{t(newsDetail.subtitle)}</h3>
								<p className={styles.textTips}>
									{newsDetail.textTips && newsDetail.textTips.length > 0 && (
										<>
											{t('textTips')}:
											{newsDetail.textTips.map((textKey, idx) => (
												<span
													key={idx}
													className={styles.text}
													dangerouslySetInnerHTML={{ __html: t(textKey) }}
												/>
											))}
										</>
									)}
								</p>
							</div>
						</div>

						<div className={styles.newsContent}>
							{newsDetail.sections.map((section, sectionIdx) => (
								<div key={sectionIdx}>
									{section.textTitle &&
										section.textTitle.map((textKey, idx) => (
											<p
												key={idx}
												className={styles.upper}
												dangerouslySetInnerHTML={{ __html: t(textKey) }}
											/>
										))}
									{section.text &&
										section.text.map((textKey, idx) => (
											<p
												key={idx}
												className={styles.fullTextsSubtitle}
												dangerouslySetInnerHTML={{ __html: t(textKey) }}
											/>
										))}
									{section.listItems && (
										<div>
											{section.listItems.map((listItem, index) => (
												<p className={styles.listContainer} key={index}>
													<span className={styles.firstWord}>{t(listItem.key)}</span>
													{listItem.text && (
														<span className={styles.restOfSentence}>{t(listItem.text)}</span>
													)}
												</p>
											))}
										</div>
									)}
								</div>
							))}
						</div>
						<Link to="/blog" className={styles.backButton}>
							{t('backToBlog')}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ShortNewsDetail;
