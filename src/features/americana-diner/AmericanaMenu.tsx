import 'react';
import { useTranslation } from 'react-i18next';
import americanaData from './AmericanaData';
import styles from '../pasta-items/pastaMenu.module.css';
import AmericanaItem from './AmericanaItem';

const AmericanMenu: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.pageContainer}>
			{americanaData.map((americana) => (
				<AmericanaItem
					key={americana.name}
					name={t(americana.name)}
					description={t(americana.description)}
					image={americana.image}
					price={americana.price}
					productInfo={americana.productInfo}
				/>
			))}
		</div>
	);
};
export default AmericanMenu;
