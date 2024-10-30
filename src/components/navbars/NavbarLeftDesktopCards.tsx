import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './navbarLeftDesktopCards.module.css';

type MenuItem = {
	id: string;
	title: string;
	path: string;
	children: (string | MenuItem | SimpleItem)[];
};

type SimpleItem = {
	title: string;
	path: string;
	id?: string;
	children?: MenuItem[];
};

type NavbarLeftDesktopCardsProps = {
	toggleMenuVisibility: () => void;
};

const NavbarLeftDesktopCards = ({
	toggleMenuVisibility,
}: NavbarLeftDesktopCardsProps): JSX.Element => {
	const location = useLocation();
	const { t } = useTranslation();
	const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

	const toggleExpand = (itemId: string | undefined): void => {
		if (!itemId) {
			return;
		}

		if (activeMenuId === itemId) {
			setActiveMenuId(null);
		} else {
			setActiveMenuId(itemId);
		}
	};

	const menuItems: MenuItem[] = [
		{
			id: 'religiousHolidays',
			title: t('religiousHolidays'),
			path: 'religious-holidays-cards',
			children: [
				{ title: t('christmasCards'), path: 'christmas-cards' },
				{ title: t('threeKingsCards'), path: 'threeKings-cards' },
				{ title: t('maslenitsaCards'), path: 'maslenitsa-cards' },
				{ title: t('easterCards'), path: 'easter-cards' },
				{ title: t('appleSpasCards'), path: 'appleSpas-cards' },
				{ title: t('ramadanCards'), path: 'ramadan-cards' },
				{ title: t('confirmationCards'), path: 'confirmation-cards' },
			],
		},
		{
			id: 'nationalHolidays',
			title: t('nationalHolidays'),
			path: 'national-holidays-cards',
			children: [
				{ title: t('newYearCards'), path: 'new-year-cards' },
				{ title: t('halloweenCards'), path: 'halloween-cards' },
				{ title: t('martinsDayCards'), path: 'martinsDay-cards' },
			],
		},
		{
			id: 'personalCelebrations',
			title: t('personalCelebrations'),
			path: 'personal-celebrations-Cards',
			children: [
				{ title: t('birthdayCards'), path: 'birthday-cards' },
				{ title: t('valentine’sDayCards'), path: 'valentine-cards' },
				{ title: t('birthCards'), path: 'birth-cards' },
				{ title: t('genderRevealCards'), path: 'genderReveal-cards' },
			],
		},
	];

	const renderMenuItem = (item: MenuItem | SimpleItem | string, parentPath = ''): JSX.Element => {
		if (typeof item === 'string') {
			return (
				<Link
					key={`${parentPath}/${item}`}
					to={`${parentPath}/${item}`}
					className={
						location.pathname.includes(`${parentPath}/${item}`) ? styles.activeLink : styles.link
					}
					onClick={toggleMenuVisibility}
				>
					{item}
				</Link>
			);
		}

		const basePath = `${parentPath}/${item.path}`;
		const isMenuItem = 'id' in item && item.id !== undefined;

		if (!isMenuItem) {
			return (
				<Link
					key={basePath}
					to={basePath}
					className={location.pathname.includes(basePath) ? styles.activeLink : styles.link}
					onClick={toggleMenuVisibility}
				>
					{item.title}
				</Link>
			);
		}

		const isExpanded = item.id === activeMenuId;

		return (
			<div key={item.id} className={styles.menuItem}>
				<div
					className={styles.menuItemContent}
					onClick={item.id ? () => toggleExpand(item.id) : undefined}
				>
					<div className={styles.mainMenu}>
						<span className={isExpanded ? `${styles.link} ${styles.activeLink}` : styles.link}>
							{item.title}
						</span>

						<img
							src={`/arrow.webp`}
							alt="Expand"
							className={isExpanded ? styles.arrowUp : styles.arrowDown}
						/>
					</div>
					{isExpanded && item.children && (
						<div className={styles.subMenu}>
							{item.children.map((child) => renderMenuItem(child, basePath))}
						</div>
					)}
				</div>
			</div>
		);
	};

	return (
		<div className={styles.navigationPanel}>
			<div className={styles.navBox}>
				<div>
					<div className={styles.startPage}>
						<Link
							to="/cards"
							className={`${styles.startLink} ${
								location.pathname === '/cards' ? styles.startActiveLink : ''
							}`}
							onClick={toggleMenuVisibility}
						>
							{t('cards')}
						</Link>
					</div>
					{menuItems.map((item) => renderMenuItem(item))}
				</div>
				<div className={styles.calendar}></div>
			</div>
		</div>
	);
};

export default NavbarLeftDesktopCards;
