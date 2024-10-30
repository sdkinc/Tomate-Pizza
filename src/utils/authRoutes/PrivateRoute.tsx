import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const PrivateRoute: React.FC = () => {
	const isAuth = useSelector((state: RootState) => state.auth.isAuth);
	const role = useSelector((state: RootState) => state.auth.user.role);

	return isAuth && role === 'ADMIN' ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
