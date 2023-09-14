// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DialogsPage from './pages/DialogsPage';
import News from './pages/NewsPage';
import Music from './pages/MusicPage';
import Settings from './pages/SettingsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='profile' element={<MainPage />} />
        <Route path='dialogs' element={<DialogsPage/>} />
        <Route path='news' element={<News/>} />
        <Route path='music' element={<Music/>} />
        <Route path='settings' element={<Settings/>} />
        <Route path='*' element={<div>404  страница не найдена</div>} />
      </Routes>
    </Router >
  );
}



export default App;

// check gitwork