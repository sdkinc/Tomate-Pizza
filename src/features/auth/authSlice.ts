import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import LoginData from '../sign_in/types/LoginData';
import * as api from './api';
import Cookies from 'js-cookie';
import AuthState from './types/AuthState';
import NewUserDto from '../sign_up/types/NewUserDto';
import User from './types/User';

const initialState: AuthState = {
	isAuth: false,
	isLoading: false,
	user: {
		userId: 0,
		createTimeStamp: '',
		hashPassword: '',
		login: '',
		email: '',
		state: '',
		role: '',
	},
	authError: '',
};

export const login = createAsyncThunk('login', async (data: LoginData, { rejectWithValue }) => {
	try {
		const response = await api.login(data);
		Cookies.set('accessToken', response.accessToken, {
			expires: 1 / 12,
			secure: true,
			sameSite: 'strict',
		});
		Cookies.set('refreshToken', response.refreshToken, {
			expires: 30,
			secure: true,
			sameSite: 'strict',
		});
		const user = await api.getAuthUser();
		return user;
	} catch (error) {
		return rejectWithValue(error);
	}
});

export const getAuthUser = createAsyncThunk('getAuthUser', () => api.getAuthUser());

export const register = createAsyncThunk('register', async (data: NewUserDto) => {
	const response = await api.register(data);
	return response;
});

export const logout = createAsyncThunk<void>('logout', () => {
	Cookies.remove('accessToken');
	Cookies.remove('refreshToken');
});

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		resetAuthState: (state) => {
			state.isAuth = false;
			state.user = initialState.user;
		},
		setIsLoading: (state, action) => {
			state.isLoading = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
				state.isAuth = true;
				state.user = action.payload;
			})
			.addCase(getAuthUser.fulfilled, (state, action: PayloadAction<User>) => {
				state.isAuth = true;
				state.user = action.payload;
			})
			.addCase(getAuthUser.rejected, () => {
				logout();
			})
			.addCase(register.pending, (state) => {
				state.isLoading = true;
				state.authError = '';
			})
			.addCase(register.fulfilled, (state, action: PayloadAction<User>) => {
				state.isLoading = false;
				state.user = action.payload;
			})
			.addCase(register.rejected, (state, action) => {
				state.isLoading = false;
				state.authError = action.error.message || 'Something went wrong';
			})
			.addCase(logout.fulfilled, (state) => {
				state.isAuth = false;
				state.user = initialState.user;
			});
	},
});

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;
