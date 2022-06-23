import './index.css';
import Title from './title';
import Categorypage from './category';
import Keywordpage from './keyword';
import Home from './home';
import Actorname from './actorname';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// JSX Rules
//return single element
//div / section / article or Fragment
//use camelCase for html attribute
//ClassName instead of class
//close every element
//formatting
///* only one route could be display at a time */

function App() {

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/category'>
              <Categorypage />
            </Route>
            <Route exact path='/keyword'>
              <Keywordpage />
            </Route>
            <Route exact path='/title'>
              <Title />
            </Route>
            <Route exact path='/actorname'>
              <Actorname />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
