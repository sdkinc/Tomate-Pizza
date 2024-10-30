import { useEffect, useState } from 'react';
import { Calendar as BigCalendar, DateLocalizer, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/de';
import fetchHolidays from './api';
import { Event } from './CalendarType';
import styles from './calendar.module.css';
import { useTranslation } from 'react-i18next';

const localizer: DateLocalizer = momentLocalizer(moment);

const MyCalendar = (): JSX.Element => {
	const { t } = useTranslation();
	const [holidays, setHolidays] = useState<Event[]>([]);

	useEffect(() => {
		const getHolidays = async (): Promise<void> => {
			try {
				const holidayData = await fetchHolidays();
				setHolidays(holidayData);
			} catch (error) {
				console.error('Error fetching holidays', error);
			}
		};

		getHolidays();
	}, []);
	return (
		<div className={styles.calendarContainer}>
			<h2 className={styles.calendarHeader}>{t('calendarTitle')}</h2>
			<BigCalendar
				localizer={localizer}
				events={holidays}
				startAccessor="start"
				endAccessor="end"
				className={styles.calendar}
			/>
		</div>
	);
};

export default MyCalendar;
