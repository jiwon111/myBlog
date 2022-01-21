import React from 'react';
import './App.css';
import SignInForm from './Components/SignIn/SignInForm';
import { Route, Routes } from 'react-router-dom';
import PostList from './Pages/PostListPage';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignInForm />} />
        <Route path="/main" element={<PostList />} />
      </Routes>
    </div>
  );
};

export default App;
