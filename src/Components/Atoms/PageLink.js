import React from 'react';
import { Link } from 'react-router-dom';

export default function PageLink({link, text}) {
  return (
    <Link to={link}>
      <b className="font-md">{text}</b>
      {" "}
      <b className="padding-left-md padding-right-md">
        {text !== 'Manage Account' && "|" }
      </b>
    </Link>
  );
};
