import { useRef, useState } from 'react';
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
	const [activeMenu, setActiveMenu] = useState('Pizza'); // Устанавливаем начальное активное меню

	// Список меню
	const menuItems = [
		'Appetizers',
		'Salads',
		'Breadsticks',
		'Pizza',
		'Custom Pizza',
		'Calzone',
		'Pasta',
		'Meat Dishes',
		'Burgers & Baguettes',
		'American Diner',
		'French Fries',
		'Desserts',
		'Ice Cream',
		'Non Alcoholic Drinks',
		'Alcoholic Drinks',
	];

	// Логика прокрутки
	const scroll = (direction: 'left' | 'right'): void => {
		if (tabContainerRef.current) {
			const containerWidth = tabContainerRef.current.clientWidth;
			const scrollAmount = containerWidth * 0.5;
			tabContainerRef.current.scrollBy({
				left: direction === 'left' ? -scrollAmount : scrollAmount,
				behavior: 'smooth',
			});
		}
	};

	// Обработка начала перетаскивания
	const handleMouseDown = (e: React.MouseEvent): void => {
		if (tabContainerRef.current) {
			setIsDragging(true);
			setStartX(e.pageX - tabContainerRef.current.offsetLeft);
			setScrollLeft(tabContainerRef.current.scrollLeft);
		}
	};

	// Перетаскивание
	const handleMouseMove = (e: React.MouseEvent): void => {
		if (!isDragging || !tabContainerRef.current) return;
		const x = e.pageX - tabContainerRef.current.offsetLeft;
		const walk = (x - startX) * 1.5;
		tabContainerRef.current.scrollLeft = scrollLeft - walk;
	};

	// Завершение перетаскивания
	const handleMouseUpOrLeave = (): void => {
		setIsDragging(false);
	};

	// Выбор меню
	const handleTabClick = (menu: string): void => {
		setActiveMenu(menu); // Локально обновляем активное меню
		setSelectedMenu(menu); // Передаём выбранное меню через пропс
	};

	return (
		<div className={styles.tabContainerWrapper}>
			{/* Кнопка прокрутки влево */}
			<button
				type="button"
				className={`${styles.scrollButton} ${styles.left}`}
				onClick={() => scroll('left')}
				aria-label="Scroll left"
			>
				<ArrowLeftIcon fontSize="inherit" />
			</button>

			{/* Контейнер вкладок */}
			<div
				className={styles.tabContainer}
				ref={tabContainerRef}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUpOrLeave}
				onMouseLeave={handleMouseUpOrLeave}
			>
				{/* Отображение вкладок из списка */}
				{menuItems.map((menu) => (
					<div
						key={menu}
						className={`${styles.tab} ${activeMenu === menu ? styles.activeTab : ''}`}
						onClick={() => handleTabClick(menu)}
						data-menu={menu}
					>
						{t(menu)}
					</div>
				))}
			</div>

			{/* Кнопка прокрутки вправо */}
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
