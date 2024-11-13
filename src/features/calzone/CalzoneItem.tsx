import { useState } from 'react';
import { CalzoneSize, ExtraIngredientCalzone, ProductInfo } from './type/CalzoneTypes';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from '../pizza-items/pizzaItem.module.css';

import ProductInfoModal from '../pizza-items/ProductInfoModal';
import { useTranslation } from 'react-i18next';
import CalzoneModal from './CalzoneModal';

interface CalzoneItemProps {
	name: string;
	description: string;
	image: string;
	sizes: CalzoneSize[];
	extrasCalzone: ExtraIngredientCalzone[];
	productInfo?: ProductInfo;
}

const CalzoneItem: React.FC<CalzoneItemProps> = ({
	name,
	description,
	image,
	sizes,
	extrasCalzone,
	productInfo,
}) => {
	const { t } = useTranslation();
	const [isPizzaModalOpen, setIsPizzaModalOpen] = useState(false);
	const [isProductInfoModalOpen, setIsProductInfoModalOpen] = useState(false);

	const openPizzaModal = (): void => setIsPizzaModalOpen(true);
	const closePizzaModal = (): void => setIsPizzaModalOpen(false);

	const openProductInfoModal = (): void => setIsProductInfoModalOpen(true);
	const closeProductInfoModal = (): void => setIsProductInfoModalOpen(false);

	return (
		<div
			className={styles.pizzaItem}
			onClick={() => {
				if (!isProductInfoModalOpen) {
					// Проверка, чтобы открывать только при закрытом ProductInfoModal
					openPizzaModal();
				}
			}}
		>
			<img src={image} alt={name} className={styles.pizzaImage} />

			<div className={styles.pizzaContent}>
				<div className={styles.topContainer}>
					<div className={styles.pizzaHeader}>
						<div className={styles.pizzaNameInfo}>
							<div className={styles.pizzaName}>{name}</div>
							<button
								type="button"
								className={styles.productInfoButton}
								onClick={(e) => {
									e.stopPropagation();
									openProductInfoModal();
								}}
								aria-label={t('View info')}
							>
								{t('Product info')}
							</button>
						</div>
						<div className={styles.priceBox}>
							<p className={styles.pizzaPrice}>{sizes[0].price} €</p>
						</div>
					</div>
					<p className={styles.pizzaDescription}>{description}</p>
				</div>
				<div className={styles.pizzaActions}>
					<button type="button" className={styles.viewButton} aria-label={t('View pizza')}>
						<VisibilityIcon fontSize="medium" />
					</button>
				</div>
			</div>

			{isPizzaModalOpen && !isProductInfoModalOpen && (
				<CalzoneModal
					name={name}
					description={description}
					sizes={sizes}
					extrasCalzone={extrasCalzone}
					onClose={closePizzaModal}
					image={image}
				/>
			)}

			{isProductInfoModalOpen && productInfo && (
				<ProductInfoModal
					isOpen={isProductInfoModalOpen}
					onClose={() => {
						closeProductInfoModal();
						setIsPizzaModalOpen(false); // Обновление состояния, чтобы исключить автоматическое открытие WunschPizzaModal
					}}
					productInfo={productInfo}
				/>
			)}
		</div>
	);
};

export default CalzoneItem;
