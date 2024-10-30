import { RootState } from '../../app/store';
import User from './types/User';

export const selectUser = (state: RootState): User => state.auth.user;
export const selectIsLoading = (state: RootState): boolean => state.auth.isLoading;
