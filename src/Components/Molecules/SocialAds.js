import React from 'react';
import FBIcon from '../../../assets/social/facebook-white.svg';
import InstagramIcon from '../../../assets/social/instagram-white.svg';
import TwitterIcon from '../../../assets/social/twitter-white.svg';
import AppStoreIcon from '../../../assets/store/app-store.svg';
import GoogleStoreIcon from '../../../assets/store/play-store.svg';
import MicrosoftStoreIcon from '../../../assets/store/windows-store.svg';

export default function SocialAds() {
  return (
    <div className="flex-space-between">
      <div className="social-icons"><FBIcon /><InstagramIcon /><TwitterIcon /></div>
      <div className="company-icons">
        <AppStoreIcon /><GoogleStoreIcon /><MicrosoftStoreIcon />
      </div>
    </div>
  );
};
