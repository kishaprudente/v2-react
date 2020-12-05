import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'react-grid-system';
// Components
import Headline from '../components/common/Headline';

const testimonial1 = [
  {
    name: 'Ji Yoon Kim',
    type: 'Kisha worked with Ji Yoon in the same group',
    post: 'Full Stack Web Developer',
    avatar: '/assets/images/people/1.jpg',
    content:
      'Kisha is a highly motivated, passionate developer who does not shy away from challenges. I’ve been fortunate enough to watch Kisha at her best during our time in the Columbia Engineering Coding Bootcamp and have been inspired by her dedication to not only learning but mastering new technologies outside of course requirements, such as authentication with Passport. During our months together, she was always willing to assist other classmates during office hours, even after completing her own assignments, and she remains a highly knowledgeable and dependable teammate even after graduation as we continue to develop projects together. She has demonstrated immense patience, persistence, and success in the high intensity bootcamp setting during these unprecedented times, which is indicative of the innate skillsets she possesses as well as her genuine, hardworking character. Self-driven, curious, and compassionate, Kisha would be a truly valuable addition to any professional environment.',
  },
  {
    name: 'Kaitlyn L Rodriguez',
    type: 'Kisha worked with Kaitlyn L in the same group',
    post: 'Full Stack Web Developer',
    avatar: '/assets/images/people/2.jpg',
    content:
      'Kisha is an incredible resource to any team she will join. She has excellent interpersonal skills and is so helpful to anyone who ask. She also is extremely quick in understanding a problem and thinking through the next steps and then explaining to others. I have no doubt Kisha will contribute tremendously to any team she finds herself in. I personally have worked with her on our final project at Columbia Engineering Bootcamp as well as projects post Bootcamp.',
  },
  {
    name: 'Justin Piñero',
    type: 'Justin was Kisha’s teacher',
    post: 'Course Assistant at Columbia University',
    avatar: '/assets/images/people/3.jpg',
    content:
      'During the entire time I had the pleasure of teaching Kisha she not only demonstrated an exceptional capacity to rapidly grasp the material but she was attentive and helpful to every other student in the class. She always took time to help anyone working with her, ensuring they understood the material. Her dedication to the cohort was unquestionable, she stayed for office hours every single class without fail even when she had already completed all of her assignments. In fact she would propose completing assignments using more advanced techniques and new technologies to challenge herself and other students. She is an extraordinarily hard worker, a natural engineer, and a kind and nurturing teacher.',
  },
];

// const testimonial2 = [
//   {
//     name: 'Kourosh Neyestani',
//     type: 'Partners',
//     post: 'Web Developer',
//     avatar: '/assets/images/people/4.jpg',
//     content:
//       "Dude, your stuff is the bomb! I love your system. It's all good. I was treated like royalty. Keep up the excellent work. I will definitely be ordering again!",
//   },
//   {
//     name: 'Rabie Maxwell',
//     type: 'Partners',
//     post: 'Web Designer',
//     avatar: '/assets/images/people/5.jpg',
//     content:
//       "You've saved our business! I can't say enough about you. We were treated like royalty. We can't understand how we've been living without you.",
//   },
//   {
//     name: 'James Maxwell',
//     type: 'Partners',
//     post: 'SEO Manager',
//     avatar: '/assets/images/people/6.jpg',
//     content:
//       "Dude, your stuff is the bomb! Thank you so much for your help. You've saved our business! Just what I was looking for. It's exactly what I've been looking for.",
//   },
// ];

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
                {testimonial1.map((item, index) => (
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
