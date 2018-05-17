import React, { Component } from 'react';
import { Row, Col, Carousel } from 'antd';
import PropTypes from 'prop-types';
import './index.scss';

// import { icons } from '../../data/assets/assetsurl';

class Home extends Component {
	render() {
		return (
			<Row>
				<Row className="video">
					<video autoPlay muted loop>
						<source src="../../data/product_video.mp4" type="video/mp4" />
					</video>
				</Row>
				<Row className="homeContainer flex flex-ac animated leftIn" style={{marginTop:"-6px"}}>
					<Col md={{ span: 8, offset: 2 }}>
						<div className="heading">Our Technology</div>
						<div className="t-mrgn-30 b-mrgn-20 description">At limelight, our comprehensive technological solutions help industry leading companies and individuals achieve greater success. Our platform has a wide range of features that were created with an aim to help you live differently. In order to empower our users to do better, limelight is continually building upon its technology, so stay in touch to learn about upgrades and other changes. For a free demo, contact us today.</div>
						<a href="testi"><div className="button">Learn More</div></a>
					</Col>
				</Row>
				{/* <Row className="productOverview t-pad-50">
					<Col md={{ span: 12, offset: 6 }}>
						<Col className="mainHeading">PRODUCT OVERVIEW</Col>
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
				</Row> */}
				<Row className="aboutusContainer">
					<Col xs={{ span: 24 }} className="b-pad-50">
						<div className="mainHeading t-pad-20">About Us</div>
						<Col xs={{ span: 12, offset: 4 }} className="pad-20 t-mrgn-50"
							// style={{ background: "#3d9870" }}
							style={{ background: "#ce4439" }}
						>
							<div className="heading">ABOUT US </div>
							<div className="body t-mrgn-20">

								<p>We’re a young and talented group of entrepreneurs and engineers with a groundbreaking idea that we hope will contribute towards a better tomorrow. We provide smart solutions for companies of all sizes and pride ourselves on our unparalleled, dedicated service.</p>
								<br />
								<p>At limelight Innovation, we believe that the right understanding and technological edge can lead companies towards a successful future. We always seek valuable feedback from our clients in order to learn and evolve. Contact us today to set up a meeting with one of our sales representatives or request a demo.</p></div>
						</Col>
					</Col>
				</Row>
				<Row className="ourBlogs">
					<div className="mainHeading t-pad-20">Our Blogs</div>
					<Col xs={{ span: 20, offset: 2 }} md={{ span: 22, offset: 1 }} className={`tb-pad-50 mediaContainer`}>
						<Row gutter={16}>
							<Col xs={24} sm={12} md={8}>
								<div className="bg-white cardContent mrgn-10">
									<div className="backgroundImage" />
									<div className="flex-column flex-jsb pad-20 cardTextContainer">
										<div className="color-tertiary font-md is-font-bold">Here is How to Prepare Your Business Data
                                        for Artificial Intelligence</div>
										<div className="font-sm color-tertiary tb-pad-10">
											Over the recent decade, only a few technologies captured our attention quite as much as artificial
                                            intelligence (AI).</div>
										<div className="font-sm color-tertiary date">01 May 2018 - 30 May 2018</div>
										<div className="font-sm t-pad-10 font-red is-cursor-ptr">Read More</div>
									</div>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row className="openPositions tb-pad-50 lr-pad-20">
					<div className="mainHeading b-pad-30">Open Positions</div>
					<Col xs={24} sm={12} md={8}>
						<div className="bg-white cardContent mrgn-10">
							<div className="backgroundImage" />
							<div className="flex-column flex-jsb pad-20 cardTextContainer">
								<div className="font-red font-30 is-font-bold">Firmware Engineer</div>
								<div className="is-font-bold t-pad-10">Full Time</div>
								<div className="font-sm color-tertiary tb-pad-10">
									We are currently searching for a dynamic Product Development Firmware Engineer to join our Product Development team.
									Working as part of the New Product Development Engineering team, the Product Development Firmware Engineer will be responsible for the design of firmware used in Nonin products.
									The ideal candidate will possess relevant experience with embedded firmware development and a demonstrated track record of innovation.</div>
							</div>
						</div>
					</Col>
					<Col xs={24} sm={12} md={8}>
						<div className="bg-white cardContent mrgn-10">
							<div className="backgroundImage" />
							<div className="flex-column flex-jsb pad-20 cardTextContainer">
								<div className="font-red font-30 is-font-bold">Full stack Developer</div>
								<div className="is-font-bold t-pad-10">Full Time</div>
								<div className="font-sm color-tertiary tb-pad-10">
									Enter information about this job vacancy here. Be sure to include both educational and experiential requirements for the position, as well as details about the type of person you are looking for. To save time and avoid disappointment, add as many details about the position and the recruitment process as possible.</div>
							</div>
						</div>
					</Col>
					<Col xs={24} sm={12} md={8}>
						<div className="bg-white cardContent mrgn-10">
							<div className="backgroundImage" />
							<div className="flex-column flex-jsb pad-20 cardTextContainer">
								<div className="font-red font-30 is-font-bold">Product Designer</div>
								<div className="is-font-bold t-pad-10">Full Time</div>
								<div className="font-sm color-tertiary tb-pad-10">
									We are looking for a UI/UX Designer to turn our software into easy-to-use products for our users and customers.<ul className="t-pad-20">
										<li>1) Gather and evaluate user requirements in collaboration with product manager and business analyst</li>

										<li className="tb-pad-10">2) Illustrate design ideas using storyboards, process flows and sitemaps</li>

