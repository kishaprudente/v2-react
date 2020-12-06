import React from 'react';
import Slider from 'react-slick';
import { Container } from 'react-grid-system';

import { useRouteMatch } from 'react-router-dom';
// Components
import Headline from '../components/common/Headline';
// content
import projects from '../content/projects';

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
