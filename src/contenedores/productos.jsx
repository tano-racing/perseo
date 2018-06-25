import React from 'react'
import ReactDOM from "react-dom";

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

function mapStateToProps(state) {
    return {
        productos: state.productos
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //stuffActions: bindActionCreators(stuffActions, dispatch)
    };
}

class Productos extends React.Component {
    render() {

        let { productos } = this.props.productos
        let listado = productos.map((p, i) => {
            return <p key={i}>{p}</p>
        })

        return (
            <div>
                <h1>Productos</h1>
                {listado}
            </div>
        );
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Productos));
