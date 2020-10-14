import React from 'react';
// components
import GeneralLayout from '../Components/Templates/GeneralLayout';
import Card from '../Components/Atoms/Card';
import { errorHint } from '../constants';
import { useFetch } from '../utils/useFetch';

export default function Movies() {
  const { payload, loading } = useFetch('../../feed/sample.json', 'movie');

  return (
    <GeneralLayout>
      <div className="card-grid-layout padding-top-bottom-1-rem">
        {loading ? <p>loading ..</p> : payload.map(record => (
          record === errorHint ? <p>{record}</p> : <div><Card text={record.title} isCentralText={false} imageSrc={record.images['Poster Art'].url} /></div>
        ))}
      </div>
    </GeneralLayout>
  );
};
