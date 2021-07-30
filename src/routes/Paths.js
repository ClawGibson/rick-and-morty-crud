import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Details from '../components/views/Details';
import Home from '../components/views/Home';

const Paths = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/details/:id' component={Details} />
        <Route exact path='/details/edit/:onEdit/:id' component={Details} />
      </Switch>
    </Router>
  );
};

export default Paths;
