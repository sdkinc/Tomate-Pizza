// eslint-disable-next-line import/default
import React, { useRef, useState } from 'react';
import styles from './invitationEventLetters.module.css';
import { useTranslation } from 'react-i18next';
import { toPng } from 'html-to-image';
import ClearIcon from '@mui/icons-material/Clear';

const images = [
	{ id: 'event_variant1', src: '/event1.webp', alt: 'event image 1' },
	{ id: 'event_variant2', src: '/event2.webp', alt: 'event image 2' },
	{ id: 'event_variant4', src: '/event4.webp', alt: 'event image 4' },
	{ id: 'event_variant3', src: '/event3.webp', alt: 'event image 3' },
	{ id: 'event_variant5', src: '/event5.webp', alt: 'event image 5' },
	{ id: 'event_variant6', src: '/event6.webp', alt: 'event image 6' },
	{ id: 'event_variant7', src: '/event7.webp', alt: 'event image 7' },
	{ id: 'event_variant8', src: '/event8.webp', alt: 'event image 8' },
];

function InvitationEventLetters(): JSX.Element {
	const { t } = useTranslation();
	const [recipientName, setRecipientName] = useState('');
	const [recipientGender, setRecipientGender] = useState('');
	const [letterVariant, setLetterVariant] = useState('variant1');
	const [senderName, setSenderName] = useState('');
	const [eventDate, setEventDate] = useState('');
	const [eventTime, setEventTime] = useState('');
	const [eventLocation, setEventLocation] = useState('');
	const [isAgreed, setIsAgreed] = useState(false);
	const [selectedImage, setSelectedImage] = useState('event_variant1');
	const [previewLanguage, setPreviewLanguage] = useState('de');
	const previewRef = useRef<HTMLDivElement>(null);

	const currentDate = new Date().toLocaleDateString('de-DE', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	});
	const defaultDate = t('defaultDate').replace('{{date}}', currentDate);
	const defaultTime = t('defaultEventTime');

	const formatDate = (dateString: string, language: string): string => {
		const options: Intl.DateTimeFormatOptions = {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
		};
		return new Date(dateString).toLocaleDateString(language, options);
	};

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
			default:
				return t('dearFriendsCards', { lng: language, name });
		}
	};

	const letters = [
		{
			id: 'variant1',
			title: t('eventCardTitle.variant1'),
			date: eventDate ? formatDate(eventDate, previewLanguage) : t('defaultEventDate'),
			time: eventTime ? eventTime : defaultTime,
			location: eventLocation ? eventLocation : t('eventCardLocation.variant1'),
			body: [
				<div className={styles.cards} key="variant1-body">
					<div className={styles.pText} key="variant1-paragraph1">
						{t('eventCard.variant1.paragraph1')}
					</div>
				</div>,
			],
			signature: t('eventCardSignature.variant1'),
		},
		{
			id: 'variant2',
			title: t('eventCardTitle.variant2'),
			date: eventDate ? formatDate(eventDate, previewLanguage) : t('defaultEventDate'),
			time: eventTime ? eventTime : defaultTime,
			location: eventLocation ? eventLocation : t('eventCardLocation.variant2'),
			body: [
				<div className={styles.cards} key="variant2-body">
					<div className={styles.pText} key="variant2-paragraph1">
						{t('eventCard.variant2.paragraph1')}
					</div>
				</div>,
			],
			signature: t('eventCardSignature.variant2'),
		},
		{
			id: 'variant3',
			title: t('eventCardTitle.variant3'),
			date: eventDate ? formatDate(eventDate, previewLanguage) : t('defaultEventDate'),
			time: eventTime ? eventTime : defaultTime,
			location: eventLocation ? eventLocation : t('eventCardLocation.variant3'),
			body: [
				<div className={styles.cards} key="variant3-body">
					<div className={styles.pText} key="variant3-paragraph1">
						{t('eventCard.variant3.paragraph1')}
					</div>
				</div>,
			],
			signature: t('eventCardSignature.variant3'),
		},
	];

	const handleSaveAsImage = (): void => {
		if (previewRef.current) {
			toPng(previewRef.current as HTMLElement)
				.then((dataUrl: string) => {
					const link = document.createElement('a');
					link.download = 'eventCard.png';
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
			<h1 className={styles.titlePage}>{t('eventCardsTitle')}</h1>
			<div className={styles.subtitlePage}>{t('eventCardsSubtitle')}</div>
			<div className={styles.mainContainer}>
				<div className={styles.topContainer}>
					<div className={styles.leftContainer}>
						<div className={styles.titleLetter}>{t('letterVariants')}</div>
						{letters.map((letter) => (
							<div
								key={letter.id}
								className={`${styles.letterOption} ${letterVariant === letter.id ? styles.selected : ''}`}
								onClick={() => setLetterVariant(letter.id)}
							>
								<div className={styles.cardBox}>
									<div className={styles.H3Text}>{letter.title}</div>
									<div className={styles.cards}>
										<p>{letter.date}</p>
										<p>{letter.time}</p>
										<p>{letter.location}</p>
									</div>
									<div className={styles.pText}>{letter.body}</div>
								</div>
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
										id="eventDate"
										className={styles.date}
										type="date"
										value={eventDate}
										onChange={(e) => setEventDate(e.target.value)}
										required
										aria-label={t('eventDatePlaceholder')}
									/>
									<span className={styles.placeholderDate}>{t('eventDatePlaceholder')}</span>
								</div>
								<div className={styles.inputBlock}>
									<input
										id="eventTime"
										className={styles.date}
										type="time"
										value={eventTime}
										onChange={(e) => setEventTime(e.target.value)}
										required
										aria-label={t('eventTimePlaceholder')}
									/>
									<span className={styles.placeholderDate}>{t('eventTimePlaceholder')}</span>
								</div>
							</div>
							<div className={styles.nameBox}>
								<div className={styles.inputBlock}>
									<input
										id="eventLocation"
										className={styles.name}
										type="text"
										value={eventLocation}
										onChange={(e) => setEventLocation(e.target.value)}
										required
										aria-label={t('eventLocationPlaceholder')}
									/>
									{eventLocation && (
										<button
											type="button"
											className={styles.clearButton}
											onClick={() => {
												setEventLocation('');
											}}
											aria-label={t('clearRecipientName')}
										>
											<ClearIcon style={{ fontSize: 20 }} />
										</button>
									)}
									<label
										className={`${styles.placeholder} ${eventLocation && styles.filledPlaceholder}`}
									>
										{t('eventLocationPlaceholder')}
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
						<div className={styles.titleLetter}>{t('imageVariants')}</div>
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
							<div className={styles.titleLetter}>
								{t(`eventCardTitle.${letterVariant}`, { lng: previewLanguage })}
							</div>

							{recipientGender && (
								<div className={styles.textContainer}>
									{getGreeting(
										recipientName || t('defaultRecipientName', { lng: previewLanguage }),
										recipientGender,
										previewLanguage
									)}
								</div>
							)}

							<div className={styles.textContainer}>
								<strong>{t('eventDate', { lng: previewLanguage })}:</strong>{' '}
								{eventDate ? formatDate(eventDate, previewLanguage) : defaultDate}
								<br />
								<strong>{t('eventTime', { lng: previewLanguage })}:</strong>{' '}
								{eventTime ? eventTime : t('defaultEventTime', { lng: previewLanguage })}
								<br />
								<strong>{t('eventLocation', { lng: previewLanguage })}:</strong>{' '}
								{eventLocation
									? eventLocation
									: t(`eventCardLocation.${letterVariant}`, { lng: previewLanguage })}
							</div>

							<div className={styles.textContainer}>
								{t(`eventCard.${letterVariant}.paragraph1`, {
									lng: previewLanguage,
									name: recipientName || t('defaultRecipientName', { lng: previewLanguage }),
								})}
							</div>

							<div className={styles.textContainer}>
								<br />
								{senderName && (
									<>
										<span className={styles.signature}>
											{t(`eventCardSignature.${letterVariant}`, { lng: previewLanguage })}
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
					<div className={styles.title}>{t('eventTitleParagraph')}</div>
					<div className={styles.paragraphSubtitle}>{t('eventCardSubtitle')}</div>

					{Array.from({ length: 8 }, (_, i) => (
						<React.Fragment key={i}>
							<div className={styles.titleParagraph}>
								{t(`eventCardTextTitleParagraph${i + 2}`)}
							</div>
							<div className={styles.paragraphs}>{t(`eventCardTextParagraph${i + 2}`)}</div>
						</React.Fragment>
					))}

					<div className={styles.paragraph}>{t('eventCardTextParagraph11')}</div>
					<div
						className={styles.paragraphLast}
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					>
						{t('eventCardTextParagraph12')}
					</div>
				</div>
			</div>
		</div>
	);
}
export default InvitationEventLetters;
