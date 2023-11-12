import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Nav from '../Nav';
import './ProfileScreen.css';


const planOptions = [
    {
        name: 'Netflix Basic',
        price: '$9.99/month',
    },
    {
        name: 'Netflix Standard',
        price: '$13.99/month',
    },
    {
        name: 'Netflix Premium',
        price: '$16.99/month',
    }
];

function ProfileScreen() {
    const user = useSelector(selectUser);

    return (
        <div className="profileScreen">
            <Nav />

            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt=""
                        className="profileScreen_avatar"
                    />
                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen_plans">
                            <h3>Plans</h3>
                            <ul className="planList">
                                {planOptions.map((plan, index) => (
                                    <li key={index}>
                                        <div className="planOption">
                                            <div className="plan_name">
                                                <h4>{plan.name}</h4>
                                                <p>{plan.price}</p>
                                            </div>
                                            <button className="subscribeButton">Subscribe</button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="profileScreen_buttons">
                            <button
                                onClick={() => auth.signOut()}
                                className="profileScreen_signOut">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileScreen;
