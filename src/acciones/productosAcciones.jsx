
import * as tipos from './tipos.jsx';
import ProductosApi from '../api/productosApi.jsx';

export function loadCatsSuccess(productos) {
    return { type: tipos.TRAER_PRODUCTOS, productos: productos };
}

export function getProductos() {
    // make async call to api, handle promise, dispatch action when promise is resolved
    return async function (dispatch) {

        var api = new ProductosApi()
        var respuesta = await api.todos()
        return dispatch(loadCatsSuccess(respuesta))
    }
}