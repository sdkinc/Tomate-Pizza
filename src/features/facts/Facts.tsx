import 'react';
import styles from './facts.module.css';
import { useTranslation } from 'react-i18next';
import FactsType from './FactsType';

const getRandomFontSizeClass = (): string => {
	const fontSizeClasses = ['font-size-1', 'font-size-2', 'font-size-3'];
	return fontSizeClasses[Math.floor(Math.random() * fontSizeClasses.length)];
};

const getRandomFontStyleClass = (): string => {
	const fontStyleClasses = ['font-style-normal', 'font-style-italic', 'font-style-bold'];
	return fontStyleClasses[Math.floor(Math.random() * fontStyleClasses.length)];
};

const getBorderColorClass = (index: number): string => {
	const borderColorClasses = [
		'border-color-1',
		'border-color-2',
		'border-color-3',
		'border-color-4',
		'border-color-5',
	];
	return borderColorClasses[index % borderColorClasses.length];
};

const shuffleArray = <T,>(array: T[]): T[] => {
	return array
		.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);
};

function Facts(): JSX.Element {
	const { t } = useTranslation();

	const factsData: FactsType[] = [
		{
			id: '1',
			sentence: 'fact1Sentence',
		},
		{
			id: '2',
			sentence: 'fact2Sentence',
		},
		{
			id: '3',
			sentence: 'fact3Sentence',
		},
		{
			id: '4',
			sentence: 'fact4Sentence',
		},
		{
			id: '5',
			sentence: 'fact5Sentence',
		},
		{
			id: '6',
			sentence: 'fact6Sentence',
		},
		{
			id: '7',
			sentence: 'fact7Sentence',
		},
		{
			id: '8',
			sentence: 'fact8Sentence',
		},
		{
			id: '9',
			sentence: 'fact9Sentence',
		},
		{
			id: '10',
			sentence: 'fact10Sentence',
		},
		{
			id: '11',
			sentence: 'fact11Sentence',
		},
		{
			id: '12',
			sentence: 'fact12Sentence',
		},
		{
			id: '13',
			sentence: 'fact13Sentence',
		},
		{
			id: '14',
			sentence: 'fact14Sentence',
		},
		{
			id: '15',
			sentence: 'fact15Sentence',
		},
		{
			id: '16',
			sentence: 'fact16Sentence',
		},
		{
			id: '17',
			sentence: 'fact17Sentence',
		},
		{
			id: '18',
			sentence: 'fact18Sentence',
		},
		{
			id: '19',
			sentence: 'fact19Sentence',
		},
		{
			id: '20',
			sentence: 'fact20Sentence',
		},
		{
			id: '21',
			sentence: 'fact21Sentence',
		},
		{
			id: '22',
			sentence: 'fact22Sentence',
		},
		{
			id: '23',
			sentence: 'fact23Sentence',
		},
		{
			id: '24',
			sentence: 'fact24Sentence',
		},
		{
			id: '25',
			sentence: 'fact25Sentence',
		},
		{
			id: '26',
			sentence: 'fact26Sentence',
		},
	];

	const shuffledFacts = shuffleArray(factsData);

	return (
		<div className={styles.box}>
			<h3 className={styles.title}>{t('doYouKnowThat')}</h3>
			<div className={styles.container}>
				{shuffledFacts.map((fact, index) => {
					const borderColorClass = getBorderColorClass(index);
					const fontSizeClass = getRandomFontSizeClass();
					const fontStyleClass = getRandomFontStyleClass();
					return (
						<div
							key={fact.id}
							className={`${styles.fact} ${styles[fontSizeClass]} ${styles[fontStyleClass]} ${styles[borderColorClass]}`}
						>
							<p>{t(fact.sentence)}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Facts;
