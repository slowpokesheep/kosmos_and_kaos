import React from 'react';

import './styles.scss';

import Base from '../../components/core/Base';
import Search from '../../components/Search'

export default function Home(props) {
  return (
    <Base>
      <div className="container">
        <div className="container__header">
          <Search
            title={"Myndaleit"}
            placeholder={"Leitarorð"}
          />
        </div>
        <div className="container__main">
          {/* todo results */}
        </div>
      </div>
    </Base>
  );
}