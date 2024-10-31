import 'react';
import pizzasData from './pizzas.json';
import PizzaItem from './PizzaItem';
import styles from './pizzaMenu.module.css';

const PizzaMenu: React.FC = () => {
	return (
		<div className={styles.pageContainer}>
			{pizzasData.map((pizza) => (
				<PizzaItem
					key={pizza.name}
					name={pizza.name}
					description={pizza.description}
					image={pizza.image}
					sizes={pizza.sizes}
					extras={pizza.extras}
				/>
			))}
		</div>
	);
};

export default PizzaMenu;
