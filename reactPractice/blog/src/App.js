import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import HomePage from './component/homePage/HomePage';
import ViewArticle from './component/viewPage/ViewArticle';
import CreatArticle from './component/createPage/CreatArticle';
import EditArticle from './component/editPage/EditArticle';


function App() {
  const articals = [
    {
      title: 'Hello world 1',
      description:  'coding coding 1',
      markdown: '## good 1',
      createAt: new Date()
    }, {
      title: 'Hello world 2',
      description:  'coding coding 2',
      markdown: '## good 2',
      createAt:  new Date()
    }
  ]
  return (
    <Router>
      <Switch>
        <Route exact path='/blog'>
          <HomePage articals={ articals }/>
        </Route>
        <Route path='/blog/view'>
          <ViewArticle/>
        </Route>
        <Route path='/blog/create'>
          <CreatArticle/>
        </Route>
        <Route path='/blog/edit'>
          <EditArticle/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
