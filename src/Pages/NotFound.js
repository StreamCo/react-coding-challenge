import React from 'react';
// components
import GeneralLayout from '../Components/Templates/GeneralLayout';

export default function NotFound() {
  return (
    <GeneralLayout>
      <p className="padding-top-bottom-1-rem">Whoops, page not found (404)...</p>
    </GeneralLayout>
  );
};
