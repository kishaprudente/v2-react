import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'react-grid-system';

import { Link, useRouteMatch } from 'react-router-dom';
// Components
import Headline from '../components/common/Headline';
// content
import projects from '../content/projects';

const posts = [
  {
    title: 'What has happened to all of the Design ideas?',
    image: '/assets/images/blog/5-1.jpg',
    date: 'May 15th, 2019',
    link: '/single-project',
    icon: 'ti-light-bulb',
  },
  {
    title: 'The Best Sale Marketer Of The Next Year',
    image: '/assets/images/blog/5-2.jpg',
    date: 'May 18th, 2019',
    link: '/single-project',
    icon: 'ti-mobile',
  },
  {
    title: 'What gets in the way of greate Stategy',
    image: '/assets/images/blog/5-3.jpg',
    date: 'May 21h, 2019',
    link: '/single-project',
    icon: 'ti-paint-bucket',
  },
  {
    title: 'How to create great logo for your Business',
    image: '/assets/images/blog/5-4.jpg',
    date: 'May 21th, 2019',
    link: '/single-project',
    icon: 'ti-light-bulb',
  },
];

function Blog() {
  let sliderSettings = {
    dots: true,
    speed: 500,
    arrows: false,
    infinite: false,
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerPadding: 30,
    draggable: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { path } = useRouteMatch();

  return (
    <section className='section section-blog section-blog-1'>
      <div className='display-spacing'>
        <Container className='container'>
          <Headline
            label='Projects'
            title="Let's See My Work"
            divider_1={true}
            position='center'
          />
          <Slider className='el-slider el-slider-plr--15' {...sliderSettings}>
            {projects.map((item, index) => (
              <div key={index} className='post-item'>
                {/* <Link
                  to={`${path}${item.link}`.replace(/([^:])(\/\/+)/g, '$1/')}
                > */}
                <div
                  className='post-image'
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                {/* </Link> */}
                <div className='post-content'>
                  <div className='el-icon'>
                    <span className={`el-icon-icon ${item.icon}`}></span>
                  </div>
                  <div className='post-data'>
                    <h4 className='post-title'>
                      {/* <Link
                        to={`${path}${item.link}`.replace(
                          /([^:])(\/\/+)/g,
                          '$1/'
                        )}
                      > */}
                      {item.title}
                      {/* </Link> */}
                    </h4>

                    {item.techStack}
                    <div className='post-date'>
                      <div className='pt-15'>
                        <a href={item.repo}>
                          <i className='ti-github'></i>
                        </a>{' '}
                        <a href={item.demo}>
                          <i className='ti-new-window'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Container>
      </div>
    </section>
  );
}

export default Blog;
