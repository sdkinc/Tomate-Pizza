import 'react';
import { useSelector, useDispatch } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import HomeIcon from '@mui/icons-material/Home';
import { clearCart, removeItem } from '../cart-items/cartSlice';
import { RootState } from '../../app/store';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';
import styles from './cartPage.module.css';
import CalzoneCartItem from './CalzoneCartItem';
import PastaCartItem from './PastaCartItem';
import PizzaCartItem from './PizzaCartItem';
import WunschPizzaCartItem from './WunschPizzaCartItem';
import StartersCartItem from './StartersCartItem'; // Импорт нового компонента
import SaladsCartItem from './SaladsCartItem';

const CartPage: React.FC = () => {
	const items = useSelector((state: RootState) => state.cart.items);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const calculateTotal = (): number =>
		items.reduce((sum, item) => sum + item.price * item.quantity, 0);

	const handleRemoveItem = (id: string): void => {
		dispatch(removeItem(id));
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
									{item.type === 'pizza' && (
										<PizzaCartItem
											name={item.name}
											size={item.size}
											extras={item.extras}
											quantity={item.quantity}
										/>
									)}
									{item.type === 'calzone' && (
										<CalzoneCartItem
											name={item.name}
											size={item.size}
											extras={item.extrasCalzone}
											quantity={item.quantity}
										/>
									)}
									{item.type === 'wunschpizza' && (
										<WunschPizzaCartItem
											name={item.name}
											size={item.size}
											extras={item.extras}
											freeIngredients={item.freeIngredients}
											quantity={item.quantity}
										/>
									)}
									{item.type === 'pasta' && (
										<PastaCartItem
											name={item.name}
											ingredients={item.ingredients}
											quantity={item.quantity}
										/>
									)}
									{item.type === 'starters' && (
										<StartersCartItem name={item.name} quantity={item.quantity} />
									)}
									{item.type === 'salads' && (
										<SaladsCartItem
											name={item.name}
											saladsIngredients={item.ingredients}
											quantity={item.quantity}
										/>
									)}
									<div className={styles.removeBox}>
										<span className={styles.itemPrice}>
											{(item.price * item.quantity).toFixed(2)} €
										</span>
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
