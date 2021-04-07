import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Project from './components/Project';
import NavBar from './components/NavBar';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' /> 
        <Route component={Contact} path='/contact' />
        <Route component={Project} path='/projects' />
      </Switch>
    </Router>
  )
}

export default App;
