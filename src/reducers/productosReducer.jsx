import estadoInicial from './estadoInicial.jsx';
import * as types from '../acciones/tipos.jsx';

export default function productoReducer(state = estadoInicial, action) {
    switch (action.type) {
        case types.TRAER_PRODUCTOS:
            return {
                productos: action.productos
            }
        default:
            return state
    }
}