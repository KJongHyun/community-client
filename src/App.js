import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/membership/LoginPage';
import SignupPage from './pages/membership/SignupPage';
import PostListPage from './pages/post/PostListPage';
import PostPage from './pages/post/PostPage';
import WritePostPage from './pages/post/WritePostPage';

function App() {
  return (
    <Switch>
      <Route path='/' component={HomePage} exact />
      <Route path='/login' component={LoginPage} />
      <Route path='/signup' component={SignupPage} />
      <Route path='/posts' component={PostPage} />
      <Route path='/write' component={WritePostPage} />
      <Route path='/post/:postId' component={PostPage} />
      <Route path='/list' component={PostListPage} />
    </Switch>
  );
}

export default App;
