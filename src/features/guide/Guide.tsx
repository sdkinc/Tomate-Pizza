import { useState } from 'react';
import styles from './guide.module.css';
import GuideType from './type/GuideType';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

function Guide(): JSX.Element {
	const guideItems: GuideType[] = [
		{
			id: '17',
			category: 'Saxony',
			textKey: 'guide Item 17',
			title: 'guideTitle 17',
			subtitle: 'guideSubtitle 17',
			location: 'guideLocation17',
			summary: ['guideSummary17_p1', 'guideSummary17_p2', 'guideSummary17_p3'],
			imageUrl: 'pfund.webp',
		},
		{
			id: '16',
			category: 'Thuringia',
			textKey: 'guide Item 16',
			title: 'guideTitle 16',
			subtitle: 'guideSubtitle 16',
			location: 'guideLocation16',
			summary: ['guideSummary16_p1', 'guideSummary16_p2', 'guideSummary16_p3'],
			imageUrl: 'bodensteinCastle.webp',
		},
		{
			id: '15',
			category: 'Rhineland-Palatinate',
			textKey: 'guide Item 15',
			title: 'guideTitle 15',
			subtitle: 'guideSubtitle 15',
			location: 'guideLocation15',
			summary: ['guideSummary15_p1', 'guideSummary15_p2', 'guideSummary15_p3'],
			imageUrl: 'palatinateForest.webp',
		},
		{
			id: '14',
			category: 'Schleswig-Holstein',
			textKey: 'guide Item 14',
			title: 'guideTitle 14',
			subtitle: 'guideSubtitle 14',
			location: 'guideLocation14',
			summary: ['guideSummary14_p1', 'guideSummary14_p2', 'guideSummary14_p3'],
			imageUrl: 'sylt.webp',
		},
		{
			id: '13',
			category: 'Saxony',
			textKey: 'guide Item 13',
			title: 'guideTitle 13',
			subtitle: 'guideSubtitle 13',
			location: 'guideLocation13',
			summary: ['guideSummary13_p1', 'guideSummary13_p2', 'guideSummary13_p3'],
			imageUrl: 'dresden.webp',
		},
		{
			id: '12',
			category: 'North Rhine-Westphalia',
			textKey: 'guide Item 12',
			title: 'guideTitle 12',
			subtitle: 'guideSubtitle 12',
			location: 'guideLocation12',
			summary: ['guideSummary12_p1', 'guideSummary12_p2', 'guideSummary12_p3'],
			imageUrl: 'teutoburger.webp',
		},
		{
			id: '11',
			category: 'Mecklenburg-Western Pomerania',
			textKey: 'guide Item 11',
			title: 'guideTitle 11',
			subtitle: 'guideSubtitle 11',
			location: 'guideLocation11',
			summary: ['guideSummary11_p1', 'guideSummary11_p2', 'guideSummary11_p3'],
			imageUrl: 'rugen.webp',
		},
		{
			id: '10',
			category: 'Hesse',
			textKey: 'guide Item 10',
			title: 'guideTitle 10',
			subtitle: 'guideSubtitle 10',
			location: 'guideLocation10',
			summary: ['guideSummary10_p1', 'guideSummary10_p2', 'guideSummary10_p3'],
			imageUrl: 'hesse.webp',
		},
		{
			id: '9',
			category: 'Hamburg',
			textKey: 'guide Item 9',
			title: 'guideTitle 9',
			subtitle: 'guideSubtitle 9',
			location: 'guideLocation9',
			summary: ['guideSummary9_p1', 'guideSummary9_p2', 'guideSummary9_p3'],
			imageUrl: 'wilhelmsburg.webp',
		},
		{
			id: '8',
			category: 'Saarland',
			textKey: 'guide Item 8',
			title: 'guideTitle 8',
			subtitle: 'guideSubtitle 8',
			location: 'guideLocation8',
			summary: ['guideSummary8_p1', 'guideSummary8_p2', 'guideSummary8_p3'],
			imageUrl: 'Saarland.webp',
		},
		{
			id: '7',
			category: 'Lower Saxony',
			textKey: 'guide Item 7',
			title: 'guideTitle 7',
			subtitle: 'guideSubtitle 7',
			location: 'guideLocation7',
			summary: ['guideSummary7_p1', 'guideSummary7_p2', 'guideSummary7_p3'],
			imageUrl: 'hamelin.webp',
		},
		{
			id: '6',
			category: 'Bremen',
			textKey: 'guide Item 6',
			title: 'guideTitle 6',
			subtitle: 'guideSubtitle 6',
			location: 'guideLocation6',
			summary: ['guideSummary6_p1', 'guideSummary6_p2', 'guideSummary6_p3'],
			imageUrl: 'bremen.webp',
		},
		{
			id: '5',
			category: 'Bavaria',
			textKey: 'guide Item 5',
			title: 'guideTitle 5',
			subtitle: 'guideSubtitle 5',
			location: 'guideLocation5',
			summary: ['guideSummary5_p1', 'guideSummary5_p2', 'guideSummary5_p3'],
			imageUrl: 'castle.webp',
		},
		{
			id: '4',
			category: 'Baden-Württemberg',
			textKey: 'guide Item 4',
			title: 'guideTitle 4',
			subtitle: 'guideSubtitle 4',
			location: 'guideLocation4',
			summary: ['guideSummary4_p1', 'guideSummary4_p2', 'guideSummary4_p3'],
			imageUrl: '/blackForest.webp',
		},
		{
			id: '3',
			category: 'Berlin',
			textKey: 'guide Item 3',
			title: 'guideTitle 3',
			subtitle: 'guideSubtitle 3',
			location: 'guideLocation3',
			summary: ['guideSummary3_p1', 'guideSummary3_p2', 'guideSummary3_p3'],
			imageUrl: '/gardensOfTheWelt.webp',
		},
		{
			id: '2',
			category: 'Brandenburg',
			textKey: 'guide Item 2',
			title: 'guideTitle 2',
			subtitle: 'guideSubtitle 2',
			location: 'guideLocation2',
			summary: ['guideSummary2_p1', 'guideSummary2_p2', 'guideSummary2_p3'],
			imageUrl: '/spreewald.webp',
		},
		{
			id: '1',
			category: 'Saxony-Anhalt',
			textKey: 'guide Item 1',
			title: 'guideTitle 1',
			subtitle: 'guideSubtitle 1',
			location: 'guideLocation1',
			summary: ['guideSummary1_p1', 'guideSummary1_p2', 'guideSummary1_p3'],
			imageUrl: '/Walpurgis.webp',
		},
	];

	const { t } = useTranslation();
	const navigate = useNavigate();
	const location = useLocation();
	const [searchCategory, setSearchCategory] = useState<string>('Federal States');

	const filteredNewsItems =
		searchCategory === 'Federal States'
			? guideItems
			: guideItems.filter((item) => item.category === searchCategory);

	return (
		<div className={styles.guideContainer}>
			<h1 className={styles.title}>{t('GuideTitle')}</h1>
			<div className={styles.textBox}>
				<p className={styles.paragraph}>{t('guideParagraph1')} </p>
				<p className={styles.paragraph}>{t('guideParagraph2')} </p>
			</div>
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
						<option value="Federal States">{t('Federal States')}</option>
						<option value="Baden-Württemberg">{t('Baden-Württemberg')}</option>
						<option value="Bavaria">{t('Bavaria')}</option>
						<option value="Berlin">{t('Berlin')}</option>
						<option value="Brandenburg">{t('Brandenburg')}</option>
						<option value="Bremen">{t('Bremen')}</option>
						<option value="Hamburg">{t('Hamburg')}</option>
						<option value="Hesse">{t('Hesse')}</option>
						<option value="Lower Saxony">{t('Lower Saxony')}</option>
						<option value="Mecklenburg-Western Pomerania">{t('Pomerania')}</option>
						<option value="North Rhine-Westphalia">{t('North Rhine-Westphalia')}</option>
						<option value="Rhineland-Palatinate">{t('Rhineland-Palatinate')}</option>
						<option value="Saarland">{t('Saarland')}</option>
						<option value="Saxony-Anhalt">{t('Saxony-Anhalt')}</option>
						<option value="Saxony">{t('Saxony')}</option>
						<option value="Schleswig-Holstein">{t('Schleswig-Holstein')}</option>
						<option value="Thuringia">{t('Thuringia')}</option>
					</select>
				</div>
			</div>

			<div className={styles.mainContent}>
				{filteredNewsItems.map((item) => (
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
										{t('location')}: <span className={styles.text}>{t(item.location)}</span>
									</div>
								</div>
							</div>
							<div className={styles.newsContent}>
								{item.summary.map((paragraph, summaryIndex) => (
									<p
										key={summaryIndex}
										className={styles.newsSummary}
										dangerouslySetInnerHTML={{ __html: t(paragraph) }}
									></p>
								))}
								<button
									type="button"
									onClick={() =>
										navigate(`/guideDetail/${item.id}`, { state: { from: location.pathname } })
									}
									className={styles.moreButton}
								>
									{t('more')}
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Guide;
