import { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import styles from './menuTabs.module.css';

interface MenuTabsProps {
	setSelectedMenu: (menu: string) => void;
}

const MenuTabs: React.FC<MenuTabsProps> = ({ setSelectedMenu }) => {
	const { t } = useTranslation();
	const tabContainerRef = useRef<HTMLDivElement>(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);
	const [activeMenu, setActiveMenu] = useState('Pizza'); // Устанавливаем "Pizza" активным по умолчанию

	useEffect(() => {
		setSelectedMenu('Pizza');
	}, [setSelectedMenu]);

	const scroll = (direction: 'left' | 'right'): void => {
		if (tabContainerRef.current) {
			const scrollAmount = 250;
			tabContainerRef.current.scrollBy({
				left: direction === 'left' ? -scrollAmount : scrollAmount,
				behavior: 'smooth',
			});
		}
	};

	const handleMouseDown = (e: React.MouseEvent): void => {
		if (tabContainerRef.current) {
			setIsDragging(true);
			setStartX(e.pageX - tabContainerRef.current.offsetLeft);
			setScrollLeft(tabContainerRef.current.scrollLeft);
		}
	};

	const handleMouseMove = (e: React.MouseEvent): void => {
		if (!isDragging || !tabContainerRef.current) return;
		const x = e.pageX - tabContainerRef.current.offsetLeft;
		const walk = (x - startX) * 1.5;
		tabContainerRef.current.scrollLeft = scrollLeft - walk;
	};

	const handleMouseUpOrLeave = (): void => {
		setIsDragging(false);
	};

	const handleTabClick = (menu: string): void => {
		setSelectedMenu(menu);
		setActiveMenu(menu);
	};

	return (
		<div className={styles.tabContainerWrapper}>
			<button
				type="button"
				className={`${styles.scrollButton} ${styles.left}`}
				onClick={() => scroll('left')}
				aria-label="Scroll left"
			>
				<ArrowLeftIcon fontSize="inherit" />
			</button>
			<div
				className={styles.tabContainer}
				ref={tabContainerRef}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUpOrLeave}
				onMouseLeave={handleMouseUpOrLeave}
			>
				<div
					className={`${styles.tab} ${activeMenu === 'Appetizers' ? styles.activeTab : ''}`}
					onClick={() => handleTabClick('Appetizers')}
				>
					{t('Appetizers')}
				</div>

				<div
					className={`${styles.tab} ${activeMenu === 'Salads' ? styles.activeTab : ''}`}
					onClick={() => handleTabClick('Salads')}
				>
					{t('Salads')}
				</div>
				<div
					className={`${styles.tab} ${activeMenu === 'Breadsticks' ? styles.activeTab : ''}`}
					onClick={() => handleTabClick('Breadsticks')}
				>
					{t('Breadsticks')}
				</div>
				<div
					className={`${styles.tab} ${activeMenu === 'Pizza' ? styles.activeTab : ''}`}
					onClick={() => handleTabClick('Pizza')}
				>
					{t('Pizza')}
				</div>
				<div
					className={`${styles.tab} ${activeMenu === 'Custom Pizza' ? styles.activeTab : ''}`}
					onClick={() => handleTabClick('Custom Pizza')}
				>
					{t('Custom Pizza')}
				</div>
				<div
					className={`${styles.tab} ${activeMenu === 'Calzone' ? styles.activeTab : ''}`}
					onClick={() => handleTabClick('Calzone')}
				>
					{t('Calzone')}
				</div>
				<div
					className={`${styles.tab} ${activeMenu === 'Pasta' ? styles.activeTab : ''}`}
					onClick={() => handleTabClick('Pasta')}
				>
					{t('Pasta')}
				</div>
				<div
					className={`${styles.tab} ${activeMenu === 'Meat Dishes' ? styles.activeTab : ''}`}
					onClick={() => handleTabClick('Meat Dishes')}
				>
					{t('Meat Dishes')}
				</div>
				<div
					className={`${styles.tab} ${activeMenu === 'Burgers & Baguettes' ? styles.activeTab : ''}`}
					onClick={() => handleTabClick('Burgers & Baguettes')}
				>
					{t('Burgers & Baguettes')}
				</div>
				<div
					className={`${styles.tab} ${activeMenu === 'American Diner' ? styles.activeTab : ''}`}
					onClick={() => handleTabClick('American Diner')}
				>
					{t('American Diner')}
				</div>
				<div
					className={`${styles.tab} ${activeMenu === 'French Fries' ? styles.activeTab : ''}`}
					onClick={() => handleTabClick('French Fries')}
				>
					{t('French Fries')}
				</div>
				<div
					className={`${styles.tab} ${activeMenu === 'Desserts' ? styles.activeTab : ''}`}
					onClick={() => handleTabClick('Desserts')}
				>
					{t('Desserts')}
				</div>
				<div
					className={`${styles.tab} ${activeMenu === 'Ice Cream' ? styles.activeTab : ''}`}
					onClick={() => handleTabClick('Ice Cream')}
				>
					{t('Ice Cream')}
				</div>
				<div
					className={`${styles.tab} ${activeMenu === 'Non-Alcoholic Drinks' ? styles.activeTab : ''}`}
					onClick={() => handleTabClick('Non-Alcoholic Drinks')}
				>
					{t('Non-Alcoholic Drinks')}
				</div>
				<div
					className={`${styles.tab} ${activeMenu === 'Alcoholic Drinks' ? styles.activeTab : ''}`}
					onClick={() => handleTabClick('Alcoholic Drinks')}
				>
					{t('Alcoholic Drinks')}
				</div>
			</div>
			<button
				type="button"
				className={`${styles.scrollButton} ${styles.right}`}
				onClick={() => scroll('right')}
				aria-label="Scroll right"
			>
				<ArrowRightIcon fontSize="inherit" />
			</button>
		</div>
	);
};

export default MenuTabs;
