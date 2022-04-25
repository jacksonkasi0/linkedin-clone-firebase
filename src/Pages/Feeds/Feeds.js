import React from 'react';
import style from './Feeds.module.scss';

import Feed from '../../components/Feed/Feed';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Widget from '../../components/Widget/Widget';

const Feeds = () => {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.body} >
        <Sidebar />
        <div className={style.feed} >
        <Feed />
        </div>
        <Widget />
      </div>
    </div>
  );
};

export default Feeds;
