import React from 'react';
import { copyright } from '../../constants';
// components
import FooterLinks from '../Molecules/FooterLinks';
import SocialAds from '../Molecules/SocialAds';

export default function Footer() {
  return (
    <footer className="primary-dark-bg-color padding-left-10-percent padding-right-10-percent">
      <div className="padding-top-bottom-3-rem">
        <FooterLinks />
        <p className="font-md padding-top-bottom-point-5-rem">{copyright}</p>
        <SocialAds />
      </div>
    </footer>
  );
};
