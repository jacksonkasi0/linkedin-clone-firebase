import React, { useState } from 'react';
import style from './Widget.module.scss';

import { Box, Button } from '@mui/material';


const Widget = () => {
  const [click, setClick] = useState(false);
  const [num, setNum] = useState(false);
  
  const handleClick = () => {
    setClick(!click);
    setNum(!num);
  };

  return (
    <div className={style.widget}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h3>LinkedIn News</h3>
        <i className='fa-solid fa-circle-info'></i>
      </Box>
      <div>
        <ul>
          {News.slice(num ? 0 : 4).map((item, index) => (
            <li key={index}>
              <a href='#'>{item.title}</a>
              <p>{item.time}</p>
            </li>
          ))}
        </ul>
      </div>
      <Button onClick={handleClick}>
        {click ? 'see less' : 'see more'}
      </Button>
    </div>
  );
};

export default Widget;

var News = [
  {
    title: 'Love for horses marks 96th birthday of Britain’s Queen',
    time: '2h ago',
  },
  {
    title:
      'Russia-Ukraine crisis | Putin tells forces not to storm Ukraine holdout in Mariupol',
    time: '13h ago',
  },
  {
    title: 'A chance to hit refresh in Sri Lanka',
    time: '1d ago',
  },
  {
    title: 'The top 25 compenies in India',
    time: '4h ago',
  },
  {
    title: 'TfL hopes TikTok can influence new cable car deal',
    time: '5h ago',
  },
  {
    title: "Child Q impact: 'Our voices need to be heard'",
    time: '1d ago',
  },
  {
    title: "Emotional farewell at singer Tom Parker's funeral",
    time: '8h ago',
  },
  {
    title: 'Strip-search schoolgirl head teacher steps down',
    time: '1d ago',
  },
];
