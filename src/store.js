import rootReducer from "./reducers/index";
import  {legacy_createStore, applyMiddleware,compose }  from "redux";

const store = legacy_createStore(rootReducer,compose(
    applyMiddleware(ReduxThunk)
    )
);
export default store;