										<li>3) Design wireframes, mockups with a mindset to make our user’s life better.</li>
									</ul>
								</div>
							</div>
						</div>
					</Col>
				</Row>
				<Row className="ourTeam">
					<div className="mainHeading">The limelight Innovation Team</div>
					<Col xs={{ span: 20, offset: 2 }} md={{ span: 22, offset: 1 }} className={`tb-pad-50 mediaContainer`}>
						<Row gutter={16}>
							<Col xs={24} sm={12} md={6}>
								<div className="bg-white cardContent flex-column flex-center mrgn-10">
									<div className="backgroundImage" />
									<div className="flex-column flex-center flex-jsb pad-20 cardTextContainer">
										<div className="color-tertiary font-md is-font-bold">TARUN PUROHIT</div>
										<div className="font-grey">Founder & R&D Head</div>
										<div className="font-sm color-tertiary tb-pad-10">
											Tarun is an Electronics Engineer. Passionate about business and innovation, Tarun managed to recruit an excellent team of professionals and win the attention of investors. Give us a call if you want to get in touch with Tarun.</div>
									</div>
								</div>
							</Col>
							<Col xs={24} sm={12} md={6}>
								<div className="bg-white cardContent flex-column flex-center mrgn-10">
									<div className="backgroundImage" />
									<div className="flex-column flex-center flex-jsb pad-20 cardTextContainer">
										<div className="color-tertiary font-md is-font-bold">Suthar Anwarali</div>
										<div className="font-grey">Project Manager</div>
										<div className="font-sm color-tertiary tb-pad-10">
											Electronics Communication Engineer.</div>
									</div>
								</div>
							</Col>
							<Col xs={24} sm={12} md={6}>
								<div className="bg-white cardContent flex-column flex-center mrgn-10">
									<div className="backgroundImage" />
									<div className="flex-column flex-center flex-jsb pad-20 cardTextContainer">
										<div className="color-tertiary font-md is-font-bold">Hitesh Trivedi
                                        </div>
										<div className="font-grey">IT Head</div>
										<div className="font-sm color-tertiary tb-pad-10">
											Master in Computer Science and Technology.</div>
									</div>
								</div>
							</Col>
							<Col xs={24} sm={12} md={6}>
								<div className="bg-white cardContent flex-column flex-center mrgn-10">
									<div className="backgroundImage" />
									<div className="flex-column flex-center flex-jsb pad-20 cardTextContainer">
										<div className="color-tertiary font-md is-font-bold">Shantnu Chaturvedi</div>
										<div className="font-grey">Cretive PCB Designer</div>
										<div className="font-sm color-tertiary tb-pad-10">
											We trust Shantanu with all of our Electronics needs. Eager and curious, Shantanu proves that no technological feat is too big to tackle. From business analysis to technological solutions, you want this hard working innovator in your corner. Get in touch to learn more.</div>
									</div>
								</div>
							</Col>
						</Row>
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
