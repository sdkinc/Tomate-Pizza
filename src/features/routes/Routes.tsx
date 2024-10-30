import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './routes.module.css';
import RouteType from './type/RouteType';

function Routes(): JSX.Element {
	const routesItems: RouteType[] = [
		{
			id: '1',
			category: '',
			textKey: 'routeItem 1',
			title: 'routeTitle 1',
			subtitle: 'routeSubtitle 1',
			location: 'routeLocation 1',
			imageUrl: 'routeMunich.webp',
			sections: [
				{
					textItalic: ['route1Text'],
				},
				{
					textTitle: ['route1TextTitle1'],
					text: ['route1Text_p1_1', 'route1Text_p1_2'],
				},
				{
					textTitle: ['route1TextTitle2'],
					text: ['route1Text_p2_1'],
				},
				{
					paragraphTitle: ['route1P1'],
					textRight: [
						'route1P1_p1',
						'route1P1_p2',
						'route1P1_p3',
						'route1P1_p4',
						'route1P1_p5',
						'route1P1_p6',
						'route1P1_p7',
						'route1P1_p8',
					],
				},
				{
					textTitle: ['route1TextTitle3'],
					text: ['route1Text_p3_1'],
					textRight: ['route1P3_p1', 'route1P3_p2', 'route1P3_p3'],
				},
				{
					text: ['route1Text_p3_2'],
				},

				{
					textTitle: ['route1TextTitle4'],
					text: ['route1Text_p4_1'],
					textItalicColor: ['route1Text4_1'],
				},
				{
					textItalic: ['route1Text_p5_1'],
				},
			],
		},
		{
			id: '2',
			category: '',
			textKey: 'routeItem 2',
			title: 'routeTitle 2',
			subtitle: 'routeSubtitle 2',
			location: 'routeLocation 2',
			imageUrl: 'routeRain.webp',
			sections: [
				{
					textItalic: ['route2Text'],
				},
				{
					textTitle: ['route2TextTitle1'],
					text: ['route2Text_p1_1', 'route2Text_p1_2'],
				},
				{
					textTitle: ['route2TextTitle2'],
					text: ['route2Text_p2_1'],
				},
				{
					paragraphTitle: ['route2P1'],
					textRight: [
						'route2P1_p1',
						'route2P1_p2',
						'route2P1_p3',
						'route2P1_p4',
						'route2P1_p5',
						'route2P1_p6',
						'route2P1_p7',
					],
				},
				{
					textTitle: ['route2TextTitle3'],
					text: ['route2Text_p3_1', 'route2Text_p3_2'],
				},
				{
					textTitle: ['route2TextTitle4'],
					text: ['route2Text_p4_1', 'route2Text_p4_2'],
					textItalicColor: ['route2Text4_1', 'route2Text4_2'],
				},
				{
					textItalic: ['route2Text_p5_1'],
				},
			],
		},
		{
			id: '3',
			category: '',
			textKey: 'routeItem 3',
			title: 'routeTitle 3',
			subtitle: 'routeSubtitle 3',
			location: 'routeLocation 3',
			imageUrl: 'routePfalzer.webp',
			sections: [
				{
					textItalic: ['route3Text'],
				},
				{
					textTitle: ['route3TextTitle1'],
					text: ['route3Text_p1_1', 'route3Text_p1_2'],
				},
				{
					textTitle: ['route3TextTitle2'],
					text: ['route3Text_p2_1'],
				},
				{
					paragraphTitle: ['route3P1'],
					textRight: [
						'route3P1_p1',
						'route3P1_p2',
						'route3P1_p3',
						'route3P1_p4',
						'route3P1_p5',
						'route3P1_p6',
					],
				},
				{
					textTitle: ['route3TextTitle3'],
					text: ['route3Text_p3_1'],
					textRight: ['route3P3_p1', 'route3P3_p2', 'route3P3_p3'],
				},

				{
					textTitle: ['route3TextTitle4'],
					text: ['route3Text_p4_1', 'route3Text_p4_2'],
					textItalicColor: ['route3Text4_1'],
				},
				{
					textItalic: ['route3Text_p5_1'],
				},
			],
		},
		{
			id: '4',
			category: '',
			textKey: 'routeItem 4',
			title: 'routeTitle 4',
			subtitle: 'routeSubtitle 4',
			location: 'routeLocation 4',
			imageUrl: 'routeMosel.webp',
			sections: [
				{
					textItalic: ['route4Text'],
				},
				{
					textTitle: ['route4TextTitle1'],
					text: ['route4Text_p1_1', 'route4Text_p1_2'],
				},
				{
					textTitle: ['route4TextTitle2'],
					text: ['route4Text_p2_1'],
				},
				{
					paragraphTitle: ['route4P1'],
					textRight: [
						'route4P1_p1',
						'route4P1_p2',
						'route4P1_p3',
						'route4P1_p4',
						'route4P1_p5',
						'route4P1_p6',
						'route4P1_p7',
						'route4P1_p8',
					],
				},
				{
					textTitle: ['route4TextTitle3'],
					text: ['route4Text_p3_1'],
					textRight: ['route4P3_p1', 'route4P3_p2'],
				},

				{
					textTitle: ['route4TextTitle4'],
					text: ['route4Text_p4_1', 'route4Text_p4_2'],
					textItalicColor: ['route4Text4_1'],
				},
				{
					textItalic: ['route4Text_p5_1'],
				},
			],
		},
		{
			id: '5',
			category: '',
			textKey: 'routeItem 5',
			title: 'routeTitle 5',
			subtitle: 'routeSubtitle 5',
			location: 'routeLocation 5',
			imageUrl: 'routeIsar.webp',
			sections: [
				{
					textItalic: ['route5Text'],
				},
				{
					textTitle: ['route5TextTitle1'],
					text: ['route5Text_p1_1', 'route5Text_p1_2'],
				},
				{
					textTitle: ['route5TextTitle2'],
					text: ['route5Text_p2_1'],
				},
				{
					paragraphTitle: ['route5P1'],
					textRight: [
						'route5P1_p1',
						'route5P1_p2',
						'route5P1_p3',
						'route5P1_p4',
						'route5P1_p5',
						'route5P1_p6',
						'route5P1_p7',
						'route5P1_p8',
						'route5P1_p9',
						'route5P1_p10',
						'route5P1_p11',
						'route5P1_p12',
					],
				},
				{
					textTitle: ['route5TextTitle3'],
					text: ['route5Text_p3_1'],
					textRight: ['route5P3_p1', 'route5P3_p2', 'route5P3_p3'],
				},

				{
					textTitle: ['route5TextTitle4'],
					text: ['route5Text_p4_1'],
					textItalicColor: ['route5Text4_1'],
				},
				{
					textItalic: ['route5Text_p5_1'],
				},
			],
		},
	];

	const { t } = useTranslation();
	const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

	const toggleExpand = (id: string): void => {
		setExpandedItemId(expandedItemId === id ? null : id);
	};
	useEffect(() => {
		const mediaBlocks = document.querySelectorAll(`.${styles.mediaBlock}`);

		mediaBlocks.forEach((block, index) => {
			if ((index + 1) % 2 === 0) {
				block.classList.add(styles.evenBlock);
			}
		});
	}, []);

	return (
		<div className={styles.mainContainer}>
			<h1 className={styles.titleMain}>{t('RoutesTitle')}</h1>
			<div className={styles.textBox}>
				<p className={styles.paragraph}>{t('routeParagraph1')} </p>
				<p className={styles.paragraph}>{t('routeParagraph2')} </p>
			</div>
			<div className={styles.mainContent}>
				<div className={styles.blogMain}>
					{routesItems.map((item) => (
						<div key={item.textKey} className={styles.blog}>
							<div className={styles.blogContainer}>
								<div className={styles.mediaBlock}>
									<div className={styles.mediaContainer}>
										<img
											src={item.imageUrl}
											alt={`${t(item.title)} image`}
											className={styles.newsImage}
										/>
									</div>
									<div className={styles.titleBlock}>
										<h3 className={styles.newsTitle}>{t(item.title)}</h3>
										<h4 className={styles.newsSubtitle}>{t(item.subtitle)}</h4>
										<div className={styles.textLocation}>
											<span className={styles.text}>{t(item.location)}</span>
										</div>
									</div>
								</div>

								<div className={styles.newsContent}>
									{expandedItemId !== item.id && (
										<button
											type="button"
											onClick={() => toggleExpand(item.id)}
											className={styles.moreButton}
										>
											{t('more')}
										</button>
									)}
									{expandedItemId === item.id && (
										<div className={styles.expandedContent}>
											<div className={styles.sections}>
												{item.sections.map((section, sectionIdx) => (
													<div key={sectionIdx} className={styles.section}>
														{section.textTitle &&
															section.textTitle.map((textKey, idx) => (
																<p
																	key={idx}
																	className={styles.title}
																	dangerouslySetInnerHTML={{ __html: t(textKey) }}
																/>
															))}
														{section.paragraphTitle &&
															section.paragraphTitle.map((textKey, idx) => (
																<p
																	key={idx}
																	className={styles.paragraphTitle}
																	dangerouslySetInnerHTML={{ __html: t(textKey) }}
																/>
															))}
														{section.text &&
															section.text.map((textKey, idx) => (
																<p
																	key={idx}
																	className={styles.textNormal}
																	dangerouslySetInnerHTML={{ __html: t(textKey) }}
																/>
															))}
														{section.textRight &&
															section.textRight.map((textKey, idx) => (
																<p
																	key={idx}
																	className={styles.textRight}
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
													</div>
												))}
											</div>

											<button
												type="button"
												onClick={() => toggleExpand(item.id)}
												className={styles.lessButton}
											>
												{t('less')}
											</button>
										</div>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Routes;
