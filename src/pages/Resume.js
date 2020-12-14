import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
// Components
import ProgressBar from '../components/common/ProgressBar';
// content
import education from '../content/education';
import experience from '../content/experience';
import skills from '../content/skills';
import certificates from '../content/certificates';

function Resume() {
	return (
		<section className='section section-resume section-resume-1'>
			<div className='display-spacing'>
				<header className='el-heading el-heading-center'>
					<div className='el-icon'>
						<h2 className='el-icon-title'>
							<span>RESUME</span>
						</h2>
					</div>
					<h3>Education & Experience</h3>
					<div className='divider divider-1-reverse divider-1-1'></div>
					<div className='divider divider-1-reverse divider-1-2'></div>
					<div className='div-center text-center lets-work'>
						<a target='_blank' href='https://www.visualcv.com/kishaprudente/'>
							<button type='button' className='button button-md button-primary'>
								Download my CV
							</button>
						</a>
					</div>
				</header>
				<Container className='mb-spacing'>
					<Row>
						<Col md={6}>
							<div className='resume-row'>
								<h4 className='resume-title'>Education</h4>
								<ul>
									{education.map((item, index) => (
										<li key={index}>
											<div className='resume-item'>
												<div className='resume-head'>
													<div className='el-icon'>
														<span
															className={`el-icon-icon ${item.icon}`}
														></span>
													</div>
													<h5>{item.title}</h5>
													<h6>{item.subtitle}</h6>
												</div>
												<div className='resume-body'>
													<p>{item.description}</p>
													{item.bullets
														? item.bullets.map((bullet, index) => (
																<p key={index}>{bullet}</p>
														  ))
														: null}
												</div>
											</div>
										</li>
									))}
								</ul>
							</div>
						</Col>
						<Col md={6}>
							<div className='resume-row'>
								<h4 className='resume-title'>Experience</h4>
								<ul>
									{experience.map((item, index) => (
										<li key={index}>
											<div className='resume-item'>
												<div className='resume-head'>
													<div className='el-icon'>
														<span
															className={`el-icon-icon ${item.icon}`}
														></span>
													</div>
													<h5>{item.title}</h5>
													<h6>
														{item.subtitle} <small>{item.date}</small>
													</h6>
												</div>
												<div className='resume-body'>
													<p>{item.description}</p>
													{item.bullets
														? item.bullets.map((bullet, index) => (
																<p key={index}>{bullet}</p>
														  ))
														: null}
												</div>
											</div>
										</li>
									))}
								</ul>
							</div>
						</Col>
					</Row>
				</Container>
				<header className='el-heading el-heading-center'>
					<h3>Certificates & Skills</h3>
					<div className='divider divider-1-reverse divider-1-1'></div>
					<div className='divider divider-1-reverse divider-1-2'></div>
				</header>
				<Container>
					<Row>
						<Col md={6}>
							<div className='resume-row'>
								<h4 className='resume-title'>Certificates</h4>
								{/* <Row> */}
								<ul>
									{certificates.map((item, index) => (
										<li key={index}>
											<Col>
												<div className='resume-item'>
													<div className='resume-head'>
														<div className='el-icon'>
															<span
																className={`el-icon-icon ${item.icon}`}
															></span>
														</div>
														<h5>{item.title}</h5>
														<h6>
															{item.organization}{' '}
															<small>{item.date}</small>
														</h6>
													</div>
												</div>
											</Col>
										</li>
									))}
								</ul>
								{/* </Row> */}
							</div>
						</Col>
						<Col md={6}>
							<div className='resume-row'>
								<div className='mb-40'>
									<h4 className='resume-title'>Skills</h4>
								</div>
								<Row>
									{skills.map((item, index) => (
										<Col key={index} md={6} lg={6}>
											<div className='skills-item'>
												<ProgressBar
													label={item.title}
													percent={item.percent}
												/>
											</div>
										</Col>
									))}
								</Row>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</section>
	);
}

export default Resume;
