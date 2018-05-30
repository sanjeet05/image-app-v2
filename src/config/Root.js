import React from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom';

// redux imports start
import { Provider } from "react-redux";
import store from "../store.js";

import App from '../containers/App';

// Screens
// for home
import TaskOne from '../containers/Screens/TaskOne/TaskOne';
import TaskTwo from '../containers/Screens/TaskTwo/TaskTwo';

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>                
          {/* MainLayout */}
          <App>
            {/* home */}
            <Route exact path="/" component={TaskOne} />
            <Route exact path="/task_one" component={TaskOne} />  
            <Route exact path="/task_two" component={TaskTwo} />                            
          </App>
        </Switch>
      </Router>
    </Provider>  
  );
};

export default Root;

