import './styles.scss';

import Base from '../../components/core/Base';
import Search from '../../components/Search'

export default function Home(props) {

  return (
    <Base>
      <div className="container">
        <Search
          title={"Myndaleit"}
          placeholder={"Leitarorð"}
        />
      </div>
    </Base>
  );
}