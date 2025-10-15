import React from 'react';

export default function AuthInput({ label, type, placeholder, value, onChange }) {
    return (
        <div>
            <div className="label" style={{ color: '#6c46f0' }}>{label}</div>
            <input
                type={type}
                required
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
