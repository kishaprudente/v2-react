import React from 'react';
import { Helmet } from 'react-helmet';

function PageHelmet(props) {
  const { title, description, image, children } = props;

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name='description' content={description} /> && (
        <meta property='og:image' content={image} />
      )}
      {children}
    </Helmet>
  );
}

export default PageHelmet;
