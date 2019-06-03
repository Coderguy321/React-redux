import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

//making this as a function so that we call at the start
export default function configureStore(initiaState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose; // provide support or REDUX dev tools
  //this 3rd parar will warn us we mutate the state
  return createStore(
    rootReducer,
    initiaState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
