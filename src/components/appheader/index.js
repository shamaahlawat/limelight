import React, { Component } from 'react';
import { Row, Col } from 'antd/lib/grid';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
// import If from '../../components/_if_component';
import './index.scss';
import { icons } from './data/assets/assetsurl';

class AppHeader extends Component {
	constructor() {
		super();
		this.pageChange = this.pageChange.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.state = {
			current_page: 'home',
			yogasala_logo: icons.logo1,
			show: false,
			visible: false
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	handleShow() {
		this.setState({ show: true });
	}
	showModal = () => {
		this.setState({
			visible: true,
		});
	}
	handleOk = () => {
		this.setState({
			visible: false,
		});
	}
	handleCancel = () => {
		this.setState({
			visible: false,
		});
	}

	handleClose() {
		this.setState({ show: false });
	}

	pageChange = (str) => {
		this.setState({
			current_page: str
		});
	};

	handleScroll() {
		if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
			this.setState({
				yogasala_logo: icons.logo
			});
		} else {
			this.setState({
				yogasala_logo: icons.logo1
			});
		}
	}
	render() {
		return (
			<Row className="appHeaderContainer">
				<Col xs={{ span: 24 }}>
					<Navbar inverse collapseOnSelect>
						<Navbar.Header>
							<Navbar.Brand className="is-cursor-ptr"
							>
								{/* <img src="../../data/assets/img/footerLogo.jpg" height="50px" /> */}
								<div className="companyName">LIMELIGHT</div>
							</Navbar.Brand>
							<Navbar.Toggle />
						</Navbar.Header>
						<Navbar.Collapse>
							<Nav pullRight>
								<NavItem className={(this.state.current_page === 'home' ? "active" : "")}
									eventKey={1}
									onClick={() => {
										this.pageChange('home');
										this.props.history.push('/home');
									}}
								>HOME</NavItem>
								<NavItem
									eventKey={1}
									onClick={() => {
										this.pageChange('');
										this.props.history.push('');
									}}
								>BLOG</NavItem>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</Col>
			</Row>
		);
	}
}

export default (AppHeader);

AppHeader.propTypes = {
	history: PropTypes.object,
};
