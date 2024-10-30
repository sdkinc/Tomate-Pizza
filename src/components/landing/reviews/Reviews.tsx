import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './reviews.module.css';

function Reviews(): JSX.Element {
	const { t, i18n } = useTranslation();
	// Начальный список языков для отзывов
	const initialLanguages = ['de', 'ru', 'tr', 'uk'];
	const [reviewLanguages, setReviewLanguages] = useState(initialLanguages);

	// Функция для изменения языка отдельного отзыва
	const translateReview = (index: number): void => {
		const newLanguages = [...reviewLanguages];
		newLanguages[index] = i18n.language; // Задаем язык, активный в навигационной панели
		setReviewLanguages(newLanguages);
	};

	// Сброс языков отзывов при смене языка интерфейса
	useEffect(() => {
		setReviewLanguages(initialLanguages);
	}, [i18n.language]);

	return (
		<div className={styles.mainContent}>
			<h4 className={styles.sideTitle}>{t('sayAboutUs')}</h4>
			<div className={styles.reviewsBox}>
				<div className={styles.reviewsContainer}>
					{/*Итерация по списку языков и создание блока для каждого отзыва */}
					{initialLanguages.map((lang, index) => (
						<div className={styles.reviewsBlock} key={index}>
							<div className={styles.overlay}>
								<div className={styles[`contextReviewsWrapper${index + 1}`]}>
									<div className={styles.contextReviewsBox}>
										{/* Заголовок отзыва, содержит флаг и имя пользователя */}
										<h3 className={styles.titleReviewsBlock}>
											<img
												src={`/${lang.toUpperCase()}.png`}
												alt={`${lang.toUpperCase()} Flag`}
												className={styles.flagIcon}
											/>
											{/* Имя пользователя, загружаемое из ресурсов перевода */}
											{t(`nameReview${index + 1}`, { lng: reviewLanguages[index] })}
										</h3>
										{/* Текст отзыва, загружаемый из ресурсов перевода */}
										<p className={styles.text}>
											{t(`textReview${index + 1}`, { lng: reviewLanguages[index] })}
										</p>
									</div>
									<button
										type="button"
										onClick={() => translateReview(index)}
										className={styles.translateButton}
									>
										{t('translate')}
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Reviews;
