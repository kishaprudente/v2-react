import React, { useEffect } from 'react';
import { Route, Redirect, useRouteMatch } from 'react-router-dom';
// Sections
import Projects from './Projects';
import About from './About';
import Intro from './Intro';
import Header from './Header';
import Resume from './Resume';
import Contact from './Contact';
import Testimonial from './Testimonial';
import BlogSinglePost from './BlogSinglePost';
// Components
import Helmet from '../components/common/Helmet';
import Switch from '../components/common/Switch';
import RedirectAs404 from '../components/common/RedirectAs404';

const routes = [
  {
    path: '/intro',
    component: <Intro />,
  },
  {
    path: '/about',
    component: <About />,
  },
  {
    path: '/resume',
    component: <Resume />,
  },
  {
    path: '/projects',
    component: <Projects />,
  },
  {
    path: '/projects/single-project',
    component: <BlogSinglePost />,
  },
  {
    path: '/testimonial',
    component: <Testimonial />,
  },
  {
    path: '/contact',
    component: <Contact />,
  },
];

function Home() {
  let { path } = useRouteMatch();

  useEffect(() => {
    document.documentElement.className = 'home-5 skin-5';
    return () => {
      document.documentElement.className = '';
    };
  });

  return (
    <div>
      <Helmet title='KP | Portfolio' description='My personal website' />
      <Header />
      <Switch>
        <Route path={path} exact>
          <Redirect
            to={{
              pathname: `${path}/intro`.replace(/([^:])(\/\/+)/g, '$1/'),
            }}
          />
        </Route>
        {routes.map((item, index) => (
          <Route key={index} path={`${path}${item.path}`} exact>
            {item.component}
          </Route>
        ))}
        <Route component={RedirectAs404} />
      </Switch>
    </div>
  );
}

export default Home;
