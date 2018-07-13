import { createStore } from 'redux';
import { IStoreState } from './types/index';
import { EnthusiasmAction } from './actions/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import { enthusiasm } from './reducers/index';

export default createStore<IStoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
},composeWithDevTools());