import PropTypes from 'prop-types';
import useAuthHook from '../Hooks/useAuthHook';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
	const { user, loading } = useAuthHook();
	const location = useLocation();
	if (loading) {
		return (
			<div className="flex justify-center items-center h-[60vh]">
				<span className="loading loading-spinner loading-lg text-yellow-500"></span>
			</div>
		);
	}
	if (user) {
		return children;
	}
	return <Navigate to={'/login'} state={location.pathname} />;
};

PrivateRoutes.propTypes = {
	children: PropTypes.node,
};

export default PrivateRoutes;
