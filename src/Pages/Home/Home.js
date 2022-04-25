import React from 'react';
import style from './Home.module.scss';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as BgImage } from '../../assets/images/man.svg';

import { useNavigate } from 'react-router-dom';
import { Chip } from '@mui/material';


const Home = () => {

  const navigate = useNavigate()

  return (
    <div className={style.home}>
      <div className={style.header}>
        <Logo width='180px' />
        <div className='icons'>
          <div>
            <i className='fa-solid fa-compass'></i>
            <p>Discover</p>
          </div>
          <div>
            <i className='fa-solid fa-user-group'></i>
            <p>People</p>
          </div>
          <div>
            <i className='fa-solid fa-graduation-cap'></i>
            <p>Learning</p>
          </div>
          <div>
            <i className='fa-solid fa-briefcase'></i>
            <p>Jobs</p>
          </div>
          <Chip
            label='Sing in'
            variant='outlined'
            color='primary'
            className={style.singin}
            onClick={()=>navigate('/login')}
          />
        </div>
      </div>

      <div className={style.conatiner}>
        <div>
          <div>
            <p>Welcome to your professional community</p>
            <div className={style.title}>
              <div>
                <h4>Search for a job</h4>
                <i className='fa-solid fa-chevron-right'></i>
              </div>
              <div>
                <h4>Find a person you know</h4>
                <i className='fa-solid fa-chevron-right'></i>
              </div>
              <div>
                <h4>Learn a new skill</h4>
                <i className='fa-solid fa-chevron-right'></i>
              </div>
            </div>
          </div>
        </div>
        <BgImage className={style.bgImage} />
      </div>
    </div>
  );
};

export default Home;
