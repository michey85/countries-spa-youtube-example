import axios from 'axios';
import {configureStore} from '@reduxjs/toolkit';

import * as api from './config';
import { themeReducer } from './features/theme/theme-slice';
import {controlsReducer} from './features/controls/controls-slice';
import { detailsReducer } from './features/details/details-slice';
import { countriesReducer } from './features/countries/countries-slice';


const store = configureStore({
  reducer: {
    theme: themeReducer,
    countries: countriesReducer,
    controls: controlsReducer,
    details: detailsReducer,
  },
  devTools: true.valueOf,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    thunk: {
      extraArgument: {
        client: axios,
        api,
      }
    },
  })
});

export {store};
