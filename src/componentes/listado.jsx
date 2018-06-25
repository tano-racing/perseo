import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { withRouter } from 'react-router-dom'

// import * as stuffActions from '../acciones/eventosAcciones';


function mapStateToProps(state) {
	return {
		//stuffs: state.stuffs
	};
}

function mapDispatchToProps(dispatch) {
	return {
		//stuffActions: bindActionCreators(stuffActions, dispatch)
	};
}

class Listado extends React.Component {
	render() {
		return (
			<div>
				<h1>I'm the PLACEHOLDER component</h1>
			</div>
		);
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Listado));


