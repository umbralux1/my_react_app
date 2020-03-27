import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'

const Profile = () => {
    return (
        <div>
            <div>
                <img alt="" src="https://i.pinimg.com/736x/b9/fe/98/b9fe98bb3f0ff5d0ad4211dc0cb65c13.jpg" />
            </div>
            <div>
                Ava + desc
        </div>
            <MyPosts />
        </div>);
}

export default Profile;