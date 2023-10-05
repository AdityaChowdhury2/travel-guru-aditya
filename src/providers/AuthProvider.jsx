import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, user => {
			setUser(user);
		});
		return () => unSubscribe();
	}, []);
	const createUser = ({ email, password }) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const login = ({ email, password }) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	const logout = () => {
		return signOut(auth);
	};
	const authData = { createUser, login, logout, user };
	return (
		<AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node,
};

export default AuthProvider;
