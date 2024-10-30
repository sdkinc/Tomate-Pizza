import 'react';

import styles from './introBanner.module.css';
import MenuTabs from '../main-menu/MenuTabs';

interface IntroBannerProps {
	setSelectedMenu: (menu: string) => void;
}

const IntroBanner: React.FC<IntroBannerProps> = ({ setSelectedMenu }) => {
	return (
		<div className={styles.pageBox}>
			<div className={styles.bannerContainer}>
				<MenuTabs setSelectedMenu={setSelectedMenu} />
			</div>
		</div>
	);
};

export default IntroBanner;
