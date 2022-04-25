import React from 'react';
import style from './Sidebar.module.scss';

import { useSelector } from 'react-redux';
import { Box, Avatar, Divider } from '@mui/material';

const Sidebar = () => {
  const { photoURL, displayName, email } = useSelector(
    (state) => state.auth.user
  );

  return (
    <div className={style.sidebar}>
      <div className={style.container}>
          <div className={style.bgImg} ></div>
        <div className={style.user}>
          <Avatar alt={displayName} src={photoURL}  sx={{width:"60px", height:"60px"}} />
          <h2>{displayName}</h2>
          <p>{email}</p>
        </div>

        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Divider />
          <p>
            connection <span>125</span>
          </p>
          <h4>
            Who viewed your profile <span>486</span>
          </h4>
          <h4>
            Views of your post <span>2378</span>
          </h4>
          <Divider />

          <p>Access exlusive tools & insights</p>
          <Box sx={{ display: 'flex', alignItems: 'center', gridGap: '1rem' }} className={style.pre} >
            <i className='fa-solid fa-square'></i>
            <h4>Try Premium for free</h4>
          </Box>

          <Divider />
          <Box sx={{ display: 'flex', alignItems: 'center', gridGap: '1rem' }}>
            <i className='fa-solid fa-bookmark'></i>
            <p>My items</p>
          </Box>
        </Box>
      </div>
      <Box
        sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column' }}
        className={style.bottomBox}
      >
        <a href='#'>Group</a>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', cursor:"pointer" }}>
          <a href='#'>Events</a> <i className='fa-solid fa-plus'></i>
        </Box>
        <a href='#'>Followed hastags</a>
      </Box>
    </div>
  );
};

export default Sidebar;
