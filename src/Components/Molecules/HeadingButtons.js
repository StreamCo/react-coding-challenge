import React from 'react';
import Button from '../Atoms/Button';

export default function HeadingButtons() {
  const login = () => { console.log('redirect to login page'); };
  const startFreeTrial = () => { console.log('logics for redirect to free trial page'); };

  return (
    <div className="padding-right-10-percent">
      <Button
        id="loginButton"
        type="button"
        classname="primary-button"
        buttonEvent={login}
        text={"Log in"}
      />
      <Button
        id="freeTrailButton"
        type="button"
        classname="secondary-button"
        buttonEvent={startFreeTrial}
        text="Start your free trial"
      />
    </div>
  );
};
