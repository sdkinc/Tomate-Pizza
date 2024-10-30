import Resume from './Resume';

export default interface ResumeState {
	resumeOriginal: Resume;
	resumeEn: Resume;
	resumeDe: Resume;
	isLoading: boolean;
	resumeError: string;
}
