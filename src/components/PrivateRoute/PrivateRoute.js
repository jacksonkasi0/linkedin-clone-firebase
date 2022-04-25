import React, { useEffect, useState } from 'react';

import { Navigate, Outlet } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, getDoc } from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import { handleUser } from '../../store/action/user';

import { ReactComponent as Logo } from '../../assets/logo/logo.svg';
import style from './PrivateRoute.module.scss';
import ProgressBar from '../ProgressBar/ProgressBar';

const PrivateRoute = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [isUserId, setIsUserId] = useState(false);

  useEffect(() => {
    if (!user) {
      try {
        const userId = localStorage.getItem('userID');
        if (userId) {
          dispatch(handleUser(userId));
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setIsUserId(true);
      return;
    }

    setTimeout(() => {
      setIsUserId(true);
    }, 3000);
  }, []);

  if (isUserId) {
    return user ? <Outlet /> : <Navigate to='/login' />;
  }

  return <div className={style.container} >
    <Logo width="3rem" />
    <ProgressBar />
  </div>;
};

export default PrivateRoute;
