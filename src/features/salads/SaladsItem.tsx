import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from '../pasta-items/pastaItems.module.css';

import { useTranslation } from 'react-i18next';

import ProductInfoModal from '../pasta-items/ProductInfoModal';
import { ProductInfo, SaladsIngredients } from './type/SaladsType';
import SaladsModal from './SaladsModal';

interface SaladsItemProps {
	name: string;
	description: string;
	image: string;
	price: number;
	saladsIngredients: SaladsIngredients[];
	productInfo?: ProductInfo;
}

const SaladsItem: React.FC<SaladsItemProps> = ({
	name,
	description,
	image,
	price,
	saladsIngredients,
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
		<div
			className={styles.itemBox}
			onClick={() => {
				if (!isProductInfoModalOpen) {
					// Проверка, чтобы открывать только при закрытом ProductInfoModal
					openPastaModal();
				}
			}}
		>
			<img src={image} alt={name} className={styles.itemImage} />
			<div className={styles.itemContent}>
				<div className={styles.topContainer}>
					<div className={styles.itemHeader}>
						<div className={styles.itemNameInfo}>
							<div className={styles.itemName}>{name}</div>

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

			{isPastaModalOpen && !isProductInfoModalOpen && (
				<SaladsModal
					name={name}
					description={description}
					saladsIngredients={saladsIngredients}
					price={price}
					image={image}
					onClose={closePastaModal}
				/>
			)}

			{isProductInfoModalOpen && productInfo && (
				<ProductInfoModal
					isOpen={isProductInfoModalOpen}
					onClose={() => {
						closeProductInfoModal();
						setIsPastaModalOpen(false);
					}}
					productInfo={productInfo}
				/>
			)}
		</div>
	);
};

export default SaladsItem;
