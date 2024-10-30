import { RootState } from '../../app/store';
import Resume from './types/Resume';

export const selectResumeOriginal = (state: RootState): Resume => state.resume.resumeOriginal;
export const selectResumeEn = (state: RootState): Resume => state.resume.resumeEn;
export const selectResumeDe = (state: RootState): Resume => state.resume.resumeDe;
export const selectIsResumeLoading = (state: RootState): boolean => state.resume.isLoading;
