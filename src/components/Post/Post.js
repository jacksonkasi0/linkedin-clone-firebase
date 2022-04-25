import React from 'react';
import style from './Post.module.scss';

import { DateTime } from 'luxon';
import { Avatar, IconButton } from '@mui/material';

const Post = ({ profilePic, image, userName, timestamp, message }) => {

  return (
    <div className={style.post}>
      <div className={style.header}>
          <Avatar src={profilePic} alt={userName} className={style.avatar} />
          <div className={style.info}>
            <h3>{userName}</h3>
            {timestamp && (
              <p>{DateTime.fromSeconds(timestamp.seconds).toRelative()}</p>
            )}
          </div>

        <IconButton className={style.menu} >
          <i className='fa-solid fa-ellipsis'></i>
        </IconButton>
      </div>


      <div className={style.content}>
        {message && <p>{message}</p>}
        { image && <img src={image} alt={''} /> }
      </div>

      <div className={style.footer}>
        <div>
          <i className='fa fa-thumbs-up'></i>
          <p>Like</p>
        </div>
        <div>
          <i className='fa-solid fa-message'></i>
          <p>Comment</p>
        </div>
        <div>
          <i className='fa fa-share'></i>
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
