import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Home } from './pages/Home/Home';
import { Users } from './pages/Users';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { SingleUser } from './pages/SingleUser/SingleUser';

function App() {
  const [item, setItem] = useState(0);

  const onChangeItem = (id) => {
    setItem(id);
  };

  return (
    <div className="root">
      <div className="navbar">
        <Navbar onChangeItem={onChangeItem} />
      </div>
      <div className="content">
        <div className="header">
          <Header item={item} />
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="/users/:id" element={<SingleUser />} />
            <Route path="users" element={<Home />} />
            
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
