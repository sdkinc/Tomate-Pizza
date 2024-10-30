// eslint-disable-next-line import/default
import React, { useRef, useState } from 'react';
import styles from './cards.module.css';
import { useTranslation } from 'react-i18next';
import { toPng } from 'html-to-image';
import ClearIcon from '@mui/icons-material/Clear';

const images = [
	{ id: 'easter_variant1', src: '/easter1.webp', alt: 'easter 1' },
	{ id: 'easter_variant2', src: '/easter2.webp', alt: 'easter 2' },
	{ id: 'easter_variant3', src: '/easter3.webp', alt: 'easter 3' },
	{ id: 'easter_variant4', src: '/easter4.webp', alt: 'easter 4' },
	{ id: 'easter_variant5', src: '/easter5.webp', alt: 'easter 5' },
	{ id: 'easter_variant6', src: '/easter6.webp', alt: 'easter 6' },
];

function EasterCards(): JSX.Element {
	const { t } = useTranslation();
	const [recipientName, setRecipientName] = useState('');
	const [recipientGender, setRecipientGender] = useState('');
	const [letterVariant, setLetterVariant] = useState('variant1');
	const [senderName, setSenderName] = useState('');
	const [isAgreed, setIsAgreed] = useState(false);
	const [selectedImage, setSelectedImage] = useState('easter_variant1');
	const [previewLanguage, setPreviewLanguage] = useState('de');
	const previewRef = useRef<HTMLDivElement>(null);

	const availableLanguages = [
		{ code: 'de', name: t('german') },
		{ code: 'en', name: t('english') },
		{ code: 'tr', name: t('turkish') },
		{ code: 'ru', name: t('russian') },
		{ code: 'es', name: t('spanish') },
		{ code: 'uk', name: t('ukrainian') },
	];

	const getGreeting = (name: string, gender: string, language: string): string => {
		if (!gender) return '';
		switch (gender) {
			case 'maleCards':
				return t('dearWithNameMaleCards', { lng: language, name });
			case 'femaleCards':
				return t('dearWithNameFemaleCards', { lng: language, name });
			case 'neutralCards':
				return t('dearWithNamePluralCards', { lng: language, name });
			case 'collegeCards':
				return t('dearCollegeCards', { lng: language, name });
			default:
				return t('dearFriendsCards', { lng: language, name });
		}
	};

	const letters = [
		{
			id: 'variant1',
			title: t('easterTitleCard.variant1'),
			body: [
				<div className={styles.cards} key="variant1-body">
					<p key="variant1-paragraph1">{t('easterCard.variant1.paragraph1')}</p>
					<p key="variant1-paragraph2">{t('easterCard.variant1.paragraph2')}</p>
				</div>,
			],
			signature: t('easterCardSignature.variant1'),
		},
		{
			id: 'variant2',
			title: t('easterTitleCard.variant2'),
			body: [
				<div className={styles.cards} key="variant2-body">
					<p key="variant2-paragraph1">{t('easterCard.variant2.paragraph1')}</p>
					<p key="variant2-paragraph2">{t('easterCard.variant2.paragraph2')}</p>
				</div>,
			],
			signature: t('easterCardSignature.variant2'),
		},
		{
			id: 'variant3',
			title: t('easterTitleCard.variant3'),
			body: [
				<div className={styles.cards} key="variant3-body">
					<p key="variant3-paragraph1">{t('easterCard.variant3.paragraph1')}</p>
					<p key="variant3-paragraph2">{t('easterCard.variant3.paragraph2')}</p>
				</div>,
			],
			signature: t('easterCardSignature.variant3'),
		},
	];

	const handleSaveAsImage = (): void => {
		if (previewRef.current) {
			toPng(previewRef.current as HTMLElement)
				.then((dataUrl: string) => {
					const link = document.createElement('a');
					link.download = 'easterCard.png';
					link.href = dataUrl;
					link.click();
				})
				.catch((error: Error) => {
					console.error('Could not generate image', error);
				});
		}
	};

	return (
		<div className={styles.cardsBox}>
			<h1 className={styles.titlePage}>{t('easterCardsTitle')}</h1>
			<p className={styles.subtitlePage}>{t('easterCardsSubtitle')}</p>
			<div className={styles.mainContainer}>
				<div className={styles.topContainer}>
					<div className={styles.leftContainer}>
						<p className={styles.titleLetter}>{t('letterVariants')}</p>
						{letters.map((letter) => (
							<div
								key={letter.id}
								className={`${styles.letterOption} ${letterVariant === letter.id ? styles.selected : ''}`}
								onClick={() => setLetterVariant(letter.id)}
							>
								<h3>{letter.title}</h3>
								<p>{letter.body}</p>
							</div>
						))}
						<div className={styles.inputBox}>
							<div className={styles.nameBox}>
								<select
									id="recipientGender"
									className={styles.genderBox}
									value={recipientGender}
									onChange={(e) => setRecipientGender(e.target.value)}
									aria-label={t('selectGenderLabel')}
								>
									<option value="">{t('selectGender')}</option>
									<option value="maleCards">{t('maleCards')}</option>
									<option value="femaleCards">{t('femaleCards')}</option>
									<option value="neutralCards">{t('neutralCards')}</option>
									<option value="collegeCards">{t('collegeCards')}</option>
									<option value="friendsCards">{t('friendsCards')}</option>
								</select>

								<div className={styles.inputBlockRecipientName}>
									<input
										id="recipientName"
										className={styles.name}
										type="text"
										value={recipientName}
										onChange={(e) => setRecipientName(e.target.value)}
										required
										aria-label={t('recipientNamePlaceholder')}
									/>
									{recipientName && (
										<button
											type="button"
											className={styles.clearButton}
											onClick={() => {
												setRecipientName('');
												setRecipientGender('');
											}}
											aria-label={t('clearRecipientName')}
										>
											<ClearIcon style={{ fontSize: 20 }} />
										</button>
									)}
									<label
										className={`${styles.placeholder} ${recipientName && styles.filledPlaceholder}`}
									>
										{t('recipientNamePlaceholder')}
									</label>
								</div>
							</div>

							<div className={styles.nameBox}>
								<div className={styles.inputBlock}>
									<input
										id="senderName"
										className={styles.name}
										type="text"
										value={senderName}
										onChange={(e) => setSenderName(e.target.value)}
										required
										aria-label={t('senderNamePlaceholder')}
									/>
									{senderName && (
										<button
											type="button"
											className={styles.clearButton}
											onClick={() => {
												setSenderName('');
											}}
											aria-label={t('clearSenderName')}
										>
											<ClearIcon style={{ fontSize: 20 }} />
										</button>
									)}
									<label
										className={`${styles.placeholder} ${senderName && styles.filledPlaceholder}`}
									>
										{t('senderNamePlaceholder')}
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.rightContainer}>
						<p className={styles.titleLetter}>{t('imageVariants')}</p>
						<div className={styles.imageOptions}>
							{images.map((image) => (
								<label key={image.id}>
									<input
										type="radio"
										value={image.id}
										checked={selectedImage === image.id}
										onChange={() => setSelectedImage(image.id)}
									/>
									<img src={image.src} alt={image.alt} className={styles.imagePreview} />
								</label>
							))}
						</div>
					</div>
				</div>
				<div className={styles.bottomContainer}>
					<div className={styles.previewContainer} ref={previewRef}>
						<div className={styles.letter}>
							<p className={styles.titleLetter}>
								{t(`easterTitleCard.${letterVariant}`, { lng: previewLanguage })}
							</p>

							{recipientGender && (
								<p className={styles.textContainer}>
									{getGreeting(
										recipientName || t('defaultRecipientName', { lng: previewLanguage }),
										recipientGender,
										previewLanguage
									)}
								</p>
							)}

							<div className={styles.textContainer}>
								{t(`easterCard.${letterVariant}.paragraph1`, {
									lng: previewLanguage,
									name: recipientName || t('defaultRecipientName', { lng: previewLanguage }),
								})}
							</div>
							<div className={styles.textContainerP2}>
								{t(`easterCard.${letterVariant}.paragraph2`, {
									lng: previewLanguage,
								})}
							</div>
							<div className={styles.textContainer}>
								<br />
								{senderName && (
									<>
										<span className={styles.signature}>
											{t(`easterCardSignature.${letterVariant}`, { lng: previewLanguage })}
										</span>
										<br />
										<span className={styles.signatureLine}>
											{senderName || t('defaultEasterCardSenderName', { lng: previewLanguage })}
										</span>
									</>
								)}
							</div>
						</div>
						<img
							src={images.find((image) => image.id === selectedImage)?.src}
							alt="Selected"
							className={styles.previewImage}
						/>
					</div>
				</div>

				<div className={styles.buttonContainer}>
					<select
						id="languageSelect"
						className={styles.languageSelect}
						value={previewLanguage}
						onChange={(e) => setPreviewLanguage(e.target.value)}
						aria-label={t('selectLanguageLabel')}
					>
						{availableLanguages.map((lang) => (
							<option key={lang.code} value={lang.code}>
								{lang.name}
							</option>
						))}
					</select>
				</div>

				<div className={styles.checkboxContainer}>
					<input
						type="checkbox"
						id="agreementCheckbox"
						className={styles.checkbox}
						checked={isAgreed}
						onChange={(e) => setIsAgreed(e.target.checked)}
					/>
					<label htmlFor="agreementCheckbox">{t('agreeToTerms')}</label>
				</div>
				<div className={styles.buttonDownload}>
					<button
						type="button"
						onClick={handleSaveAsImage}
						disabled={!isAgreed}
						className={isAgreed ? styles.downloadLink : styles.downloadLinkDisabled}
						aria-label={t('buttonDownloadImage')}
					>
						{t('buttonDownloadImage')}
					</button>
				</div>
				<div className={styles.paragraphBox}>
					<p className={styles.title}>{t('easterTitleParagraph')}</p>
					<p className={styles.paragraphSubtitle}>{t('easterSubtitle')}</p>

					{Array.from({ length: 9 }, (_, i) => (
						<React.Fragment key={i}>
							<p className={styles.titleParagraph}>{t(`easterTextTitleParagraph${i + 2}`)}</p>
							<p className={styles.paragraphs}>{t(`easterTextParagraph${i + 2}`)}</p>
						</React.Fragment>
					))}

					<p className={styles.paragraph}>{t('easterTextParagraph11')}</p>
					<p
						className={styles.paragraphLast}
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					>
						{t('easterTextParagraph12')}
					</p>
				</div>
			</div>
		</div>
	);
}

export default EasterCards;
