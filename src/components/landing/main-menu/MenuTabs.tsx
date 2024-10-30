import 'react';
import styles from './menuTabs.module.css';

interface MenuTabsProps {
	setSelectedMenu: (menu: string) => void;
}

const MenuTabs: React.FC<MenuTabsProps> = ({ setSelectedMenu }) => {
	return (
		<div className={styles.tabContainer}>
			<div className={`${styles.tab} ${styles.activeTab}`} onClick={() => setSelectedMenu('Pizza')}>
				Pizza
			</div>
			<div className={styles.tab} onClick={() => setSelectedMenu('Pasta')}>
				Pasta
			</div>
			<div className={styles.tab} onClick={() => setSelectedMenu('Burger')}>
				Burger
			</div>
			<div className={styles.tab} onClick={() => setSelectedMenu('Salad')}>
				Salad
			</div>
			<div className={styles.tab} onClick={() => setSelectedMenu('Getränke')}>
				Getränke
			</div>
		</div>
	);
};

export default MenuTabs;
