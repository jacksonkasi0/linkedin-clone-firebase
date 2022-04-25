import React, { useEffect } from 'react';
import style from './Login.module.scss';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, provider, db } from '../../firebase';

import { setUser } from '../../store/action/user';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userId = localStorage.getItem('userID');

  useEffect(() => {
    if (userId) {
      navigate('/feeds');
    }
  }, []);

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const { uid, email, photoURL, displayName } = result.user;
        localStorage.setItem('userID', uid);
        dispatch(setUser(result.user));

        await setDoc(doc(db, 'users', uid), {
          // uid is a unique id
          uid,
          email,
          photoURL,
          displayName,
        });
        navigate('/feeds');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={style.login}>
      <div className={style.header}>
        <Logo width='180px' />
      </div>
      <div className={style.container}>
        <Typography variant='h4'>Sign in</Typography>
        <p>Stay update on your professional world</p>
        <Button onClick={signIn}>
          Sign in with <strong>G</strong>
        </Button>
      </div>
    </div>
  );
};

export default Login;
