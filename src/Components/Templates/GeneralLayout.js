import React from 'react';
import styled from 'styled-components';
// components
import Navbar from '../Organisms/Navbar';
import Headbar from '../Organisms/Headbar';
import Footer from '../Organisms/Footer';

const Layout = styled.div`
  outline: none;
`;

export default ({ children }) => (
  <Layout>
    <Navbar />
    <Headbar />
    <div className="padding-left-10-percent padding-right-10-percent">{ children }</div>
    <Footer />
  </Layout>
);
