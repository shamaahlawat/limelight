import React, { Component } from 'react';
import { Row, Col } from 'antd/lib/grid';
import { connect } from 'react-redux';
import './index.scss';
import PropTypes from 'prop-types';
import { icons } from '../../data/assets/assetsurl';

function mapStateToProps(state) {
    return { page_details: state.page_details };
}

class Footer extends Component {

    render() {
        return (
            <Row>
                <Col md={{ span: 24 }}>
                    <div className="footerContainer">
                        <Row>
                            <Col md={{ span: 12, offset: 6 }}
                                className="flex-center flex-column footer">
                                <div className="logo">
                                    <a href="/home"><img src={icons.footer_logo} height="100px" alt="" /></a>
                                </div>
                                <p>Today, many people today are looking to leave the daily grind for something that feeds their passion. People do not want to retire at the age of 60 (or older) to look back on life and feel they have wasted it.</p>
                                <div className="flex socialMedia">
                                    <a href="https://www.facebook.com/tarun.purohit2"><img className="lr-pad-10" src={icons.facebook} alt="" /></a>
                                    <a href="https://www.instagram.com/_.tarun._purohit/?hl=en"><img className="lr-pad-10" src={icons.instagram} alt="" /></a>
                                    <a href="https://twitter.com/yogasalain"><img className="lr-pad-10" src={icons.twitter} alt="" /></a>
                                </div>
                                <div className="copyRight">
                                    LIMELIGHT © 2018 | All Rights Reserved
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default connect(mapStateToProps)(Footer);

Footer.propTypes = {
    history: PropTypes.object,
};