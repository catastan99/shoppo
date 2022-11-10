import { combineReducers, createStore, applyMiddleware } from "redux";
import { cartReducer } from "./reducers/cart";
import { favoriteReducer } from "./reducers/favorite";
import thunk from 'redux-thunk';

const rootReducer=combineReducers({
    cart:cartReducer,
    favorite: favoriteReducer,
})

// const store = createStore(rootReducer);

const middlewares = [thunk];
// process.env.NODE_ENV este o variabila de mediu(anvironment variable), setata automat de create-react-app.
// Cat timp aplicatia nu este deploiata, valoarea ei este 'development'. Cand deploiem aplicatia, este automat setata
// pe 'production'. Asadar, noi vrem sa avem logger-ul DOAR in faza de development, utilizatorul nu ar trebui sa vada
// ce actiuni lansam noi.
// if (process.env.NODE_ENV === 'development') {
//     middlewares.push(logger);
// }
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;