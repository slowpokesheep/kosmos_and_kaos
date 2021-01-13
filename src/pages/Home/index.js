import { useState } from 'react';

import './styles.scss';

import Base from '../../components/core/Base';
import Search from '../../components/Search'
import SearchResults from '../../components/SearchResults'

export default function Home(props) {

  const [results, setResults] = useState("");

  return (
    <Base>
      <div className="container">
        <div className="container__header">
          <Search
            title={"Myndaleit"}
            placeholder={"Leitarorð"}
            setResults={setResults}
          />
        </div>
        <div className="container__main">
          {results && 
            <SearchResults
              results={results}
            />
          }
        </div>
      </div>
    </Base>
  );
}