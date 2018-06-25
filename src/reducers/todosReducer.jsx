import { combineReducers } from 'redux';
import productos from './productosReducer.jsx';

const rootReducer = combineReducers({
    productos
});

export default rootReducer;