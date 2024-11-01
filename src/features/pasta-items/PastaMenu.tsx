import 'react';
import styles from './pastaMenu.module.css';
import pastasData from './pastas.json';
import PastaItem from './PastaItems';

const PastaMenu: React.FC = () => {
	return (
		<div className={styles.pageContainer}>
			{pastasData.map((pasta) => (
				<PastaItem
					key={pasta.name}
					name={pasta.name}
					description={pasta.description}
					image={pasta.image}
					price={pasta.price}
					ingredients={pasta.ingredients}
					productInfo={pasta.productInfo || undefined}
				/>
			))}
		</div>
	);
};

export default PastaMenu;
