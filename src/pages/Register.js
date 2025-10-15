import React, { useState } from 'react';
import AuthInput from '../components/AuthInput';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

export default function Register({ setProfile }) {
    const [fields, setFields] = useState({
        name: '', phone: '', email: '', password: '', company: ''
    });
    const [agency, setAgency] = useState('yes');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        setProfile({ ...fields, agency });
        navigate('/profile');
    };

    return (
        <div style={{ padding: '38px 22px 70px 22px' }}>
            <h2 style={{ marginBottom: 12 }}>Create your<br />PopX account</h2>
            <form onSubmit={handleRegister}>
                <AuthInput label="Full Name*" type="text" placeholder="Enter full name"
                    value={fields.name} onChange={e => setFields(f => ({ ...f, name: e.target.value }))}
                />
                <AuthInput label="Phone number*" type="text" placeholder="Enter phone number"
                    value={fields.phone} onChange={e => setFields(f => ({ ...f, phone: e.target.value }))}
                />
                <AuthInput label="Email address*" type="email" placeholder="Enter email address"
                    value={fields.email} onChange={e => setFields(f => ({ ...f, email: e.target.value }))}
                />
                <AuthInput label="Password*" type="password" placeholder="Enter password"
                    value={fields.password} onChange={e => setFields(f => ({ ...f, password: e.target.value }))}
                />
                <AuthInput label="Company name" type="text" placeholder="Enter company name"
                    value={fields.company} onChange={e => setFields(f => ({ ...f, company: e.target.value }))}
                />
                <div style={{ margin: '6px 0 0 0', fontSize: '14px' }}>
                    Are you an Agency?*
                    <span style={{ marginLeft: '8px' }}>
                        <input
                            type="radio"
                            value="yes"
                            id="agency-yes"
                            checked={agency === "yes"}
                            onChange={() => setAgency("yes")}
                        />
                        <label htmlFor="agency-yes" style={{ marginRight: '18px', marginLeft: '2px' }}>Yes</label>
                        <input
                            type="radio"
                            value="no"
                            id="agency-no"
                            checked={agency === "no"}
                            onChange={() => setAgency("no")}
                        />
                        <label htmlFor="agency-no" style={{ marginLeft: '2px' }}>No</label>
                    </span>
                </div>
                <button
                    className={fields.name && fields.phone && fields.email && fields.password ? "active" : ""}
                    type="submit"
                    disabled={!(fields.name && fields.phone && fields.email && fields.password)}
                    style={{ marginTop: "22px" }}
                >Create Account</button>
            </form>
            <NavBar />
        </div>
    );
}
