import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  outline: none;
  border: none;
  padding: .5rem 1rem;
  cursor: pointer;
  font-weight: bold;
`;

export default function Button({ id, classname, type, text, buttonEvent }) {
  return (
    <ButtonWrapper
      id={id}
      type={type}
      className={classname}
      onClick={buttonEvent}
    >
      {text}
    </ButtonWrapper>
  );
};
