import React, { Component } from 'react';
import { Row, Col, Carousel } from 'antd';
import PropTypes from 'prop-types';
import './index.scss';

class Home extends Component {
    render() {
        return (
            <Row>
                <Row className="homeContainer flex flex-ac animated leftIn">
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="heading">TheGem Goggles</div>
                        <div className="t-mrgn-30 b-mrgn-20 description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look.</div>
                        <a href="testi"><div className="button">Buy now</div></a>
                    </Col>
                </Row>
                <Row className="productOverview t-pad-50">
                    <Col md={{ span: 12, offset: 6 }} className="is-text-center">
                        <Col className="product">PRODUCT OVERVIEW</Col>
                        <Col className="t-mrgn-20 aboutProduct">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable variations of passages of Lorem Ipsum available.
                    </Col>
                    </Col>
                    <Col md={{ span: 24 }} className="rightGlass flex flex-ac">
                        <Col md={{ span: 6, offset: 4 }} className="productDescription flex-column flex-jsb">
                            <div>Optically correct Dual-Vented Lens with F3 Anti-fog coating</div>
                            <div>Injection Molded Polycarbonate under extreme pressure to create a precise contour of optically correct geometry</div>
                        </Col>
                    </Col>
                    <Col md={{ span: 24 }} className="leftGlass flex flex-ac">
                        <Col md={{ span: 6, offset: 17 }} className="productDescription flex-column flex-jsb">
                            <div>Optically correct Dual-Vented Lens with F3 Anti-fog coating</div>
                            <div>Injection Molded Polycarbonate under extreme pressure to create a precise contour of optically correct geometry</div>
                        </Col>
                    </Col>
                </Row>
                <Row className="testimonial flex flex-column flex-jc" id="testi">
                    <Carousel autoplay>
                        <Row>
                            <Col className="flex-center flex-column" md={{ span: 18, offset: 3 }}>
                                <div className="profile" />
                                <div className="t-mrgn-20 name">SHAMA</div>
                                <div className="profession sansPro">SOCIAL WORKER</div>
                                <div className="t-mrgn-30 description sansPro">Want to convert hope of poor people in  reality..Proud to be an Indian.
                            Want to convert hope of poor people in  reality..Proud to be an Indian.
                            Want to convert hope of poor people in  reality..Proud to be an Indian.
                            Want to convert hope of poor people in  reality..Proud to be an Indian.
                            </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="flex-center flex-column" md={{ span: 18, offset: 3 }}>
                                <div className="profile tarun" />
                                <div className="t-mrgn-20 name">TARUN</div>
                                <div className="profession sansPro">CEO,LIMELIGHT</div>
                                <div className="t-mrgn-30 description sansPro">Want to convert hope of poor people in  reality..Proud to be an Indian.
                            Want to convert hope of poor people in  reality..Proud to be an Indian.
                            Want to convert hope of poor people in  reality..Proud to be an Indian.
                            Want to convert hope of poor people in  reality..Proud to be an Indian.
                            </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="flex-center flex-column" md={{ span: 18, offset: 3 }}>
                                <div className="profile ali" />
                                <div className="t-mrgn-20 name">ALI</div>
                                <div className="profession sansPro">SHAYAR,PGL</div>
                                <div className="t-mrgn-30 description sansPro">Want to convert hope of poor people in  reality..Proud to be an Indian.
                            Want to convert hope of poor people in  reality..Proud to be an Indian.
                            Want to convert hope of poor people in  reality..Proud to be an Indian.
                            Want to convert hope of poor people in  reality..Proud to be an Indian.
                            </div>
                            </Col>
                        </Row>
                    </Carousel>
                </Row>
            </Row>
        );
    }
}

Home.propTypes = {
    history: PropTypes.object,
};
export default (Home);
