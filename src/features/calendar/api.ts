import axios, { AxiosResponse } from 'axios';
import { FeiertageApiResponse, Event, Holiday } from './CalendarType';

const fetchHolidays = async (): Promise<Event[]> => {
	try {
		const response: AxiosResponse<FeiertageApiResponse> = await axios.get(
			'https://get.api-feiertage.de'
		);
		const holidayData: Event[] = response.data.feiertage.map((holiday: Holiday) => ({
			title: holiday.fname,
			start: new Date(holiday.date),
			end: new Date(holiday.date),
		}));
		return holidayData;
	} catch (error) {
		throw new Error('Failed to fetch holidays');
	}
};

export default fetchHolidays;
