import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return  <div className={s.item}>
              <img src='https://images-workbench.99static.com/1so0NhBqNVKps-lUP2MnqfeAbGE=/99designs-contests-attachments/123/123520/attachment_123520611'/>
              {props.message}
                <div>
            <span>like</span> {props.likesCount}
                </div>
            </div> 
}

export default Post;