import React from 'react';
import './App.css';
import SignInForm from './Components/SignIn/SignInForm';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PostListPage from './Pages/PostListPage';
import WritePage from './Pages/WritePage';
import PostViewPage from './Pages/PostViewPage';
import SignUpForm from './Components/SignUp/SignUpForm';

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <title>MY BLOG</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<SignInForm />} />
        <Route path="/main" element={<PostListPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/write/:id" element={<WritePage />} />
        {/* <Route path="/post/:id" render={props => <PostViewPage {...props} />} /> */}
        <Route path="/post/:id" element={<PostViewPage />} />
        <Route path="/sign-up" element={<SignUpForm />} />
      </Routes>
    </div>
  );
};

export default App;
