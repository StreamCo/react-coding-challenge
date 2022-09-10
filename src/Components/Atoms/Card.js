import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 140px;
  height: 200px;
  position: relative;
  padding-bottom: .6rem;
 
  b, span {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;  
    background-color: #1e1e1e;
  }
`;


export default function Card({text, isCentralText, imageSrc}) {
  return (
    <>
      <CardWrapper>
        {isCentralText && <b>{text}</b>}
        <img src={imageSrc} alt={text} />
      </CardWrapper>
      <span>Popular {text}</span>
    </>
  )
}
