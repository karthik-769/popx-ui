import React from 'react';
import NavBar from '../components/NavBar';

export default function Profile({ profile }) {
    const { name, email, company } = profile;

    return (
        <div>
            <div style={{ padding: "24px 22px 0px 22px" }}>
                <h3 style={{ margin: "0 0 18px 0" }}>Account Settings</h3>
                <div className="profile-header">
                    <img
                        src="https://randomuser.me/api/portraits/lego/1.jpg"
                        className="profile-pic"
                        alt="user"
                    />
                    <div>
                        <div className="profile-name">{name || <span style={{ color: "#ccc" }}>Your Name</span>}</div>
                        <div className="profile-email">{email || <span style={{ color: "#ccc" }}>your@email.com</span>}</div>
                    </div>
                </div>
                <div className="settings-section">
                    <p className="settings-desc">
                        {company ? company : <span style={{ color: "#ccc" }}>Company Name or More Info</span>}
                    </p>
                </div>
            </div>
            <NavBar />
        </div>
    );
}
