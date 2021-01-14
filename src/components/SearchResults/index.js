import './styles.scss';

export default function SearchResults(props) {

    const {
        result
    } = props;

    return (
        <a className="results__item" href={result.link}>
            <img src={result.link} alt={result.title} />
        </a>
    );
}