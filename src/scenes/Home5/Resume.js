import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
// Components
import ProgressBar from '../../components/common/ProgressBar';

const skills = [
  {
    title: 'JavaScript',
    percent: 85,
  },
  {
    title: 'Node.js',
    percent: 85,
  },
  {
    title: 'React.js',
    percent: 90,
  },
  {
    title: 'HTML',
    percent: 90,
  },
  {
    title: 'CSS',
    percent: 70,
  },
  {
    title: 'MongoDB',
    percent: 75,
  },
];
const education = [
  {
    title: 'Columbia University in the City of New York',
    subtitle: 'Full Stack Web Development Coding Boot Camp | New York',
    description:
      'Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.',
    bullets: [],
    date: '(2020-2020)',
    icon: 'ti-crown',
  },
  {
    title: 'Central Philippine University',
    subtitle: 'Bachelor of Science in Software Engineering | Philippines',
    description: `• Member of Philippine Society of Software Engineers `,
    bullets: [
      '• Coursework in:',
      '- Software Development',
      '- Enterprise Application Development',
      '- Software Project Management',
      '- Software Verification and Validation',
      '- Software Engineering Processes',
      '- Principles of Software Architecture',
      '- Software Quality Assurance',
      '- Operating Systems',
      '- Software Configuration Management',
      '- Computer Architecture',
    ],
    date: '(2013-2019)',
    icon: 'ti-ruler-alt-2',
  },
];
const experience = [
  {
    title: 'Web & Mobile Developer',
    subtitle: 'BoomNation | Remote',
    description:
      'Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.',
    date: '(2020-Present)',
    icon: 'ti-pencil-alt',
  },
  {
    title: 'Coding Tutor',
    subtitle: 'Trilogy Education | Remote',
    description:
      'One-on-one tutor offering remote, supplemental educational assistance to students in Trilogy educational bootcamps nationwide.',
    bullets: [
      '- Topics covered: JavaScript, NodeJS, ReactJS, ExpressJS, Bootstrap, HTML5, CSS3, Git, GitHub, SQL, NoSQL, Object Oriented Programing.',
      '- Provide emotional support to students strugling to understand coding fundamentals.',
      ' - Guide students to understand concepts of coding.',
    ],
    date: '(2016-2018)',
    icon: 'ti-heart',
  },
];

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
        <Container>
          <Row>
            {skills.map((item, index) => (
              <Col key={index} sm={6} xl={4}>
                <div className='skills-item'>
                  <ProgressBar label={item.title} percent={item.percent} />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Resume;
