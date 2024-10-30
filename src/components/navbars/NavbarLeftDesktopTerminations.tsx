import { useState } from 'react';
import styles from './navbarLeftDesktopTerminations.module.css';
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';

type MenuItem = {
	id: string;
	title: string;
	path: string;
};

type NavbarLeftDesktopKuendigungsProps = {
	toggleMenuVisibility: () => void; // Пропс для функции закрытия меню
};

function NavbarLeftDesktopKuendigungs({
	toggleMenuVisibility,
}: NavbarLeftDesktopKuendigungsProps): JSX.Element {
	const location = useLocation();
	const { t } = useTranslation();
	const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

	const toggleExpand = (itemId: string): void => {
		if (activeMenuId === itemId) {
			setActiveMenuId(null);
		} else {
			setActiveMenuId(itemId);
		}
	};

	const menuItems: MenuItem[] = [
		{
			id: 'employmentRelationship',
			title: t('employmentRelationship'),
			path: 'employment-relationship-termination',
		},
		{
			id: 'insurance',
			title: t('insurance'),
			path: 'insurance-termination',
		},
		{
			id: 'fitness',
			title: t('gym'),
			path: 'fitness-termination',
		},
		{
			id: 'mobilePhoneContract',
			title: t('mobilePhoneContract'),
			path: 'mobilePhoneContract-termination',
		},
		{
			id: 'apartment',
			title: t('apartment'),
			path: 'apartment-termination',
		},
	];

	const renderMenuItem = (item: MenuItem): JSX.Element => {
		const isExpanded = item.id === activeMenuId || location.pathname.includes(item.path);

		return (
			<div key={item.id} className={styles.menuItem}>
				<div className={styles.menuItemContent} onClick={() => toggleExpand(item.id)}>
					<Link
						to={`/${item.path}`}
						className={isExpanded ? `${styles.link} ${styles.activeLink}` : styles.link}
						onClick={toggleMenuVisibility}
					>
						{item.title}
					</Link>
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
							to="/termination"
							className={`${styles.startLink} ${location.pathname === '/termination' ? styles.startActiveLink : ''}`}
							onClick={toggleMenuVisibility}
						>
							{t('kuendigungsVorlage').toUpperCase()}
						</Link>
					</div>
					{menuItems.map((item) => renderMenuItem(item))}
				</div>
			</div>
		</div>
	);
}

export default NavbarLeftDesktopKuendigungs;
