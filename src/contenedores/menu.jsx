import React from 'react'
import { BrowserRouter as Router, Route, browserHistory, Link, NavLink } from "react-router-dom";


import Productos from './productos.jsx'
import Principal from '../componentes/principal.jsx'

export default class Menu extends React.Component {
    render() {
        return (
            <Router history={browserHistory} >
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark menu">
                        <a className="navbar-brand" href="#">Perseo</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link">Inicio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/productos" className="nav-link">Productos</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <Route exact path="/" component={Principal} />
                    <Route path="/productos" component={Productos} />
                </div>
            </Router>
        )
    }
}