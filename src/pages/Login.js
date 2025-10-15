import React, { useState } from 'react';
import AuthInput from '../components/AuthInput';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

export default function Login({ setProfile }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setProfile({
            email: email
        });
        navigate('/profile');
    };

    return (
        <div style={{ padding: '38px 22px 70px 22px' }}>
            <h2 style={{ marginBottom: 6 }}>Signin to your<br />PopX account</h2>
            <div style={{ color: '#888', fontSize: 15, marginBottom: 20 }}>
                Lorem ipsum dolor sit amet,<br />consectetur adipisicing elit.
            </div>
            <form onSubmit={handleLogin}>
                <AuthInput
                    label="Email Address"
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <AuthInput
                    label="Password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button
                    className={email && password ? "active" : ""}
                    type="submit"
                    disabled={!(email && password)}
                >Login</button>
            </form>
            <div className="form-footer">
                Don’t have an account?{' '}
                <span
                    onClick={() => navigate('/register')}
                    style={{ color: '#6c46f0', cursor: 'pointer' }}
                >
                    Create account
                </span>
            </div>
            <NavBar />
        </div>
    );
}
