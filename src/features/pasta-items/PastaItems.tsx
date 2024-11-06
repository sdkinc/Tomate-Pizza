import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from './pastaItems.module.css';
import { Ingredients, ProductInfo } from './type/PastaTypes';
import { useTranslation } from 'react-i18next';
import PastaModal from './PastaModal';
import ProductInfoModal from './ProductInfoModal';

interface PastaItemProps {
	name: string;
	description: string;
	image: string;
	price: number;
	ingredients: Ingredients[];
	productInfo?: ProductInfo;
}

const PastaItem: React.FC<PastaItemProps> = ({
	name,
	description,
	image,
	price,
	ingredients,
	productInfo,
}) => {
	const { t } = useTranslation();
	const [isPastaModalOpen, setIsPastaModalOpen] = useState(false);
	const [isProductInfoModalOpen, setIsProductInfoModalOpen] = useState(false);

	const openPastaModal = (): void => setIsPastaModalOpen(true);
	const closePastaModal = (): void => setIsPastaModalOpen(false);

	const openProductInfoModal = (): void => setIsProductInfoModalOpen(true);
	const closeProductInfoModal = (): void => setIsProductInfoModalOpen(false);

	return (
		<div className={styles.itemBox}>
			<img src={image} alt={name} className={styles.itemImage} />
			<div className={styles.itemContent}>
				<div className={styles.topContainer}>
					<div className={styles.itemHeader}>
						<div className={styles.itemNameInfo}>
							<div className={styles.itemName}>{name}</div>

							<button
								type="button"
								className={styles.productInfoButton}
								onClick={openProductInfoModal}
								aria-label={t('View info')}
							>
								{t('Product info')}
							</button>
						</div>
						<div className={styles.priceContainer}>
							<p className={styles.itemPrice}>{price} €</p>
						</div>
					</div>
					<p className={styles.itemDescription}>{description}</p>
				</div>
				<div className={styles.itemActions}>
					<button
						type="button"
						className={styles.viewButton}
						onClick={openPastaModal}
						aria-label={t('View pasta')}
					>
						<VisibilityIcon fontSize="medium" />
					</button>
				</div>
			</div>

			{isPastaModalOpen && (
				<PastaModal
					name={name}
					description={description}
					ingredients={ingredients}
					price={price}
					image={image}
					onClose={closePastaModal}
				/>
			)}

			{isProductInfoModalOpen && productInfo && (
				<ProductInfoModal
					isOpen={isProductInfoModalOpen}
					onClose={closeProductInfoModal}
					productInfo={productInfo}
				/>
			)}
		</div>
	);
};

export default PastaItem;
