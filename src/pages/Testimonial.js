import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'react-grid-system';
// Components
import Headline from '../components/common/Headline';
import testimonials from '../content/testimonials';

function Testimonial() {
  const sliderSettings = {
    dots: true,
    speed: 500,
    arrows: false,
    infinite: true,
  };
  return (
    <section className='section section-testimonial section-testimonial-1'>
      <div className='display-spacing'>
        <Container className='container'>
          <Headline
            label='testimonial'
            title='What People Say'
            divider_1={true}
            position='center'
          />
          <Row className='mb--15'>
            <Col lg={12} xl={12} className='mb-15'>
              <Slider className='el-slider' {...sliderSettings}>
                {testimonials.map((item, index) => (
                  <div
                    key={index}
                    className='testimonial-item testimonial-clients'
                  >
                    <div className='type'>
                      <span>{item.type}</span>
                    </div>
                    <p>{item.content}</p>
                    <div className='author'>
                      <img
                        src={item.avatar}
                        alt='Relevant textual alternative'
                      />
                      <h4>{item.name}</h4>
                      <h5>{item.post}</h5>
                    </div>
                  </div>
                ))}
              </Slider>
            </Col>
            {/* <Col lg={6} xl={6} className='mb-15'>
              <Slider className='el-slider' {...sliderSettings}>
                {testimonial2.map((item, index) => (
                  <div
                    key={index}
                    className='testimonial-item testimonial-clients'
                  >
                    <div className='type'>
                      <span>{item.type}</span>
                    </div>
                    <p>{item.content}</p>
                    <div className='author'>
                      <img
                        src={item.avatar}
                        alt='Relevant textual alternative'
                      />
                      <h4>{item.name}</h4>
                      <h5>{item.post}</h5>
                    </div>
                  </div>
                ))}
              </Slider>
            </Col> */}
          </Row>
          <div className='div-center text-center lets-work'>
            <button type='button' className='button button-md button-primary'>
              let's work together
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Testimonial;
