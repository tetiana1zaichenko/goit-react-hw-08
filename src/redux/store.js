import { configureStore, combineReducers } from "@reduxjs/toolkit";

import contactsReducer from "./contacts/slice";
import filtersReducer from "./filters/slice";
import { authReducer } from "./auth/slice";

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filters: filtersReducer,
// });

// export const store = configureStore({
//   reducer: {
//     rootReducer,
//     auth: authReducer,
//   },
// });

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
