import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
// import Index from './features/pages/MaterialUiIndex';
// import PWPaper from './features/components/PWPaper';
// import PWTable from './features/components/PWTable';

ReactDOM.render(
  <Provider store={store}>
    {/* <Index /> */}
    {/* <PWPaper/> */}
    {/* <PWTable/> */}
    <App/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
