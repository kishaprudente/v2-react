import React from 'react';
import { Container, Hidden, Row, Col } from 'react-grid-system';

function About() {
	const recentTech = ['JavaScript', 'Flutter', 'Node.js', 'React.js', 'Gatsbyjs', 'Angular'];
	return (
		<section className='section section-about section-about-1'>
			<div className='display-spacing'>
				<Container>
					<Row>
						<Hidden xs sm md>
							<Col lg={5}>
								<div className='about-image'>
									<div
										className='image overlay-image'
										style={{
											backgroundImage: `url(/assets/images/kisha/me.jpg)`,
										}}
									></div>
								</div>
							</Col>
						</Hidden>
						<Col lg={7}>
							<div className='about-content'>
								<header className='el-heading'>
									<h2 className='el-icon'>
										<span className='el-icon-title'>ABOUT ME</span>
									</h2>
									<h3>
										<span>Hello, I am Kisha Prudente.</span>
									</h3>
									<div className='divider divider-1'></div>
									<p>
										I am currently based in New York City working as a Web and
										Mobile Developer and Coding Tutor on the side. I was born
										and raised in the Philippines where I graduated with a
										Bachelor's degree in Software Engineering. I enjoy
										collaborating with individuals who love coding as much as I
										do. My goal is to always build high quality software and web
										applications.
									</p>
									<p>
										I am highly self-motivated, always willing to improve and
										push the boundaries in any way possible. I keep myself up to
										date with recent technologies and concepts to solve
										problems. I appreciate chellenges as they are opportunities
										to explore solutions.
									</p>
									<p>
										When I'm not coding, you can find me watching scary movies,
										traveling, and spending time with my husband and 2 year old
										daughter.
									</p>
								</header>
								<Row className='pt-30'>
									<Col xs={12} sm={12} md={12}>
										<div className='el-card-icon'>
											<div className='el-icon'>
												<span className='el-icon-icon ti-desktop'></span>
											</div>
											<div className='content'>
												<h5>
													Technologies I have been working with recently:
												</h5>
												<Row>
													{recentTech.map((item, index) => (
														<Col key={index} xs={6} sm={6} md={6}>
															<div className='pt-30'>
																<span className='el-icon-icon ti-angle-double-right'></span>{' '}
																{item}
															</div>
														</Col>
													))}
												</Row>
											</div>
										</div>
									</Col>
								</Row>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</section>
	);
}

export default About;
