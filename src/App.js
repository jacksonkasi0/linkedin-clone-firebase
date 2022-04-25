import React from 'react';

import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Feeds from './Pages/Feeds/Feeds';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

const App = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/feeds' element={<PrivateRoute />}>
          <Route path='/feeds' element={<Feeds />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
