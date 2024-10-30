import { t } from 'i18next';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './newsDetail.module.css';
import NewsDetailType from '../types/NewsDetailType';

function NewsDetail(): JSX.Element {
	const { id } = useParams();
	const [activeVideo, setActiveVideo] = useState<string>('');
	const newsItems: NewsDetailType[] = [
		{
			id: '13',
			contentType: 'news',
			textKey: 'News Item 12',
			title: 'Title 13',
			subtitle: 'Subtitle 13',
			textTips: ['text13_p1'],
			imageUrl: '/flohmarkt.webp',
			sections: [
				{
					textItalic: ['textItalicNews13_1'],
				},
				{
					textTitle: ['textTitleNews13_1'],
					text: ['textNews13_1'],
				},
				{
					textTitle: ['textTitleNews13_2'],
					text: ['textNews13_2.1', 'textNews13_2.2'],
				},
				{
					textTitle: ['textTitleNews13_3'],
					text: ['textNews13_3.1'],
				},
				{
					textTitleColor: ['textTitleColorNews13_4'],
					textLinks: ['textNews13_4.1'],
				},
				{
					textTitleColor: ['textTitleColorNews13_5'],
					textLinks: ['textNews13_5.1'],
				},
				{
					textTitleColor: ['textTitleColorNews13_6'],
					textLinks: ['textNews13_6.1'],
				},
				{
					textTitleColor: ['textTitleColorNews13_7'],
					textLinks: ['textNews13_7.1'],
				},
				{
					textTitleColor: ['textTitleColorNews13_8'],
					textLinks: ['textNews13_8.1'],
				},
				{
					textTitle: ['textTitleNews13_9'],
					text: ['textNews13_9.1', 'textNews13_9.2'],
				},
				{
					textTitle: ['textTitleNews13_10'],
					text: ['textNews13_10.1', 'textNews13_10.2'],
				},
				{
					textTitle: ['textTitleNews13_11'],
					text: ['textNews13_11'],
					textLinks: ['textNews13_11.1', 'textNews13_11.2', 'textNews13_11.3'],
				},
				{
					textTitleColor: ['textTitleColorNews13_12'],
					textLinks: ['textNews13_12.1', 'textNews13_12.2', 'textNews13_12.3'],
				},
				{
					textItalic: ['textNews13_13.1'],
				},
			],
		},
		{
			id: '12',
			contentType: 'news',
			textKey: 'News Item 12',
			title: 'Title 12',
			subtitle: 'Subtitle 12',
			textTips: ['text12_p1'],
			imageUrl: '/EducationChoice.webp',
			sections: [
				{
					textItalic: ['textItalicNews12_1'],
				},
				{
					textTitle: ['textTitleNews12_1'],
					textTitleColor: ['textTitleColorNews12_1'],
					text: ['textNews12_1'],
				},
				{
					textTitleColor: ['textTitleColorNews12_2'],
					textLinks: ['textNews12_2'],
				},
				{
					textTitleColor: ['textTitleColorNews12_3'],
					textLinks: ['textNews12_3.1', 'textNews12_3.2', 'textNews12_3.3', 'textNews12_3.4'],
				},
				{
					textTitleColor: ['textTitleColorNews12_4'],
					textLinks: ['textNews12_4.1', 'textNews12_4.2', 'textNews12_4.3'],
				},
				{
					textTitleColor: ['textTitleColorNews12_5'],
					textLinks: ['textNews12_5.1', 'textNews12_5.2'],
				},
				{
					textTitle: ['textTitleNews12_6'],
					textTitleColor: ['textTitleColorNews12_6'],
					text: ['textNews12_6'],
				},
				{
					textTitleColor: ['textTitleColorNews12_7'],
					textLinks: ['textNews12_7'],
				},
				{
					textTitleColor: ['textTitleColorNews12_8'],
					textLinks: ['textNews12_8.1', 'textNews12_8.2', 'textNews12_8.3', 'textNews12_8.4'],
				},
				{
					textTitleColor: ['textTitleColorNews12_9'],
					textLinks: ['textNews12_9.1', 'textNews12_9.2', 'textNews12_9.3'],
				},
				{
					textTitleColor: ['textTitleColorNews12_10'],
					textLinks: ['textNews12_10.1', 'textNews12_10.2'],
				},
				{
					textTitle: ['textTitleNews12_11'],
					textTitleColor: ['textTitleColorNews12_11'],
					text: ['textNews12_11'],
				},
				{
					textTitleColor: ['textTitleColorNews12_12'],
					text: ['textNews12_12.1'],
				},
				{
					textTitleColor: ['textTitleColorNews12_13'],
					textLinks: ['textNews12_13.1', 'textNews12_13.2', 'textNews12_13.3'],
				},
				{
					textTitleColor: ['textTitleColorNews12_14'],
					textLinks: ['textNews12_14.1', 'textNews12_14.2', 'textNews12_14.3'],
				},
				{
					textTitleColor: ['textTitleColorNews12_15'],
					textLinks: ['textNews12_15.1', 'textNews12_15.2'],
				},
				{
					textTitle: ['textTitleNews12_16'],
					textTitleColor: ['textTitleColorNews12_16'],
					text: ['textNews12_16'],
				},
				{
					textTitleColor: ['textTitleColorNews12_17'],
					textLinks: ['textNews12_17.1', 'textNews12_17.2', 'textNews12_17.3'],
				},
				{
					textTitleColor: ['textTitleColorNews12_18'],
					textLinks: ['textNews12_18.1', 'textNews12_18.2', 'textNews12_18.3'],
				},
				{
					textTitleColor: ['textTitleColorNews12_19'],
					textLinks: ['textNews12_19.1', 'textNews12_19.2', 'textNews12_19.3'],
				},
				{
					textTitleColor: ['textTitleColorNews12_20'],
					textLinks: ['textNews12_20.1', 'textNews12_20.2'],
				},
				{
					textTitle: ['textTitleNews12_21'],
					textTitleColor: ['textTitleColorNews12_21'],
					text: ['textNews12_21'],
				},
				{
					textTitleColor: ['textTitleColorNews12_22'],
					textLinks: ['textNews12_22.1', 'textNews12_22.2'],
				},
				{
					textTitleColor: ['textTitleColorNews12_23'],
					textLinks: ['textNews12_23.1', 'textNews12_23.2', 'textNews12_23.3'],
				},
				{
					textTitleColor: ['textTitleColorNews12_24'],
					textLinks: ['textNews12_24.1', 'textNews12_24.2', 'textNews12_24.3'],
				},
				{
					textTitleColor: ['textTitleColorNews12_25'],
					textLinks: ['textNews12_25.1', 'textNews12_25.2'],
				},
				{
					textTitle: ['textTitleNews12_26'],
					textTitleColor: ['textTitleColorNews12_26'],
					text: ['textNews12_26'],
					textLinks: ['textNews12_26.1', 'textNews12_26.2'],
				},
				{
					textTitleColor: ['textTitleColorNews12_27'],
					textLinks: ['textNews12_27.1', 'textNews12_27.2'],
				},
				{
					textTitleColor: ['textTitleColorNews12_28'],
					textLinks: ['textNews12_28.1', 'textNews12_28.2', 'textNews12_28.3'],
				},
				{
					textTitleColor: ['textTitleColorNews12_29'],
					textLinks: ['textNews12_29.1', 'textNews12_29.2', 'textNews12_29.3'],
				},
				{
					textTitleColor: ['textTitleColorNews12_30'],
					textLinks: ['textNews12_30.1', 'textNews12_30.2'],
				},
				{
					textItalic: ['textNews12_30.3'],
				},
			],
		},
		{
			id: '11',
			contentType: 'news',
			textKey: 'News Item 11',
			title: 'Title 11',
			subtitle: 'Subtitle 11',
			textTips: ['text11_p1'],
			imageUrl: '/jobcenter.webp',
			sections: [
				{
					text: ['textNews11_1'],
				},
				{
					textTitle: ['textTitleNews11_p1'],
					text: ['textNews11_1'],
				},
				{
					textTitle: ['textTitleNews11_p2'],
					text: ['textNews11_2', 'textNews11_2.1', 'textNews11_2.2', 'textNews11_2.3'],
				},
				{
					textTitle: ['textTitleNews11_p3'],
					text: ['textNews11_3', 'textNews11_3.1'],
				},
				{
					textTitle: ['textTitleNews11_p4'],
					text: ['textNews11_4', 'textNews11_4.1', 'textNews11_4.2', 'textNews11_4.3'],
				},
				{
					textTitle: ['textTitleNews11_p5'],
					text: ['textNews11_5'],
				},
				{
					textTitle: ['textTitleNews11_p6'],
					text: ['textNews11_6'],
				},
			],
		},
		{
			id: '1',
			contentType: 'news',
			textKey: 'News Item 1',
			title: 'Title 1',
			subtitle: 'Subtitle 1',
			textTips: ['text1_p1'],
			imageUrl: '/resume.webp',
			sections: [
				{
					text: [
						'textNews1_p1',
						'textNews1_p2',
						'textNews1_p3',
						'textNews1_p4',
						'textNews1_p5',
						'textNews1_p6',
						'textNews1_p7',
						'textNews1_p8',
						'textNews1_p9',
						'textNews1_p10',
						'textNews1_p11',
						'textNews1_p12',
						'textNews1_p13',
					],
				},
			],
		},
		/*{
			id: '5',
		
			contentType: 'video',
			textKey: 'Video1',
			title: 'TitleVideo1',
			subtitle: 'Subtitle 1',
			videoUrl: '/instruction.mp4',
			text: [
				'textVideo1_1',
				'textVideo1_2',
				'textVideo1_3',
				'textVideo1_4',
				'textVideo1_5',
			],
		},*/
		{
			id: '3',
			contentType: 'news',
			textKey: 'News Item 3',
			title: 'Title 3',
			subtitle: 'Subtitle 3',
			textTips: ['text3_p1'],
			imageUrl: '/apologyLetter.webp',
			sections: [
				{
					text: ['textNews3_1'],
					listItems: [
						{ key: 'firstWordNews3_p1', text: 'restNews3_p1' },
						{ key: 'firstWordNews3_p2', text: 'restNews3_p2' },
						{ key: 'firstWordNews3_p4', text: 'restNews3_p4' },
						{ key: 'firstWordNews3_p5', text: 'restNews3_p5' },
						{ key: 'firstWordNews3_p6', text: 'restNews3_p6' },
						{ key: 'firstWordNews3_p7', text: 'restNews3_p7' },
						{ key: 'firstWordNews3_p8', text: 'restNews3_p8' },
						{ key: 'firstWordNews3_p9', text: 'restNews3_p9' },
						{ key: 'firstWordNews3_p10', text: 'restNews3_p10' },
					],
				},
				{
					text: ['textNews3_2'],
				},
			],
		},
		{
			id: '4',
			contentType: 'news',
			textKey: 'News Item 4',
			title: 'Title 4',
			subtitle: 'Subtitle 4',
			textTips: ['text4_p1'],
			imageUrl: '/CVMasterClass.webp',
			sections: [
				{
					text: [
						'textNews4_p1',
						'textNews4_p2',
						'textNews4_p3',
						'textNews4_p4',
						'textNews4_p5',
						'textNews4_p6',
						'textNews4_p7',
						'textNews4_p8',
						'textNews4_p9',
					],
				},
			],
		},
		{
			id: '5',
			contentType: 'news',
			textKey: 'News Item 5',
			title: 'Title 5',
			subtitle: 'Subtitle 5',
			textTips: ['text5_p1'],
			imageUrl: '/education.webp',
			sections: [
				{
					text: ['textNews5_1'],
					listItems: [
						{ key: 'firstWordNews5_p1' },
						{ key: 'firstWordNews5_p2', text: 'restNews5_p2' },
					],
				},
				{
					textTitle: ['textTitleNews5_p2'],
					text: ['textNews5_2'],
					listItems: [
						{ key: 'firstWordNews5_p3' },
						{ key: 'firstWordNews5_p4', text: 'restNews5_p4' },
						{ key: 'firstWordNews5_p5' },
						{ key: 'firstWordNews5_p6', text: 'restNews5_p6' },
						{ key: 'firstWordNews5_p7' },
						{ key: 'firstWordNews5_p8', text: 'restNews5_p8' },
					],
				},
				{
					textTitle: ['textTitleNews5_p3'],
					text: ['textNews5_3'],
					listItems: [
						{ key: 'firstWordNews5_p9', text: 'restNews5_p9' },
						{ key: 'firstWordNews5_p10', text: 'restNews5_p10' },
					],
				},
				{
					textTitle: ['textTitleNews5_p4'],
					text: ['textNews5_4'],
					listItems: [
						{ key: 'firstWordNews5_p11', text: 'restNews5_p11' },
						{ key: 'firstWordNews5_p12', text: 'restNews5_p12' },
						{ key: 'firstWordNews5_p13', text: 'restNews5_p13' },
						{ key: 'firstWordNews5_p14', text: 'restNews5_p14' },
					],
				},
				{
					textTitle: ['textTitleNews5_p7'],
					text: ['textNews5_7'],
				},
				{
					textTitle: ['textTitleNews5_p5'],
					text: ['textNews5_5'],
				},
				{
					textTitle: ['textTitleNews5_p6'],
					text: ['textNews5_6'],
				},
			],
		},
		{
			id: '6',
			contentType: 'news',
			textKey: 'News Item 6',
			title: 'Title 6',
			subtitle: 'Subtitle 6',
			textTips: ['text6_p1'],
			imageUrl: '/shoolRules.webp',
			sections: [
				{
					text: ['textNews6_1'],
					listItems: [
						{ key: 'firstWordNews6_p1', text: 'restNews6_p1' },
						{ key: 'firstWordNews6_p2', text: 'restNews6_p2' },
					],
				},
				{
					text: ['textNews6_2'],
				},
				{
					textTitle: ['textTitleNews6_p3'],
					text: [
						'textNews6_3.1',
						'textNews6_3.2',
						'textNews6_3.3',
						'textNews6_3.4',
						'textNews6_3.5',
						'textNews6_3.6',
					],
				},
				{
					textTitle: ['textTitleNews6_p4'],
					text: ['textNews6_4.1'],
				},
				{
					textTitle: ['textTitleNews6_p5'],
					text: ['textNews6_5.1'],
				},
				{
					textTitle: ['textTitleNews6_p6'],
					text: ['textNews6_6.1'],
				},
				{
					textTitle: ['textTitleNews6_p7'],
					text: ['textNews6_7.1'],
				},
			],
		},
		{
			id: '7',
			contentType: 'news',
			textKey: 'News Item 7',
			title: 'Title 7',
			subtitle: 'Subtitle 7',
			textTips: ['text7_p1'],
			imageUrl: '/Hausordnung.webp',
			sections: [
				{
					text: ['textNews7_1'],
					listItems: [{ key: 'firstWordNews7_p1', text: 'restNews7_p1' }],
				},
				{
					textTitle: ['textTitleNews7_p1', 'textTitleNews7_p2'],
					text: ['textNews7_2.1'],
				},
				{
					textTitle: ['textTitleNews7_p3'],
					listItems: [
						{ key: 'firstWordNews7_p3.1', text: 'restNews7_p3.1' },
						{ key: 'firstWordNews7_p3.2', text: 'restNews7_p3.2' },
						{ key: 'firstWordNews7_p3.3', text: 'restNews7_p3.3' },
						{ key: 'firstWordNews7_p3.4', text: 'restNews7_p3.4' },
					],
				},
				{
					textTitle: ['textTitleNews7_p4'],
					text: ['textNews7_4.1'],
				},
				{
					textTitle: ['textTitleNews7_p5'],
					listItems: [
						{ key: 'firstWordNews7_p5.1', text: 'restNews7_p5.1' },
						{ key: 'firstWordNews7_p5.2', text: 'restNews7_p5.2' },
						{ key: 'firstWordNews7_p5.3', text: 'restNews7_p5.3' },
						{ key: 'firstWordNews7_p5.4', text: 'restNews7_p5.4' },
						{ key: 'firstWordNews7_p5.5', text: 'restNews7_p5.5' },
						{ key: 'firstWordNews7_p5.6', text: 'restNews7_p5.6' },
					],
				},
				{
					textTitle: ['textTitleNews7_p6'],
					text: ['textNews7_6.1'],
				},
				{
					textTitle: ['textTitleNews7_p7'],
					text: ['textNews7_7.1', 'textNews7_7.2'],
				},
			],
		},
		{
			id: '8',
			contentType: 'news',
			textKey: 'News Item 8',
			title: 'Title 8',
			subtitle: 'Subtitle 8',
			textTips: ['text8_p1'],
			imageUrl: '/houseRule.webp',
			sections: [
				{
					text: ['textNews8_1'],
				},
				{
					textTitle: ['textTitleNews8_p1'],
					text: ['textNews8_1.1'],
				},
				{
					textTitle: ['textTitleNews8_p2'],
					text: ['textNews8_2.1', 'textNews8_2.2', 'textNews8_2.3', 'textNews8_2.4'],
				},
				{
					textTitle: ['textTitleNews8_p3'],
					text: ['textNews8_3.1', 'textNews8_3.2', 'textNews8_3.3'],
				},
				{
					textTitle: ['textTitleNews8_p4'],
					listItems: [
						{ key: 'firstWordNews8_p4.1', text: 'restNews8_p4.1' },
						{ key: 'firstWordNews8_p4.2', text: 'restNews8_p4.2' },
						{ key: 'firstWordNews8_p4.3', text: 'restNews8_p4.3' },
						{ key: 'firstWordNews8_p4.4', text: 'restNews8_p4.4' },
					],
				},
				{
					textTitle: ['textTitleNews8_p5'],
					text: ['textNews8_5.1', 'textNews8_5.2'],
				},
			],
		},
		{
			id: '9',
			contentType: 'news',
			textKey: 'News Item 9',
			title: 'Title 9',
			subtitle: 'Subtitle 9',
			textTips: ['text9_p1'],
			imageUrl: '/familyCenters.webp',
			sections: [
				{
					text: ['textNews9_1'],
				},
				{
					textTitle: ['textTitleNews9_p1', 'textTitleNews9_p2'],
					text: [
						'textNews9_2.1',
						'textNews9_2.2',
						'textNews9_2.3',
						'textNews9_2.4',
						'textNews9_2.5',
						'textNews9_2.6',
					],
				},
				{
					textTitle: ['textTitleNews9_p3', 'textTitleNews9_p4'],
					text: [
						'textNews9_4.1',
						'textNews9_4.2',
						'textNews9_4.3',
						'textNews9_4.4',
						'textNews9_4.5',
					],
				},
				{
					textTitle: ['textTitleNews9_p5'],
					text: ['textNews9_5.1'],
				},
				{
					textTitle: ['textTitleNews9_p6'],
					text: ['textNews9_6.1'],
				},
			],
		},
		{
			id: '10',
			contentType: 'news',
			textKey: 'News Item 10',
			title: 'Title 10',
			subtitle: 'Subtitle 10',
			textTips: ['text10_p1'],
			imageUrl: '/Emergency.webp',
			sections: [
				{
					text: ['textNews10_1'],
				},
				{
					textTitle: ['textTitleNews10_p1'],
					listItems: [{ key: 'firstWordNews10_p1' }],
				},
				{
					text: ['textNews10_2'],
					listItems: [{ key: 'firstWordNews10_p2' }],
				},
				{
					text: [
						'textNews10_2.0',
						'textNews10_2.1',
						'textNews10_2.2',
						'textNews10_2.3',
						'textNews10_2.4',
						'textNews10_2.5',
						'textNews10_2.6',
					],
					listItems: [{ key: 'firstWordNews10_p3' }],
				},
				{
					text: ['textNews10_3'],
					listItems: [{ key: 'firstWordNews10_p4' }],
				},
				{
					text: ['textNews10_4'],
				},
				{
					textTitle: ['textTitleNews10_p5'],
					listItems: [{ key: 'firstWordNews10_p5' }],
				},
				{
					text: ['textNews10_5.1', 'textNews10_5.2', 'textNews10_5.3', 'textNews10_5.4'],
					listItems: [{ key: 'firstWordNews10_p6' }],
				},
				{
					text: ['textNews10_6'],
					listItems: [{ key: 'firstWordNews10_p7' }],
				},
				{
					text: [
						'textNews10_6.1',
						'textNews10_6.2',
						'textNews10_6.3',
						'textNews10_6.4',
						'textNews10_6.5',
						'textNews10_6.6',
					],
				},
				{
					textTitle: ['textTitleNews10_p7'],
					listItems: [{ key: 'firstWordNews10_p8' }],
				},
				{
					text: ['textNews10_7'],
					listItems: [{ key: 'firstWordNews10_p9' }],
				},
				{
					text: ['textNews10_8'],
					listItems: [{ key: 'firstWordNews10_p10' }],
				},
				{
					text: ['textNews10_9'],
				},
				{
					textTitle: ['textTitleNews10_p10'],
					text: ['textNews10_10'],
				},
			],
		},
	];

	const currentNews = newsItems.find((news) => news.id === id);

	if (!currentNews) {
		return <div>{t('newsNotFound')}</div>;
	}

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
	const currentIndex = newsItems.findIndex((news) => news.id === id);
	return (
		<div className={styles.newsDetailContainer}>
			<div className={styles.mainContent}>
				<div className={styles.blogContainer}>
					<div className={`${styles.secondaryBlock} ${styles[getBorderColorClass(currentIndex)]}`}>
						<div className={styles.titleImageBlock}>
							<div
								className={styles.mediaContainer}
								style={{ backgroundImage: `url(${currentNews.imageUrl})` }}
							>
								{currentNews.contentType === 'video' && (
									<video
										src={currentNews.videoUrl}
										className={styles.newsVideo}
										controls
										onPlay={() => handlePlay(currentNews.videoUrl)}
									>
										<track kind="captions" />
										Your browser does not support the video tag.
									</video>
								)}
							</div>
							<div className={styles.newsHeader}>
								<h2 className={styles.newsTitle}>{t(currentNews.title)}</h2>
								<h3 className={styles.newsSubtitle}>{t(currentNews.subtitle)}</h3>

								<div className={styles.tipsBox}>
									<p className={styles.textTips}>
										{currentNews.textTips && currentNews.textTips.length > 0 && (
											<>
												{t('textTips')}:
												{currentNews.textTips.map((textKey, idx) => (
													<span
														key={idx}
														className={styles.textTip}
														dangerouslySetInnerHTML={{ __html: t(textKey) }}
													/>
												))}
											</>
										)}
									</p>
								</div>
							</div>
						</div>
						<div className={styles.newsContent}>
							{currentNews.sections.map((section, sectionIdx) => (
								<div key={sectionIdx}>
									{section.textTitle &&
										section.textTitle.map((textKey, idx) => (
											<p
												key={idx}
												className={styles.upper}
												dangerouslySetInnerHTML={{ __html: t(textKey) }}
											/>
										))}
									{section.textTitleColor &&
										section.textTitleColor.map((textKey, idx) => (
											<p
												key={idx}
												className={styles.textTitleColor}
												dangerouslySetInnerHTML={{ __html: t(textKey) }}
											/>
										))}
									{section.text &&
										section.text.map((textKey, idx) => (
											<p
												key={idx}
												className={styles.text}
												dangerouslySetInnerHTML={{ __html: t(textKey) }}
											/>
										))}
									{section.textLinks &&
										section.textLinks.map((textKey, idx) => (
											<p
												key={idx}
												className={styles.textLinks}
												dangerouslySetInnerHTML={{ __html: t(textKey) }}
											/>
										))}
									{section.textItalic &&
										section.textItalic.map((textKey, idx) => (
											<p
												key={idx}
												className={styles.textItalic}
												dangerouslySetInnerHTML={{ __html: t(textKey) }}
											/>
										))}
									{section.textItalicColor &&
										section.textItalicColor.map((textKey, idx) => (
											<p
												key={idx}
												className={styles.textItalicColor}
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

export default NewsDetail;
