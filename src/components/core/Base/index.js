import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

export default function Base(props) {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}