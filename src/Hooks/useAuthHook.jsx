import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useAuthHook = () => {
	const all = useContext(AuthContext);
	return all;
};

export default useAuthHook;
