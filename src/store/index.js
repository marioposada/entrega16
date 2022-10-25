import { createStore, combineReducers, applyMiddleware} from "redux";
import { productsReducer, categoryReducer, servicesReducer, userReducer } from "./reducers";

const rootReducer = combineReducers({
    products: productsReducer,
    category: categoryReducer,
    service: servicesReducer,
    user: userReducer,
});

export default createStore(rootReducer);

