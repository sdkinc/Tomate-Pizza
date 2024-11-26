import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from '../pizza-items/pizzaItem.module.css';
import { ExtraIngredient, PizzaSize } from '../pizza-items/type/PizzaTypes';
import ProductInfoModal from '../pizza-items/ProductInfoModal';
import WunschPizzaModal from './WunschPizzaModal';
import { ProductInfo } from './type/WunschPizzaTypes';
import freeIngredients from './FreeIngredients';

interface WunschPizzaItemProps {
	name: string;
	description: string;
	image: string;
	sizes: PizzaSize[];
	extras: ExtraIngredient[];
	productInfo?: ProductInfo;
	freeIngredientsLimit?: number;
}

const WunschPizzaItem: React.FC<WunschPizzaItemProps> = ({
	name,
	description,
	image,
	sizes,
	extras,
	productInfo,
	freeIngredientsLimit = 3,
}) => {
	const { t } = useTranslation();
	const [isWunschPizzaModalOpen, setIsWunschPizzaModalOpen] = useState(false);
	const [isProductInfoModalOpen, setIsProductInfoModalOpen] = useState(false);

	const openWunschPizzaModal = (): void => setIsWunschPizzaModalOpen(true);
	const closeWunschPizzaModal = (): void => setIsWunschPizzaModalOpen(false);

	const openProductInfoModal = (): void => setIsProductInfoModalOpen(true);
	const closeProductInfoModal = (): void => setIsProductInfoModalOpen(false);

	return (
		<div
			className={styles.pizzaItem}
			onClick={() => {
				if (!isProductInfoModalOpen) {
					openWunschPizzaModal();
				}
			}}
		>
			<img src={image} alt={name} className={styles.pizzaImage} />

			<div className={styles.pizzaContent}>
				<div className={styles.topContainer}>
					<div className={styles.pizzaHeader}>
						<div className={styles.pizzaNameInfo}>
							<div className={styles.pizzaName}>{t(name)}</div>
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
					<p className={styles.pizzaDescription}>{t(description)}</p>
				</div>
				<div className={styles.pizzaActions}>
					<button type="button" className={styles.viewButton} aria-label={t('View custom pizza')}>
						<VisibilityIcon fontSize="medium" />
					</button>
				</div>
			</div>

			{isWunschPizzaModalOpen && !isProductInfoModalOpen && (
				<WunschPizzaModal
					name={name}
					description={description}
					sizes={sizes}
					extras={extras}
					freeIngredients={freeIngredients}
					freeIngredientsLimit={freeIngredientsLimit}
					onClose={closeWunschPizzaModal}
					image={image}
				/>
			)}

			{isProductInfoModalOpen && productInfo && (
				<ProductInfoModal
					isOpen={isProductInfoModalOpen}
					onClose={() => {
						closeProductInfoModal();
						setIsWunschPizzaModalOpen(false);
					}}
					productInfo={productInfo}
				/>
			)}
		</div>
	);
};

export default WunschPizzaItem;
