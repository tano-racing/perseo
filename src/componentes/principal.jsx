import React from 'react';
import Listado from './listado.jsx'

export default class Principal extends React.Component {

	render() {
		return <div className="container contenido">
			<div className="row">
				<div className="col-md-3"><Listado /></div>
				<div className="col-md-9"><p>Info evento</p></div>
			</div>
		</div>
	}
}