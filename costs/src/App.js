import {BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

function App() {
  return (
    <Router>
      <div>
       <Link to="/">Home</Link>
       <Link to="contact">Contato</Link>
       <Link to="company">Sobre</Link>
       <Link to="newproject">Novo Projeto</Link>
        
      </div>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/company">
            <Company />
        </Route>
        <Route exact path="/contact">
            <Contact />
        </Route>
        <Route exact path="/newproject">
            <NewProject />
        </Route>
      </Switch>
      <p>Footer</p>
    </Router>
  );
}

export default App;
