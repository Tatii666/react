import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div>
        <div>
            <img src = 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg' /> 
        </div>
        <div>
            ava + description 
        </div> 
       <MyPosts />
    </div>
}

export default Profile;