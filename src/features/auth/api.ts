import LoginData from '../sign_in/types/LoginData';
import User from './types/User';
import { axiosDefault, axiosWithAuth } from '../../utils/axios/config';
import NewUserDto from '../sign_up/types/NewUserDto';
import { TokenResponse } from './types/TokenResponse';

export async function login(data: LoginData): Promise<TokenResponse> {
	const res = await axiosDefault.post(`${API_BASE_URL}/api/auth/login`, JSON.stringify(data));
	if (res.status !== 200) {
		throw res.data;
	}
	return res.data;
}

export async function getAuthUser(): Promise<User> {
	const res = await axiosWithAuth.get(`${API_BASE_URL}/api/users/userByAuth`);
	if (res.status !== 200) {
		throw res.data;
	}
	return res.data;
}

export async function register(data: NewUserDto): Promise<User> {
	const res = await axiosDefault.post(`${API_BASE_URL}/api/users/register`, JSON.stringify(data));
	if (res.status !== 201) {
		throw res.data;
	}
	return res.data;
}
