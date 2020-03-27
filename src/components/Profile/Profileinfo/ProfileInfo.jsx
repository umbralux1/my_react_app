import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img alt="" src="https://i.pinimg.com/736x/b9/fe/98/b9fe98bb3f0ff5d0ad4211dc0cb65c13.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                Ava + desc
            </div>
        </div>
    );
}

export default ProfileInfo;