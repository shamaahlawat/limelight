import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as UTILS from '../data/config/utils';
import * as pageActions from '../data/redux/page_details/actions';
import AppHeader from '../components/appheader';
import Footer from '../components/footer';

function mapStateToProps(state) {
	return { page_details: state.page_details };
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Object.assign({}, pageActions, ), dispatch)
	};
}

class AppContainer extends Component {
	componentWillMount() {
		const systLang = UTILS.getLang();
		this.props.actions.setDeviceData(UTILS.checkDevice.deviceStatus());
		if (systLang) {
			this.props.actions.setLang(systLang);
		}
	}

	render() {
		return (
			<div className="flex-column full-width full-height">
				<AppHeader history={this.props.history} />
				<div className="is-no-pad t-mrgn-5">
					{this.props.children}
				</div>
				<Footer history={this.props.history} />
			</div>
		);
	}
}

AppContainer.propTypes = {
	actions: PropTypes.object,
	history: PropTypes.object,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(AppContainer);
