import { createStore } from 'redux';
import { IStoreState } from './types';
import { EnthusiasmAction } from './actions';
import { composeWithDevTools } from 'redux-devtools-extension';
import { enthusiasm } from './reducers';

export default createStore<IStoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
},composeWithDevTools());