// すべてのReducerをひとつにまとめる

import { combineReducers } from 'redux';
import { count } from './count/reducer';

const rootReducer = combineReducers({ count })