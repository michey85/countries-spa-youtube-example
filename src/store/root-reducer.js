import {combineReducers} from 'redux';

import {themeReducer} from './theme/theme-reducer'

export const rootReducer = combineReducers({
  theme: themeReducer,
});
