import React from 'react';
import PageLink from '../Atoms/PageLink';

export default function FooterLinks() {
  const links = [{link: '/', text: 'Home'}, {link: '/terms-conditions', text: 'Terms and Conditions'}, {link: '/privacy-policy', text: 'Privacy Policy'}, {link: '/collection-statement', text: 'Collection Statement'}, {link: '/help', text: 'Help'}, {link: '/manage-account', text: 'Manage Account'}];
  return (
    <div>
      {links.map(({ link, text }) => <PageLink key={text} link={link} text={text} />)}
    </div>
  );
};
