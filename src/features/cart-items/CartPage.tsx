import 'react';
import { useSelector, useDispatch } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import HomeIcon from '@mui/icons-material/Home';
import { clearCart, removeItem, updateQuantity } from '../cart-items/cartSlice'; // Импорт нового действия updateQuantity
import { RootState } from '../../app/store';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';
import styles from './cartPage.module.css';
import CalzoneCartItem from './CalzoneCartItem';
import PastaCartItem from './PastaCartItem';
import PizzaCartItem from './PizzaCartItem';
import WunschPizzaCartItem from './WunschPizzaCartItem';
import StartersCartItem from './StartersCartItem';
import SaladsCartItem from './SaladsCartItem';
import BreadsticksCartItem from './BreadsticksCartItem';
import MeatDishesCartItem from './MeatDishesCartItem';
import FrenchFriesCartItem from './FrenchFriesCartItem';
import BurgerCartItem from './BurgerCartItem';

const CartPage: React.FC = () => {
	const items = useSelector((state: RootState) => state.cart.items);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// Функция для подсчета общей суммы
	const calculateTotal = (): number =>
		items.reduce((sum, item) => sum + item.price * item.quantity, 0);

	// Функция для рендеринга компонента на основе типа товара
	const renderCartItem = (item: (typeof items)[number]): JSX.Element | null => {
		switch (item.type) {
			case 'pizza':
				return (
					<PizzaCartItem
						name={item.name}
						size={item.size}
						extras={item.extras}
						quantity={item.quantity}
					/>
				);
			case 'calzone':
				return (
					<CalzoneCartItem
						name={item.name}
						size={item.size}
						extras={item.extrasCalzone}
						quantity={item.quantity}
					/>
				);
			case 'wunschpizza':
				return (
					<WunschPizzaCartItem
						name={item.name}
						size={item.size}
						extras={item.extras}
						freeIngredients={item.freeIngredients}
						quantity={item.quantity}
					/>
				);
			case 'pasta':
				return (
					<PastaCartItem name={item.name} ingredients={item.ingredients} quantity={item.quantity} />
				);
			case 'starters':
				return <StartersCartItem name={item.name} quantity={item.quantity} />;
			case 'breadsticks':
				return <BreadsticksCartItem name={item.name} quantity={item.quantity} />;
			case 'meatDishes':
				return <MeatDishesCartItem name={item.name} quantity={item.quantity} />;
			case 'salads':
				return (
					<SaladsCartItem
						name={item.name}
						saladsIngredients={item.saladsIngredients}
						quantity={item.quantity}
					/>
				);
			case 'burgers':
				return <BurgerCartItem name={item.name} quantity={item.quantity} />;
			case 'frenchFries':
				return (
					<FrenchFriesCartItem
						name={item.name}
						size={item.size}
						sauces={item.sauces || []}
						quantity={item.quantity}
					/>
				);
			default:
				return null;
		}
	};

	const handleRemoveItem = (id: string): void => {
		dispatch(removeItem(id));
	};

	const handleIncreaseQuantity = (id: string): void => {
		dispatch(updateQuantity({ id, change: 1 }));
	};

	const handleDecreaseQuantity = (id: string): void => {
		dispatch(updateQuantity({ id, change: -1 }));
	};

	return (
		<div className={styles.cartContainer}>
			<div className={styles.backBox}>
				<button
					type="button"
					onClick={() => navigate('/')}
					className={styles.backButton}
					aria-label={t('Back')}
				>
					<HomeIcon />
				</button>
				<div className={styles.cartTitle}>{t('My List')}</div>
			</div>
			<ul className={styles.itemsList}>
				{items.map((item) => (
					<li key={item.id} className={styles.item}>
						<div className={styles.mainBox}>
							<img src={item.image} alt={item.name} className={styles.itemImage} />
							<div className={styles.itemBox}>
								<div className={styles.itemDetails}>
									{renderCartItem(item)}

									<div className={styles.removeBox}>
										<span className={styles.itemPrice}>
											{(item.price * item.quantity).toFixed(2)} €
										</span>
									</div>
								</div>
								<div className={styles.quantityBox}>
									<div className={styles.quantityControls}>
										<button
											type="button"
											onClick={() => handleDecreaseQuantity(item.id)}
											className={styles.quantityButton}
										>
											-
										</button>
										<span className={styles.quantity}>{item.quantity}</span>
										<button
											type="button"
											onClick={() => handleIncreaseQuantity(item.id)}
											className={styles.quantityButton}
										>
											+
										</button>
									</div>
									<div>
										<button
											type="button"
											className={styles.deleteButton}
											onClick={() => handleRemoveItem(item.id)}
											aria-label={t('Delete item')}
										>
											<DeleteForeverIcon fontSize="small" />
										</button>
									</div>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
			<p className={styles.totalPrice}>
				{t('Total amount')}: {calculateTotal().toFixed(2)} €
			</p>
			<button type="button" onClick={() => dispatch(clearCart())} className={styles.clearButton}>
				{t('Clear list')}
			</button>
		</div>
	);
};

export default CartPage;
