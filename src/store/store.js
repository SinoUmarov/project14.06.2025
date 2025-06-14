import { configureStore } from "@reduxjs/toolkit";

import cattodoReducer from './reducers/cattodo/cattodo';
import catcategoriesReducer from './reducers/catcategories/catcategories';
 

export const store = configureStore({
  reducer: {
    cattodo: cattodoReducer,
    catcategories: catcategoriesReducer,
  }
});
