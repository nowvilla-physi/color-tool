import { combineReducers, createStore } from 'redux';
import colorsReducer from '../colors/reducers';

const rootReducer = combineReducers({
    colors: colorsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer);

export default store;
