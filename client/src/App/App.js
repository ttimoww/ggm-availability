import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Dashboard from './pages/dashboard/Dashboard';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import './css/index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentWillMount(){
    fetch('/api/test')
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  render() { 
    return ( 
      <div className="app">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route component={PageNotFound} />
        </Switch>
      </div>

      
     );

     

  }
}
 
export default App;