// CartPage.tsx
import 'react';
import { useSelector, useDispatch } from 'react-redux';

import { clearCart } from '../cart-items/cartSlice';
import styles from './cartPage.module.css';
import { RootState } from '../../app/store';

const CartPage: React.FC = () => {
	const items = useSelector((state: RootState) => state.cart.items);
	const dispatch = useDispatch();

	const calculateTotal = (): number => items.reduce((sum, item) => sum + item.price, 0);

	return (
		<div className={styles.cartContainer}>
			<h1 className={styles.cartTitle}>Мой список</h1>
			<ul className={styles.itemsList}>
				{items.map((item) => (
					<li key={item.id} className={styles.item}>
						<div className={styles.itemDetails}>
							<span className={styles.itemName}>
								{item.name} ({item.quantity} шт.)
							</span>
							<span className={styles.itemPrice}>{item.price.toFixed(2)} €</span>
						</div>
						{item.type === 'pizza' && item.size && (
							<div className={styles.sizeExtras}>Размер: {item.size}</div>
						)}
						{item.type === 'pizza' && item.extras && (
							<div className={styles.sizeExtras}>
								Добавки: {item.extras.map((extra) => extra.label).join(', ')}
							</div>
						)}
					</li>
				))}
			</ul>
			<p className={styles.totalPrice}>Общая сумма: {calculateTotal().toFixed(2)} €</p>
			<button onClick={() => dispatch(clearCart())} className={styles.clearButton}>
				Очистить список
			</button>
		</div>
	);
};

export default CartPage;
