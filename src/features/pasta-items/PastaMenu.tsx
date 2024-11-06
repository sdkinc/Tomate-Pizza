import 'react';
import { useTranslation } from 'react-i18next';
import pastasData from './PastaData';
import PastaItem from './PastaItems';
import styles from './pastaMenu.module.css';
import extraIngredients from './ExtraPastaIngredients';

const PastaMenu: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.pageContainer}>
			{pastasData.map((pasta) => (
				<PastaItem
					key={pasta.name}
					name={t(pasta.name)}
					description={t(pasta.description)}
					image={pasta.image}
					price={pasta.price}
					ingredients={extraIngredients}
					productInfo={pasta.productInfo}
				/>
			))}
		</div>
	);
};

export default PastaMenu;
