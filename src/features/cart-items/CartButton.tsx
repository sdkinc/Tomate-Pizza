import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './cartButton.module.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const CartButton: React.FC = () => {
	const items = useSelector((state: RootState) => state.cart.items);
	const navigate = useNavigate();
	const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

	const images = ['/cart-icon1.png', '/cart-icon2.png'];
	const [currentImage, setCurrentImage] = useState(images[0]);
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((prevImage) => {
				const currentIndex = images.indexOf(prevImage);
				const nextIndex = (currentIndex + 1) % images.length;
				return images[nextIndex];
			});
		}, 500);

		return () => clearInterval(interval);
	}, []);

	const toggleVisibility = (): void => {
		setIsVisible(!isVisible);
	};

	return (
		<>
			{isVisible ? (
				<button type="button" onClick={toggleVisibility} className={styles.toggleButton}>
					{/* Иконка закрытия (крестик) */}
					<span className={styles.closeIcon}>✕</span>
				</button>
			) : (
				<button type="button" onClick={toggleVisibility} className={styles.toggleButton}>
					{/* Иконка открытия (стрелка влево) */}
					<KeyboardArrowRightIcon className={styles.rotatedIcon} />
				</button>
			)}

			{isVisible && (
				<button type="button" className={styles.cartButton} onClick={() => navigate('/cart')}>
					<img src={currentImage} alt="Cart" className={styles.cartIcon} />
					<span className={styles.itemCount}>{itemCount}</span>
				</button>
			)}
		</>
	);
};

export default CartButton;
