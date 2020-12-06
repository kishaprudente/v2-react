import React from 'react';
import { Container, Hidden, Row, Col } from 'react-grid-system';

function Contact() {
  return (
    <section className='section section-contact section-contact-1'>
      <div className='display-spacing'>
        <Container>
          <Row>
            <Hidden xs sm md>
              <Col lg={5}>
                <div className='contact-image'>
                  <div
                    className='image overlay-image'
                    style={{
                      backgroundImage: `url(/assets/images/kisha/Typing.gif)`,
                    }}
                  ></div>
                </div>
              </Col>
            </Hidden>
            <Col lg={7}>
              <div className='contact-content'>
                <header className='el-heading'>
                  <h2 className='el-icon'>
                    <span className='el-icon-title'>CONTACT ME</span>
                  </h2>
                  <h3>
                    <span>Get in touch with me today.</span>
                  </h3>
                  <div className='divider divider-1'></div>
                  <Row>
                    <Col xs={12} sm={3} md={6}>
                      <div className='el-icon'>
                        <span className='el-icon-icon  ti-mobile'></span>
                      </div>
                      <p>+1(929)536-8908</p>
                    </Col>
                    <Col xs={12} sm={3} md={6}>
                      <div className='el-icon'>
                        <span className='el-icon-icon  ti-email'></span>
                      </div>
                      <p>kmalozada@gmail.com</p>
                    </Col>
                  </Row>
                </header>
                <form
                  className='form form-1 pt-15'
                  method='POST'
                  data-netlify='true'
                >
                  <Row className='row'>
                    <Col xs={12} sm={12} md={6}>
                      <div className='form-item'>
                        <input type='text' id='form-item-name' />
                        <label htmlFor='form-item-name'>Your Name</label>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                      <div className='form-item'>
                        <input type='email' id='form-item-email' />
                        <label htmlFor='form-item-email'>Your Email</label>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                      <div className='form-item'>
                        <textarea id='form-item-message'></textarea>
                        <label htmlFor='form-item-message'>Your Message</label>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                      <button className='button button-md button-primary'>
                        Send Message
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Contact;
