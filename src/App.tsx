import * as React from 'react';
import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import * as PropTypes from 'prop-types';
// import Beta from './assets/img/Beta.png';
import {
  Footer,
  Header,
} from './features/common';
import {
  About,
  HomePage,
  NotFountPage,
} from './features/pages';
import * as routes from './routes/const';
import store from "./store";

// import { createBrowserHistory } from 'history';

// const history = createBrowserHistory();

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
      <Router>
        <div className={"container"}>
          <Header />
            <Switch>
              <Route exact={true} path={routes.APP_ROOT} component={HomePage} />
              <Route exact={true} path={routes.ABOUT} component={About} />
              <Route component={NotFountPage} />
            </Switch>
          <Footer />
        </div>
      </Router>
      </Provider>
    );
  }
}

// App.contextTypes = {
//   router: PropTypes.object
// };

export default App;

