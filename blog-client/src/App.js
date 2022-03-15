import React from 'react';
import './App.css';
import SignInForm from './Components/SignIn/SignInForm';
import { Route, Routes } from 'react-router-dom';
import PostListPage from './Pages/PostListPage';
import WritePage from './Pages/WritePage';
import PostViewPage from './Pages/PostViewPage';
import SignUpForm from './Components/SignUp/SignUpForm';
console.log('----', process.env.REACT_APP_SERVER_BASE_URL);

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignInForm />} />
        <Route path="/main" element={<PostListPage />} />
        <Route path="/write" element={<WritePage />} />
        {/* <Route path="/post/:id" render={props => <PostViewPage {...props} />} /> */}
        <Route path="/post/:id" element={<PostViewPage />} />
        <Route path="/sign-up" element={<SignUpForm />} />
      </Routes>
    </div>
  );
};

export default App;
