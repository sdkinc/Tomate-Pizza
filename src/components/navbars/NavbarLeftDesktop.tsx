import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './navbarLeftDesktop.module.css';

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

type NavbarLeftDesktopProps = {
	toggleMenuVisibility: () => void;
};

const NavbarLeftDesktop = ({ toggleMenuVisibility }: NavbarLeftDesktopProps): JSX.Element => {
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
			id: 'schoolLetters',
			title: t('schoolLetters'),
			path: 'school-letters',
			children: [
				{ title: t('forIllness'), path: 'apology-for-one-day' },
				{ title: t('absence3days'), path: 'apology-for-a-period' },
				{ title: t('forDoctorVisit'), path: 'doctor-visit' },
				{ title: t('fromPhysicalEducation'), path: 'physical-education' },
				{ title: t('fromSwimmingLessons'), path: 'swimming-lessons' },
			],
		},
		{
			id: 'employees',
			title: t('employees'),
			path: 'employees',
			children: [
				{ title: t('forWorkAbsence'), path: 'work-absence' },
				{ title: t('vacationRequest'), path: 'vacation-request' },
			],
		},
		{
			id: 'businessLetters',
			title: t('businessLetters'),
			path: 'businessLetters',
			children: [
				{ title: t('thankForSupport'), path: 'thank-support' },
				{ title: t('invitationEvent'), path: 'invitation-event' },
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
							to="/letters"
							className={`${styles.startLink} ${location.pathname === '/letters' ? styles.startActiveLink : ''}`}
							onClick={toggleMenuVisibility}
						>
							{t('createLetters')}
						</Link>
					</div>
					{menuItems.map((item) => renderMenuItem(item))}
				</div>
			</div>
		</div>
	);
};

export default NavbarLeftDesktop;
