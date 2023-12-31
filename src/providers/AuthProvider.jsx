import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from 'firebase/auth';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, user => {
			setLoading(false);
			setUser(user);
		});
		return () => unSubscribe();
	}, []);
	const createUser = ({ email, password }) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const login = ({ email, password }) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	const logout = () => {
		setLoading(true);
		return signOut(auth);
	};
	const googleSignIn = () => {
		setLoading(true);
		const provider = new GoogleAuthProvider();
		return signInWithPopup(auth, provider);
	};
	const authData = { createUser, login, logout, user, googleSignIn, loading };
	return (
		<AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node,
};

export default AuthProvider;
