import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { productsReducer, categoryReducer, servicesReducer } from "./reducers";

const rootReducer = combineReducers({
    products: productsReducer,
    category: categoryReducer,
    service: servicesReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
