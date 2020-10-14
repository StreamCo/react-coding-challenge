import React from 'react';
import { Link } from 'react-router-dom';
// components
import GeneralLayout from '../Components/Templates/GeneralLayout';
import placeholderImage from '../../assets/placeholder.png';
import Card from '../Components/Atoms/Card';

export default function Home() {
  return (
    <GeneralLayout>
      <div className="card-grid-layout padding-top-bottom-1-rem">
        <Link to="/series"><Card text="Series" isCentralText={true} imageSrc={placeholderImage} /></Link>
        <Link to="/movies"><Card text="Movies" isCentralText={true} imageSrc={placeholderImage} /></Link>
      </div>
    </GeneralLayout>
  );
};
