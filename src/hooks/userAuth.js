import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [signUser, setSignUser] = useState(null);

    const signup = (data) => {
        const user = JSON.stringify(data);
        localStorage.setItem('newUser', user);
    }

    useEffect(() => {
        const signupData = localStorage.getItem('newUser');
        setSignUser(JSON.parse(signupData));
    }, [])

    const login = (data) => {
        if (signUser?.phone === data?.phone && signUser?.password === data?.password) {
            setUser(data);
            sessionStorage.setItem('loggedUser', JSON.stringify(data));
        }
    }
    return (
        <AuthContext.Provider value={{ signup, login, user }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;