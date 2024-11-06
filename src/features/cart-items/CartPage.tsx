import 'react';
import { useSelector, useDispatch } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import HomeIcon from '@mui/icons-material/Home';
import { clearCart, removeItem } from '../cart-items/cartSlice';
import { RootState } from '../../app/store';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';
import styles from './cartPage.module.css';

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
									<span className={styles.itemName}>
										{item.name} ({item.quantity} {t('pcs')})
									</span>
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
								<div className={styles.extrasBox}>
									{/* Отображение размеров и добавок для пиццы */}
									{item.type === 'pizza' && (
										<>
											{item.size && (
												<div className={styles.sizeExtras}>
													{t('Size')}: {item.size}
												</div>
											)}
											{item.extras && item.extras.length > 0 && (
												<div className={styles.sizeExtras}>
													{t('Extras')}: {item.extras.map((extra) => extra.label).join(', ')}
												</div>
											)}
										</>
									)}

									{/* Отображение ингредиентов для пасты */}
									{item.type === 'pasta' && item.ingredients && item.ingredients.length > 0 && (
										<div className={styles.sizeExtras}>
											{t('Ingredients')}:{' '}
											{item.ingredients.map((ingredient) => ingredient.label).join(', ')}
										</div>
									)}
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
