import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from '../pizza-items/pizzaItem.module.css';
import ProductInfoModal from '../pizza-items/ProductInfoModal';
import { useTranslation } from 'react-i18next';
import { ProductInfo } from './type/IceCreamTypes';
import IceCreamModal from './IceCreamModal';

interface IceCreamItemProps {
	name: string;
	description: string;
	image: string;
	price: number;
	productInfo?: ProductInfo;
}

const IceCreamItem: React.FC<IceCreamItemProps> = ({
	name,
	description,
	image,
	price,
	productInfo,
}) => {
	const { t } = useTranslation();
	const [isIceCreamModalOpen, setIsIceCreamModalOpen] = useState(false);
	const [isProductInfoModalOpen, setIsProductInfoModalOpen] = useState(false);

	const openIceCreamModal = (): void => setIsIceCreamModalOpen(true);
	const closeIceCreamModal = (): void => setIsIceCreamModalOpen(false);

	const openProductInfoModal = (): void => setIsProductInfoModalOpen(true);
	const closeProductInfoModal = (): void => setIsProductInfoModalOpen(false);

	return (
		<div
			className={styles.pizzaItem}
			onClick={() => {
				if (!isProductInfoModalOpen) {
					openIceCreamModal();
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
							<p className={styles.pizzaPrice}>{price} €</p>
						</div>
					</div>
					<p className={styles.pizzaDescription}>{description}</p>
				</div>
				<div className={styles.pizzaActions}>
					<button type="button" className={styles.viewButton} aria-label={t('View Ice Cream')}>
						<VisibilityIcon fontSize="medium" />
					</button>
				</div>
			</div>

			{isIceCreamModalOpen && !isProductInfoModalOpen && (
				<IceCreamModal
					name={name}
					description={description}
					price={price}
					image={image}
					onClose={closeIceCreamModal}
				/>
			)}

			{isProductInfoModalOpen && productInfo && (
				<ProductInfoModal
					isOpen={isProductInfoModalOpen}
					onClose={() => {
						closeProductInfoModal();
						setIsIceCreamModalOpen(false);
					}}
					productInfo={productInfo}
				/>
			)}
		</div>
	);
};

export default IceCreamItem;
