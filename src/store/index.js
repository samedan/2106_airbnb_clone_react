import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import rentals from "./reducers/rentals";
import rental from "./reducers/rental";
import thunk from "redux-thunk";

const addPromiseToDispatch = (store) => {
  const { dispatch } = store;
  return function (action) {
    if (action.then && typeof action.then === "function") {
      return action.then((action) => {
        dispatch(action);
      });
    }
    dispatch(action);
  };
};

export function initStore() {
  // PURE Functions, TODO: Explain (:
  const reducers = combineReducers({
    rentals,
    rental,
  });

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

  store.dispatch = addPromiseToDispatch(store);

  return store;
}