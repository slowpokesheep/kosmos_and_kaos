import React from 'react';

import Header from '../Header';

export default function Base(props) {
  const { children } = props;

  return (
    <>
    <Header />
      <div className="main">
        {children}
      </div>
    </>
  )
}