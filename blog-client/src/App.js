import React from 'react';
import './App.css';
import SignInForm from './Components/SignIn/SignInForm';
import { Route, Routes } from 'react-router-dom';
import PostList from './Pages/PostListPage';
import Write from './Pages/WritePage';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignInForm />} />
        <Route path="/main" element={<PostList />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </div>
  );
};

export default App;
