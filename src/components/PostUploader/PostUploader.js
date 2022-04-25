import React, { useState } from 'react';
import style from './PostUploader.module.scss';

import {
  Avatar,
  Backdrop,
  Box,
  IconButton,
  Chip,
  LinearProgress,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

import { db, timestamp, storage } from '../../firebase';

const PostUploader = () => {
  const { photoURL, displayName, uid } = useSelector(
    (state) => state.auth.user
  );

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [image, setImage] = useState('');
  const [progress, setProgress] = useState(0);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const handleSubmit = () => {
 
    const imgStorageRef = ref(storage, `images/${image.name}`);

    const uploadTask = uploadBytesResumable(imgStorageRef, image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(ref(storage, `images/${image.name}`))
          .then((url) => {
            const postRef = collection(db, 'posts');

            addDoc(postRef, {
              message: input,
              timestamp: timestamp,
              profilePic: photoURL,
              userName: displayName,
              image: url,
              uid: uid,
            });
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setProgress(0);
            setInput('');
            setImage('');
          });
      }
    );
  };

  return (
    <div className={style.conatiner}>
      <div className={style.postUploader}>
        <Avatar
          alt={displayName}
          src={photoURL}
          sx={{ width: '50px', height: '50px', cursor: 'pointer' }}
        />
        <input placeholder='Start a post' onClick={handleToggle} />
      </div>
      <div className={style.options}>
        <div className={style.option} onClick={handleToggle}>
          <i className='fa fa-image' />
          <p>Photo</p>
        </div>
        <div className={style.option} onClick={handleToggle}>
          <i className='fa fa-video' />
          <p>Video</p>
        </div>
        <div className={style.option} onClick={handleToggle}>
          <i className='fa-solid fa-calendar-day'></i>
          <p>Event</p>
        </div>
        <div className={style.option} onClick={handleToggle}>
          <i className='fa-solid fa-newspaper'></i>
          <p>Article</p>
        </div>
      </div>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <div className={style.postwrite}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <p>Create a post</p>
            <IconButton
              sx={{ width: '40px', height: '40px' }}
              onClick={handleClose}
            >
              <i className='fa-solid fa-xmark'></i>
            </IconButton>
          </Box>

          {progress > 0 ? (
            <LinearProgress variant='determinate' value={progress} />
          ) : (
            <hr />
          )}
          <Box sx={{ display: 'flex', alignItems: 'center', gridGap: '.5rem' }}>
            <Avatar
              src={photoURL}
              alt={displayName}
              sx={{ width: '50px', height: '50px' }}
            />
            <p>{displayName}</p>
          </Box>
          <textarea
            placeholder='What is on your mind?'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className={style.footer}>
            <label htmlFor='file-upload'>
              <i className='fa-solid fa-image'></i>
              <p>Photo</p>
            </label>
            <input
              id='file-upload'
              type='file'
              accept='image/png, image/gif, image/jpeg'
              onChange={(e) => setImage(e.target.files[0])}
            />
            {image !== '' ? (
              <div className={style.img_select}>
                <i className='fa-solid fa-circle-check'></i>
              </div>
            ) : null}

            <Chip label='Post' onClick={handleSubmit} variant='filled' />
          </div>
        </div>
      </Backdrop>
    </div>
  );
};

export default PostUploader;
