import 'react';
import styles from './guideDetail.module.css';
import GuideDetailType from './type/GuideDetailType';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
interface LocationState {
	from?: {
		pathname: string;
	};
}

function GuideDetail(): JSX.Element {
	const { id } = useParams();
	const { t } = useTranslation();
	const location = useLocation();
	const state = location.state as LocationState | null;
	const guideItems: GuideDetailType[] = [
		{
			id: '17',
			category: 'Saxony',
			textKey: 'guide Item 17',
			title: 'guideTitle 17',
			subtitle: 'guideSubtitle 17',
			location: 'guideLocation17',
			imageUrl: '/pfund.webp',
			sections: [
				{
					textItalic: ['guide17Text'],
				},
				{
					textTitle: ['guide17TextTitle1'],
					text: ['guide17Text_p1_1', 'guide17Text_p1_2'],
				},
				{
					textTitle: ['guide17TextTitle2'],
					text: ['guide17Text_p2_1', 'guide17Text_p2_2', 'guide17Text_p2_3'],
				},
				{
					textTitle: ['guide17TextTitle3'],
					text: ['guide17Text_p3_1', 'guide17Text_p3_2', 'guide17Text_p3_3'],
					textItalicColor: ['guide17Text3_1', 'guide17Text3_2'],
				},
			],
		},
		{
			id: '16',
			category: 'Thuringia',
			textKey: 'guide Item 16',
			title: 'guideTitle 16',
			subtitle: 'guideSubtitle 16',
			location: 'guideLocation16',
			imageUrl: '/bodensteinСastle2.webp',
			sections: [
				{
					textItalic: ['guide16Text'],
				},
				{
					textTitle: ['guide16TextTitle1'],
					text: ['guide16Text_p1_1', 'guide16Text_p1_2', 'guide16Text_p1_3'],
				},
				{
					textTitle: ['guide16TextTitle2'],
					text: ['guide16Text_p2_1', 'guide16Text_p2_2', 'guide16Text_p2_3', 'guide16Text_p2_4'],
				},
				{
					textTitle: ['guide16TextTitle3'],
					text: ['guide16Text_p3_1', 'guide16Text_p3_2', 'guide16Text_p3_3'],
				},
				{
					textTitle: ['guide16TextTitle4'],
					text: ['guide16Text_p4_1', 'guide16Text_p4_2', 'guide16Text_p4_3'],
				},
				{
					textTitle: ['guide16TextTitle5'],
					text: ['guide16Text_p5_1', 'guide16Text_p5_2', 'guide16Text_p5_3'],
					textItalicColor: ['guide16Text6_1'],
				},
			],
		},
		{
			id: '15',
			category: 'Rhineland-Palatinate',
			textKey: 'guide Item 15',
			title: 'guideTitle 15',
			subtitle: 'guideSubtitle 15',
			location: 'guideLocation15',
			imageUrl: '/palatinateForest2.webp',
			sections: [
				{
					textItalic: ['guide15Text'],
				},
				{
					textTitle: ['guide15TextTitle1'],
					text: ['guide15Text_p1_1', 'guide15Text_p1_2', 'guide15Text_p1_3', 'guide14Text_p1_4'],
				},
				{
					textTitle: ['guide15TextTitle2'],
					text: ['guide15Text_p2_1', 'guide15Text_p2_2', 'guide15Text_p2_3'],
				},
				{
					textTitle: ['guide15TextTitle3'],
					text: ['guide15Text_p3_1', 'guide15Text_p3_2', 'guide15Text_p3_3'],
				},
				{
					textTitle: ['guide15TextTitle4'],
					text: ['guide15Text_p4_1', 'guide15Text_p4_2'],
				},
				{
					textTitle: ['guide15TextTitle5'],
					text: ['guide15Text_p5_1', 'guide15Text_p5_2', 'guide15Text_p5_3'],
				},
				{
					textTitle: ['guide15TextTitle6'],
					text: ['guide15Text_p6_1'],
					textItalicColor: ['guide15Text6_1', 'guide15Text6_2'],
				},
			],
		},
		{
			id: '14',
			category: 'Schleswig-Holstein',
			textKey: 'guide Item 14',
			title: 'guideTitle 14',
			subtitle: 'guideSubtitle 14',
			location: 'guideLocation14',
			imageUrl: '/sylt2.webp',
			sections: [
				{
					textItalic: ['guide14Text'],
				},
				{
					textTitle: ['guide14TextTitle1'],
					text: ['guide14Text_p1_1', 'guide14Text_p1_2', 'guide14Text_p1_3', 'guide14Text_p1_4'],
				},
				{
					textTitle: ['guide14TextTitle2'],
					text: ['guide14Text_p2_1', 'guide14Text_p2_2', 'guide14Text_p2_3'],
				},
				{
					textTitle: ['guide14TextTitle3'],
					text: ['guide14Text_p3_1', 'guide14Text_p3_2', 'guide14Text_p3_3'],
				},
				{
					textTitle: ['guide14TextTitle4'],
					text: ['guide14Text_p4_1', 'guide14Text_p4_2', 'guide14Text_p4_3', 'guide14Text_p4_4'],
					textItalicColor: ['guide14Text5_1'],
				},
			],
		},
		{
			id: '13',
			category: 'Saxony',
			textKey: 'guide Item 13',
			title: 'guideTitle 13',
			subtitle: 'guideSubtitle 13',
			location: 'guideLocation13',
			imageUrl: '/dresden.webp',
			sections: [
				{
					textItalic: ['guide13Text'],
				},
				{
					textTitle: ['guide13TextTitle1'],
					text: ['guide13Text_p1_1', 'guide13Text_p1_2'],
				},
				{
					textTitle: ['guide13TextTitle2'],
					text: ['guide13Text_p2_1', 'guide13Text_p2_2'],
				},
				{
					textTitle: ['guide13TextTitle3'],
					text: ['guide13Text_p3_1', 'guide13Text_p3_2', 'guide13Text_p3_3', 'guide13Text_p3_4'],
				},
				{
					textTitle: ['guide13TextTitle4'],
					text: ['guide13Text_p4_1'],
				},
				{
					textTitle: ['guide13TextTitle5'],
					text: ['guide13Text_p5_1', 'guide13Text_p5_2'],
					textItalicColor: ['guide13Text5'],
				},
			],
		},
		{
			id: '12',
			category: 'North Rhine-Westphalia',
			textKey: 'guide Item 12',
			title: 'guideTitle 12',
			subtitle: 'guideSubtitle 12',
			location: 'guideLocation12',
			imageUrl: '/teutoburger2.webp',
			sections: [
				{
					textItalic: ['guide12Text'],
				},
				{
					textTitle: ['guide12TextTitle1'],
					text: ['guide12Text_p1_1'],
				},
				{
					textTitle: ['guide12TextTitle2'],
					text: ['guide12Text_p2_1', 'guide12Text_p2_2'],
				},
				{
					textTitle: ['guide12TextTitle3'],
					text: ['guide12Text_p3_1', 'guide12Text_p3_2'],
				},
				{
					textTitle: ['guide12TextTitle4'],
					text: ['guide12Text_p4_1', 'guide12Text_p4_2'],
				},
				{
					textTitle: ['guide12TextTitle5'],
					text: ['guide12Text_p5_1', 'guide12Text_p5_2'],
				},
				{
					textTitle: ['guide12TextTitle6'],
					text: ['guide12Text_p6_1'],
					textItalicColor: ['guide12Text6'],
				},
			],
		},
		{
			id: '11',
			category: 'Mecklenburg-Western Pomerania',
			textKey: 'guide Item 11',
			title: 'guideTitle 11',
			subtitle: 'guideSubtitle 11',
			location: 'guideLocation11',
			imageUrl: '/rugen2.webp',
			sections: [
				{
					textItalic: ['guide11Text'],
				},
				{
					textTitle: ['guide11TextTitle1'],
					text: ['guide11Text_p1_1', 'guide11Text_p1_2', 'guide11Text_p1_3'],
				},
				{
					textTitle: ['guide11TextTitle2'],
					text: ['guide11Text_p2_1', 'guide11Text_p2_2'],
				},
				{
					textTitle: ['guide11TextTitle3'],
					text: ['guide11Text_p3_1', 'guide11Text_p3_2'],
				},
				{
					textTitle: ['guide11TextTitle4'],
					text: ['guide11Text_p4_1', 'guide11Text_p4_2', 'guide11Text_p4_3'],
				},
				{
					textTitle: ['guide11TextTitle5'],
					text: ['guide11Text_p5_1'],
				},
				{
					textTitle: ['guide11TextTitle6'],
					text: ['guide11Text_p6_1'],
					textItalicColor: ['guide11Text6'],
				},
			],
		},
		{
			id: '10',
			category: 'Hesse',
			textKey: 'guide Item 10',
			title: 'guideTitle 10',
			subtitle: 'guideSubtitle 10',
			location: 'guideLocation10',
			imageUrl: '/hesse.webp',
			sections: [
				{
					textItalic: ['guide10Text'],
				},
				{
					textTitle: ['guide10TextTitle1'],
					text: ['guide10Text_p1'],
				},
				{
					textTitle: ['guide10TextTitle2'],
					text: ['guide10Text_p2_1', 'guide10Text_p2_2'],
				},
				{
					textTitle: ['guide10TextTitle3'],
					text: ['guide10Text_p3_1', 'guide10Text_p3_2'],
				},
				{
					textTitle: ['guide10TextTitle4'],
					text: ['guide10Text_p4_1', 'guide10Text_p4_2'],
				},
				{
					textTitle: ['guide10TextTitle5'],
					text: ['guide10Text_p5_1'],
				},
				{
					textTitle: ['guide10TextTitle6'],
					text: ['guide10Text_p6_1', 'guide10Text_p6_1'],
					textItalicColor: ['guide10Text6'],
				},
			],
		},
		{
			id: '9',
			category: 'Hamburg',
			textKey: 'guide Item 9',
			title: 'guideTitle 9',
			subtitle: 'guideSubtitle 9',
			location: 'guideLocation9',
			imageUrl: '/wilhelmsburg2.webp',
			sections: [
				{
					textItalic: ['guide9Text'],
				},
				{
					textTitle: ['guide9TextTitle1'],
					text: ['guide9Text_p1', 'guide9Text_p2'],
				},
				{
					textTitle: ['guide9TextTitle2'],
					text: ['guide9Text_p2_1', 'guide9Text_p2_2'],
				},
				{
					textTitle: ['guide9TextTitle3'],
					text: ['guide9Text_p3_1', 'guide9Text_p3_2'],
				},
				{
					textTitle: ['guide9TextTitle4'],
					text: ['guide9Text_p4_1', 'guide9Text_p4_2'],
				},
				{
					textTitle: ['guide9TextTitle5'],
					text: ['guide9Text_p5_1', 'guide9Text_p5_2'],
				},
				{
					paragraphTitle: ['guide9P6'],
					text: ['guide9P6_p1'],
					textItalicColor: ['guide9Text6'],
				},
			],
		},
		{
			id: '8',
			category: 'Saarland',
			textKey: 'guide Item 8',
			title: 'guideTitle 8',
			subtitle: 'guideSubtitle 8',
			location: 'guideLocation8',
			imageUrl: '/Saarland.webp',
			sections: [
				{
					textItalic: ['guide8Text'],
				},
				{
					textTitle: ['guide8TextTitle1'],
					text: ['guide8Text_p1'],
				},
				{
					textTitle: ['guide8TextTitle2'],
					text: ['guide8Text_p2'],
				},
				{
					textTitle: ['guide8TextTitle3'],
					text: ['guide8Text_p3'],
				},
				{
					textTitle: ['guide8TextTitle4'],
					text: ['guide8Text_p4'],
				},
				{
					textTitle: ['guide8TextTitle5'],
					paragraphTitle: ['guide8P5'],
					text: ['guide8P5_p1', 'guide8P5_p2'],
				},
				{
					paragraphTitle: ['guide8P6'],
					text: ['guide8P6_p1', 'guide8P6_p2'],
					textItalicColor: ['guide8Text8'],
				},
			],
		},
		{
			id: '7',
			category: 'Lower Saxony',
			textKey: 'guide Item 7',
			title: 'guideTitle 7',
			subtitle: 'guideSubtitle 7',
			location: 'guideLocation7',
			imageUrl: '/hamelin2.webp',
			sections: [
				{
					textItalic: ['guide7Text'],
				},
				{
					textTitle: ['guide7TextTitle1'],
					text: ['guide7Text_p1'],
				},
				{
					textTitle: ['guide7TextTitle2'],
					paragraphTitle: ['guide7P1'],
					textItalic: ['guide7P1_p1'],
				},
				{
					paragraphTitle: ['guide7P2'],
					textItalic: ['guide7P1_p2'],
				},
				{
					paragraphTitle: ['guide7P3'],
					textItalic: ['guide7P1_p3'],
				},
				{
					textTitle: ['guide7TextTitle4'],
					paragraphTitle: ['guide7P4'],
					textItalic: ['guide7P1_p4'],
				},
				{
					paragraphTitle: ['guide7P5'],
					textItalic: ['guide7P1_p5'],
				},
				{
					textTitle: ['guide7TextTitle6'],
					paragraphTitle: ['guide7P6'],
					textItalic: ['guide7P1_p6'],
				},
				{
					paragraphTitle: ['guide7P7'],
					textItalic: ['guide7P1_p7'],
				},
				{
					textTitle: ['guide7TextTitle8'],
					paragraphTitle: ['guide7P8'],
					textItalic: ['guide7P1_p8'],
				},
				{
					textTitle: ['guide7TextTitle9'],
					text: ['guide7Text_p9'],
					textItalicColor: ['guide7Text9'],
				},
			],
		},
		{
			id: '6',
			category: 'Bremen',
			textKey: 'guide Item 6',
			title: 'guideTitle 6',
			subtitle: 'guideSubtitle 6',
			location: 'guideLocation6',
			imageUrl: '/bremen2.webp',
			sections: [
				{
					textItalic: ['guide6Text'],
				},
				{
					textTitle: ['guide6TextTitle1'],
					text: ['guide6Text_p1', 'guide6Text_p2'],
				},
				{
					textTitle: ['guide6TextTitle2'],
					text: ['guide6Text2_p1', 'guide6Text2_p2'],
				},
				{
					textTitle: ['guide6TextTitle3'],
					text: ['guide6Text3_p1'],
				},
				{
					paragraphTitle: ['guide6P1'],
					textItalic: ['guide6P1_p1'],
				},
				{
					paragraphTitle: ['guide6P2'],
					textItalic: ['guide6P2_p1'],
				},
				{
					paragraphTitle: ['guide6P3'],
					textItalic: ['guide6P3_p1'],
				},
				{
					paragraphTitle: ['guide6P4'],
					textItalic: ['guide6P4_p1'],
				},
				{
					textTitle: ['guide6TextTitle4'],
					text: ['guide6Text4_p1', 'guide6Text4_p2'],
				},
				{
					textTitle: ['guide6TextTitle5'],
					text: ['guide6Text5_p1', 'guide6Text5_p2'],
					textItalicColor: ['guide6Text2'],
				},
			],
		},
		{
			id: '5',
			category: 'Bavaria',
			textKey: 'guide Item 5',
			title: 'guideTitle 5',
			subtitle: 'guideSubtitle 5',
			location: 'guideLocation5',
			imageUrl: '/castle.webp',
			sections: [
				{
					textItalic: ['guide5Text'],
				},
				{
					textTitle: ['guide5TextTitle1'],
					text: ['guide5Text_p1', 'guide5Text_p2', 'guide5Text_p3'],
				},
				{
					textTitle: ['guide5TextTitle2'],
					text: ['guide5Text2_p1', 'guide5Text2_p2', 'guide5Text2_p3'],
				},
				{
					textTitle: ['guide5TextTitle3'],
					text: ['guide5Text3_p1', 'guide5Text3_p2', 'guide5Text3_p3', 'guide5Text3_p4'],
				},
				{
					textTitle: ['guide5TextTitle4'],
					text: ['guide5Text4_p1', 'guide5Text4_p2', 'guide5Text4_p3'],
					textItalicColor: ['guide5Text2'],
				},
			],
		},
		{
			id: '4',
			category: 'Baden-Württemberg',
			textKey: 'guide Item 4',
			title: 'guideTitle 4',
			subtitle: 'guideSubtitle 4',
			location: 'guideLocation4',
			imageUrl: '/blackForest2.webp',
			sections: [
				{
					textItalic: ['guide4Text'],
				},
				{
					textTitle: ['guide4TextTitle1'],
					text: ['guide4Text_p1', 'guide4Text_p2'],
				},
				{
					textTitle: ['guide4TextTitle2'],
					text: ['guide4Text2_p1', 'guide4Text2_p2'],
				},
				{
					textTitle: ['guide4TextTitle3'],
					text: ['guide4Text3_p1', 'guide4Text3_p2', 'guide4Text3_p3', 'guide4Text3_p2'],
					textItalicColor: ['guide4Text2'],
				},
			],
		},
		{
			id: '3',
			category: 'Berlin',
			textKey: 'guide Item 3',
			title: 'guideTitle 3',
			subtitle: 'guideSubtitle 3',
			location: 'guideLocation3',
			imageUrl: '/gardensOfTheWelt2.webp',
			sections: [
				{
					textItalic: ['guide3Text'],
				},
				{
					textTitle: ['guide3TextTitle1'],
					text: ['guide3Text_p1', 'guide3Text_p2'],
				},
				{
					textTitle: ['guide3TextTitle2'],
					text: ['guide3Text2_p1', 'guide3Text2_p2', 'guide3Text2_p3', 'guide3Text2_p4'],
				},
				{
					textTitle: ['guide3TextTitle3'],
					paragraphTitle: ['guide3PTitle3'],
					text: ['guide3PText_p3'],
				},
				{
					paragraphTitle: ['guide3PTitle4'],
					text: ['guide3PText_p4'],
				},
				{
					paragraphTitle: ['guide3PTitle5'],
					text: ['guide3PText_p5'],
				},
				{
					textTitle: ['guide3TextTitle4'],
					text: ['guide3Text_p4'],
				},
				{
					textTitle: ['guide3TextTitle5'],
					text: ['guide3Text_p5'],
				},
			],
		},
		{
			id: '2',
			category: 'Brandenburg',
			textKey: 'guide Item 2',
			title: 'guideTitle 2',
			subtitle: 'guideSubtitle 2',
			location: 'guideLocation2',
			imageUrl: '/spreewald.webp',
			sections: [
				{
					textItalic: ['guide2Text'],
				},
				{
					textTitle: ['guide2TextTitle1'],
					paragraphTitle: ['guide2PTitle1'],
					text: ['guide2Text_p1'],
				},
				{
					paragraphTitle: ['guide2PTitle2'],
					text: ['guide2Text_p2'],
				},
				{
					textTitle: ['guide2TextTitle3'],
					paragraphTitle: ['guide2PTitle3'],
					text: ['guide2Text_p3'],
				},
				{
					paragraphTitle: ['guide2PTitle4'],
					text: ['guide2Text_p4'],
				},
				{
					textTitle: ['guide2TextTitle5'],
					text: ['guide2Text_p5.1', 'guide2Text_p5.2'],
				},
				{
					textTitle: ['guide2TextTitle6'],
					text: ['guide2Text_p6'],
				},
				{
					textItalicColor: ['guide2Text7'],
				},
				{
					text: ['guide2Text_p7'],
				},
			],
		},
		{
			id: '1',
			category: 'Saxony-Anhalt',
			textKey: 'guide Item 1',
			title: 'guideTitle 1',
			subtitle: 'guideSubtitle 1',
			location: 'guideLocation1',
			imageUrl: '/Walpurgis.webp',
			sections: [
				{
					textTitle: ['guide1TextTitle'],
					textItalic: ['guideText1'],
				},
				{
					paragraphTitle: ['guide1PTitle'],
					text: ['guide1Text_p1'],
				},
				{
					paragraphTitle: ['guide1PTitle2'],
					text: ['guide1Text_p2'],
				},
				{
					paragraphTitle: ['guide1PTitle3'],
					text: ['guide1Text_p3'],
				},
				{
					textTitle: ['guide1TextTitle2'],
					text: ['guideText2'],
				},
				{
					paragraphTitle: ['guide1PTitle4'],
					text: ['guide1Text_p4'],
				},
				{
					paragraphTitle: ['guide1PTitle5'],
					text: ['guide1Text_p5'],
				},
				{
					paragraphTitle: ['guide1PTitle6'],
					text: ['guide1Text_p6'],
				},
				{
					paragraphTitle: ['guide1PTitle7'],
					text: ['guide1Text_p7'],
				},
				{
					paragraphTitle: ['guide1PTitle8'],
					text: ['guide1Text_p8'],
				},
				{
					paragraphTitle: ['guide1PTitle9'],
					text: ['guide1Text_p9'],
				},
				{
					paragraphTitle: ['guide1PTitle10'],
					text: ['guide1Text_p10'],
				},
				{
					paragraphTitle: ['guide1PTitle11'],
					text: ['guide1Text_p11'],
				},
				{
					textItalicColor: ['guideText3'],
				},
			],
		},
	];

	const guideDetail = guideItems.find((news) => news.id === id);

	if (!guideDetail) {
		return <div>{t('Guide not found')}</div>;
	}

	return (
		<div className={styles.guideContainer}>
			<div className={styles.mainContent}>
				<div className={styles.blog}>
					<div className={styles.blogContainer}>
						<div className={styles.titleImageBlock}>
							<div className={styles.mediaContainer}>
								<img
									src={guideDetail.imageUrl}
									alt={`${t(guideDetail.title)} image`}
									className={styles.newsImage}
								/>
							</div>
							<div className={styles.titleBlock}>
								<h2 className={styles.newsTitle}>{t(guideDetail.title)}</h2>
								<h3 className={styles.newsSubtitle}>{t(guideDetail.subtitle)}</h3>
								<div className={styles.textLocation}>
									{guideDetail.location && guideDetail.location.length > 0 && (
										<>
											{guideDetail.location && (
												<>
													{t('location')}:{' '}
													<span
														className={styles.text}
														dangerouslySetInnerHTML={{ __html: t(guideDetail.location) }}
													/>
												</>
											)}
										</>
									)}
								</div>
							</div>
						</div>

						<div className={styles.newsContent}>
							{guideDetail.sections.map((section, sectionIdx) => (
								<div key={sectionIdx}>
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
						<Link to={state?.from || '/guide'} className={styles.backButton}>
							{t('backToGuid')}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GuideDetail;
