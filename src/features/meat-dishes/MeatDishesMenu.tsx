import 'react';
import { useTranslation } from 'react-i18next';
import meatDishesData from './MeatDishesData';
import styles from '../pasta-items/pastaMenu.module.css';
import MeatDishesItem from './MeatDishesItem';

const MeatDishesMenu: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.pageContainer}>
			{meatDishesData.map((meatDishes) => (
				<MeatDishesItem
					key={meatDishes.name}
					name={t(meatDishes.name)}
					description={t(meatDishes.description)}
					image={meatDishes.image}
					price={meatDishes.price}
					productInfo={meatDishes.productInfo}
				/>
			))}
		</div>
	);
};
export default MeatDishesMenu;
