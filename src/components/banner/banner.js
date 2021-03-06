import React from 'react';
import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';

const Banner = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 360px)' });
  const text = 'We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens';
  return (
    <section className="banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7">
            <h1 className="banner__title">Test assignment for Frontend Developer position</h1>
            <p className="banner__text">
              {isMobile ? `${text.split('.', 1)[0]}.` : text}
            </p>
            <Link
              className="button"
              to="form"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              Sing up now
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
