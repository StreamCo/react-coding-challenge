import React from 'react';
import { homePageSubHeading } from '../../constants';
// components
import TopHeading from '../Molecules/TopHeading';

export default () => (
  <div className="full-width padding-top-bottom-1-rem secondary-bg-color secondary-theme-color">
    <TopHeading
      classname="primary-light-color padding-left-10-percent padding-right-10-percent font-subheading"
      text={homePageSubHeading}
    />
  </div>
);
