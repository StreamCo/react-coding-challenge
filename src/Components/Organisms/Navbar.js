import React from 'react';
import { homePageHeading } from '../../constants';
// components
import TopHeading from '../Molecules/TopHeading';
import HeadingButtons from '../Molecules/HeadingButtons';

export default () => (
  <div className="flex-space-between full-width primary-theme-bg-color padding-top-bottom-1-rem bg-gradient box-shadow">
    <TopHeading
      classname={"primary-light-color padding-left-10-percent font-heading text-shadow"}
      text={homePageHeading} />
    <HeadingButtons />
  </div>
);
