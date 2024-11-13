import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
// Pages
import Home from './pages/Home';
import UserCompleted from './pages/UserCompletedHistory';
import UserTodos from './pages/UserTodos';
import NoPage from './pages/NoPage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route index element={<Home /> } />
        <Route path='/home' element={<Home /> } />
        <Route path='/todos' element={<UserTodos />} />
        <Route path='/completedhistory' element={<UserCompleted />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
