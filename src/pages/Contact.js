import React, { useState } from 'react';
import { Container, Hidden, Row, Col } from 'react-grid-system';

function Contact() {
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    message: '',
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formValue }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const handleChange = (e) => setFormValue({ [e.target.name]: e.target.value });

  // const [name, email, message] = formValue;

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
                  // name='contact'
                  // method='POST'
                  data-netlify='true'
                  onSubmit={handleSubmit}
                >
                  <Row className='row'>
                    <Col xs={12} sm={12} md={6}>
                      <div className='form-item'>
                        <input
                          type='text'
                          name='name'
                          id='form-item-name'
                          value={formValue.name}
                          onChange={handleChange}
                        />
                        <label htmlFor='form-item-name'>Your Name</label>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                      <div className='form-item'>
                        <input
                          type='email'
                          name='email'
                          id='form-item-email'
                          value={formValue.email}
                          onChange={handleChange}
                        />
                        <label htmlFor='form-item-email'>Your Email</label>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                      <div className='form-item'>
                        <textarea
                          name='message'
                          id='form-item-message'
                          value={formValue.message}
                          onChange={handleChange}
                        ></textarea>
                        <label htmlFor='form-item-message'>Your Message</label>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                      <button
                        type='submit'
                        className='button button-md button-primary'
                      >
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
