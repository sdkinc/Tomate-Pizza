import 'react';
import styles from './mainMenu.module.css';
import MenuType from './MenuType';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function MainMenu(): JSX.Element {
	const mainMenu: MenuType[] = [
		{
			id: '1',
			title: 'title button 1',
			subtitle: 'subtitle button 1',
			link: '/CVEditor',
			imageUrl: '/cv_icon.webp',
		},
		{
			id: '2',
			title: 'title button 2',
			subtitle: 'subtitle button 2',
			link: '/termination',
			imageUrl: '/termination_icon.webp',
		},
		{
			id: '3',
			title: 'title button 3',
			subtitle: 'subtitle button 3',
			link: '/letters',
			imageUrl: '/letter_icon.webp',
		},
		{
			id: '4',
			title: 'title button 4',
			subtitle: 'subtitle button 4',
			link: '/cards',
			imageUrl: '/cards_icon.webp',
		},
		{
			id: '5',
			title: 'title button 5',
			subtitle: 'subtitle button 5',
			link: '/blog',
			imageUrl: '/blog_icon.webp',
		},
		{
			id: '6',
			title: 'title button 6',
			subtitle: 'subtitle button 6',
			link: '/guide',
			imageUrl: '/guide_icon.webp',
		},
	];

	const { t } = useTranslation();
	const getBorderColorClass = (index: number): string => {
		const borderColorClasses = [
			'border-color-1',
			'border-color-2',
			'border-color-3',
			'border-color-4',
			'border-color-5',
			'border-color-6',
		];
		return borderColorClasses[index % borderColorClasses.length];
	};

	return (
		<div className={styles.mainContent}>
			<h4 className={styles.sideTitle}>{t('ourServices')}</h4>
			{mainMenu.map((item, index) => (
				<div key={item.id} className={styles.blog}>
					<Link to={item.link} className={styles.blogContainerLink}>
						<div className={styles.blogContainer}>
							<div className={`${styles.secondaryBlock} ${styles[getBorderColorClass(index)]}`}>
								<div className={styles.mediaBlock}>
									<div className={styles.mediaContainer}>
										<img
											src={item.imageUrl}
											alt={`${t(item.title)} image`}
											className={styles.newsImage}
										/>
									</div>
									<div className={styles.titleBlock}>
										<h3 className={styles.newsTitle}>{t(item.title)}</h3>
										<h4 className={styles.newsSubtitle}>{t(item.subtitle)}</h4>
										<div className={styles.linkBox}>
											<span className={styles.newsLink}>{t('moreDetails')}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
}
export default MainMenu;
