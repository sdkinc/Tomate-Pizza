import axios, { AxiosError, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import moment from 'moment';
import TokenResponse from './types/TokenResponse';

async function refreshAccessToken(refreshToken: string): Promise<void> {
	const res = await axios.post<TokenResponse>(
		`${API_BASE_URL}/api/auth/token`,
		JSON.stringify({ refreshToken })
	);
	const newAccessToken: string = res.data.accessToken;
	Cookies.set('accessToken', newAccessToken, { expires: 1 / 12, secure: true, sameSite: 'strict' });
}

function removeTokens(): void {
	Cookies.remove('accessToken');
	Cookies.remove('refreshToken');
}

export const axiosDefault = axios.create({
	headers: {
		'Content-Type': 'application/json',
		accept: 'application/json',
	},
});

axiosDefault.interceptors.response.use(
	(response: AxiosResponse) => {
		return response;
	},
	async (error: AxiosError) => {
		const { response } = error;
		if (response && response.status !== 200) {
			return response;
		}
		return Promise.reject(error);
	}
);

export const axiosWithAuth = axios.create({
	headers: {
		'Content-Type': 'application/json',
		accept: 'application/json',
		Authorization: `Bearer ${Cookies.get('accessToken')}`,
	},
});

axiosWithAuth.interceptors.request.use(async (config) => {
	try {
		const refreshToken = Cookies.get('refreshToken');
		const accessToken = Cookies.get('accessToken');
		if (!refreshToken) {
			removeTokens();
			return config;
		}

		if (!accessToken) {
			await refreshAccessToken(refreshToken);
		} else {
			const decoded = jwtDecode(accessToken);
			if (decoded.exp && decoded.exp - moment().unix() < 10) {
				await refreshAccessToken(refreshToken);
			}
		}

		config.headers.Authorization = `Bearer ${Cookies.get('accessToken')}`;
		return config;
	} catch (error) {
		removeTokens();
		return Promise.reject(error);
	}
});
