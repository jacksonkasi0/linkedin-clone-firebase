import React, { useState } from 'react';
import style from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/logo/logo.svg';

import { MenuItem, Menu } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  const [icon, setIcon] = useState('home');
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);


  const handleClick = (val) => (e) => {
    setIcon(val);
    if (val === 'user') {
      setAnchorEl(e.target);
      setOpen(!open)
    }
  };
  const handleLogout = (e) => {
    localStorage.removeItem('userID');
    window.location.href = '/';
  };

  return (
    <div className={style.header}>
      <div className={style.logo}>
        <Link to='/feeds'>
          <Logo className={style.icon} width='50px' />
        </Link>
        <div className={style.search}>
          <i className={`fa-solid fa-magnifying-glass ${style.searchIcon}`} />
          <input type='text' placeholder='Search' />
        </div>
      </div>
      <div className={style.menu}>
        <div
          className={`${style.menuItem} ${icon === 'home' && style.active}`}
          onClick={handleClick('home')}
        >
          <i className='fa-solid fa-house'></i>
          <p>Home</p>
        </div>

        <div
          className={`${style.menuItem}  ${icon === 'group' && style.active}`}
          onClick={handleClick('group')}
        >
          <i className='fa-solid fa-user-group'></i>
          <p>
            <span>My</span> Network
          </p>
        </div>

        <div
          className={`${style.menuItem} ${icon === 'jobs' && style.active}`}
          onClick={handleClick('jobs')}
        >
          <i className='fa-solid fa-briefcase'></i>
          <p>Jobs</p>
        </div>
        <div
          className={`${style.menuItem} ${icon === 'msg' && style.active}`}
          onClick={handleClick('msg')}
        >
          <i className='fa-solid fa-message '></i>
          <p>Messages</p>
        </div>
        <div
          className={`${style.menuItem} ${icon === 'bell' && style.active}`}
          onClick={handleClick('bell')}
        >
          <i className='fa-solid fa-bell '></i>
          <p>Notifiction</p>
        </div>
        <div
          className={`${style.menuItem} ${icon === 'user' && style.active}`}
          onClick={handleClick('user')}
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          style={{color:"#0177B5"}}
        >
          <i className='fa-solid fa-user'></i>
          <p>Me</p>
        </div>

        <div
          className={`${style.menuItem} ${icon === 'work' && style.active}`}
          onClick={handleClick('work')}
        >
          <i className='fa-solid fa-compass'></i>
          <p>Work</p>
        </div>
      </div>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClick('user')}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem sx={{color:"red"}} onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Header;
