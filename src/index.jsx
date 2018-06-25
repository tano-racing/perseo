import React from 'react'
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';

import configureStore from './tienda/configurar.jsx'
import Menu from './contenedores/menu.jsx'

import "bootstrap/scss/bootstrap.scss"
import "./css/principal.css"
import 'bootstrap'

import { getProductos } from './acciones/productosAcciones.jsx'


const store = configureStore()
store.dispatch(getProductos());

ReactDOM.render(
    <Provider store={store}>
        <Menu />
    </Provider>,
    document.getElementById('app')
);