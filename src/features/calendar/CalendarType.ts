export interface Holiday {
	date: string;
	fname: string;
}

export interface Event {
	title: string;
	start: Date;
	end: Date;
}

export interface FeiertageApiResponse {
	status: string;
	feiertage: Holiday[];
}
