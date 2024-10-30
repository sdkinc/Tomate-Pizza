import 'react';
import styles from './federalStates.module.css';
import { useTranslation } from 'react-i18next';
import StatesType from './type/StatesType';

function FederalStates(): JSX.Element {
	const statesItems: StatesType[] = [
		{
			id: '1',
			imageUrl: 'emblem/baden-württemberg.webp',
			name: 'state 1',
			capital: 'stateCapital 1',
			population: 'statePopulation 1',
			area: 'stateArea 1',
			economy: 'stateEconomy 1',
			attractions: 'stateAttractions 1',
			specialFact: 'stateFacts 1',
		},
		{
			id: '2',
			imageUrl: 'emblem/bavaria.webp',
			name: 'state 2',
			capital: 'stateCapital 2',
			population: 'statePopulation 2',
			area: 'stateArea 2',
			economy: 'stateEconomy 2',
			attractions: 'stateAttractions 2',
			specialFact: 'stateFacts 2',
		},
		{
			id: '3',
			imageUrl: 'emblem/berlin.webp',
			name: 'state 3',
			capital: 'stateCapital 3',
			population: 'statePopulation 3',
			area: 'stateArea 3',
			economy: 'stateEconomy 3',
			attractions: 'stateAttractions 3',
			specialFact: 'stateFacts 3',
		},
		{
			id: '4',
			imageUrl: 'emblem/brandenburg.webp',
			name: 'state 4',
			capital: 'stateCapital 4',
			population: 'statePopulation 4',
			area: 'stateArea 4',
			economy: 'stateEconomy 4',
			attractions: 'stateAttractions 4',
			specialFact: 'stateFacts 4',
		},
		{
			id: '5',
			imageUrl: 'emblem/bremen.webp',
			name: 'state 5',
			capital: 'stateCapital 5',
			population: 'statePopulation 5',
			area: 'stateArea 5',
			economy: 'stateEconomy 5',
			attractions: 'stateAttractions 5',
			specialFact: 'stateFacts 5',
		},
		{
			id: '6',
			imageUrl: 'emblem/hamburg.webp',
			name: 'state 6',
			capital: 'stateCapital 6',
			population: 'statePopulation 6',
			area: 'stateArea 6',
			economy: 'stateEconomy 6',
			attractions: 'stateAttractions 6',
			specialFact: 'stateFacts 6',
		},
		{
			id: '7',
			imageUrl: 'emblem/hesse.webp',
			name: 'state 7',
			capital: 'stateCapital 7',
			population: 'statePopulation 7',
			area: 'stateArea 7',
			economy: 'stateEconomy 7',
			attractions: 'stateAttractions 7',
			specialFact: 'stateFacts 7',
		},
		{
			id: '8',
			imageUrl: 'emblem/mecklenburg-western_pomerania.webp',
			name: 'state 8',
			capital: 'stateCapital 8',
			population: 'statePopulation 8',
			area: 'stateArea 8',
			economy: 'stateEconomy 8',
			attractions: 'stateAttractions 8',
			specialFact: 'stateFacts 8',
		},
		{
			id: '9',
			imageUrl: 'emblem/lower_saxony.webp',
			name: 'state 9',
			capital: 'stateCapital 9',
			population: 'statePopulation 9',
			area: 'stateArea 9',
			economy: 'stateEconomy 9',
			attractions: 'stateAttractions 9',
			specialFact: 'stateFacts 9',
		},
		{
			id: '10',
			imageUrl: 'emblem/north_rhine-westphalia.webp',
			name: 'state 10',
			capital: 'stateCapital 10',
			population: 'statePopulation 10',
			area: 'stateArea 10',
			economy: 'stateEconomy 10',
			attractions: 'stateAttractions 10',
			specialFact: 'stateFacts 10',
		},
		{
			id: '11',
			imageUrl: 'emblem/rhineland-palatinate.webp',
			name: 'state 11',
			capital: 'stateCapital 11',
			population: 'statePopulation 11',
			area: 'stateArea 11',
			economy: 'stateEconomy 11',
			attractions: 'stateAttractions 11',
			specialFact: 'stateFacts 11',
		},
		{
			id: '12',
			imageUrl: 'emblem/saarlands.webp',
			name: 'state 12',
			capital: 'stateCapital 12',
			population: 'statePopulation 12',
			area: 'stateArea 12',
			economy: 'stateEconomy 12',
			attractions: 'stateAttractions 12',
			specialFact: 'stateFacts 12',
		},
		{
			id: '13',
			imageUrl: 'emblem/saxony.webp',
			name: 'state 13',
			capital: 'stateCapital 13',
			population: 'statePopulation 13',
			area: 'stateArea 13',
			economy: 'stateEconomy 13',
			attractions: 'stateAttractions 13',
			specialFact: 'stateFacts 13',
		},
		{
			id: '14',
			imageUrl: 'emblem/sachsen-anhalt.webp',
			name: 'state 14',
			capital: 'stateCapital 14',
			population: 'statePopulation 14',
			area: 'stateArea 14',
			economy: 'stateEconomy 14',
			attractions: 'stateAttractions 14',
			specialFact: 'stateFacts 14',
		},
		{
			id: '15',
			imageUrl: 'emblem/schleswig-holstein.webp',
			name: 'state 15',
			capital: 'stateCapital 15',
			population: 'statePopulation 15',
			area: 'stateArea 15',
			economy: 'stateEconomy 15',
			attractions: 'stateAttractions 15',
			specialFact: 'stateFacts 15',
		},
		{
			id: '16',
			imageUrl: 'emblem/thuringia.webp',
			name: 'state 16',
			capital: 'stateCapital 16',
			population: 'statePopulation 16',
			area: 'stateArea 16',
			economy: 'stateEconomy 16',
			attractions: 'stateAttractions 16',
			specialFact: 'stateFacts 16',
		},
	];

	const { t } = useTranslation();

	return (
		<div className={styles.mainContainer}>
			<h1 className={styles.titleMain}>{t('statesTitle')}</h1>
			<div className={styles.mediaContainer}>
				<div className={styles.textBlock}>
					<p className={styles.newsTitle}>{t('stateParagraph1')} </p>
					<p className={styles.newsTitle}>{t('stateParagraph2')} </p>
					<p className={styles.newsSubtitle}>{t('stateParagraph3')} </p>
				</div>
				<div className={styles.imageBlock}>
					<img src="/emblem/Germany.webp" alt="Germany map" className={styles.newsImage} />
				</div>
			</div>

			<div className={styles.mainContent}>
				{statesItems.map((item) => (
					<div key={item.id} className={styles.stateCard}>
						<div className={styles.blogContainer}>
							<div className={styles.cardHeader}>
								<img src={item.imageUrl} alt={item.name} className={styles.stateImage} />
								<div className={styles.infoContainer}>
									<h3 className={styles.stateName}>{t(item.name)}</h3>
									<h4 className={styles.stateCapital}>{t(item.capital)}</h4>
								</div>
							</div>
							<div className={styles.cardBody}>
								<div className={styles.infoSection}>
									<p className={styles.stateText}>
										<strong className={styles.text}>{t('statePopulation')}: </strong>
										{t(item.population)}
									</p>
									<p className={styles.stateText}>
										<strong className={styles.text}>{t('stateArea')}: </strong>
										{t(item.area)}
									</p>
									<p className={styles.stateText}>
										<strong className={styles.text}>{t('stateEconomy')}: </strong>
										{t(item.economy)}
									</p>
								</div>
								<p className={styles.attractions}>
									<strong className={styles.text}>{t('stateAttractions')}: </strong>
									{t(item.attractions)}
								</p>
								<p className={styles.specialFact}>
									<strong className={styles.text}>{t('stateSpecialFact')}: </strong>
									{t(item.specialFact)}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
export default FederalStates;
