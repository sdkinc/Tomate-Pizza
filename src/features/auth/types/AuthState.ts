import User from './User';

export default interface AuthState {
	isAuth: boolean;
	isLoading: boolean;
	user: User;
	authError: string;
}
