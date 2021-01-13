import { useEffect, useState } from 'react';

import './styles.scss';

import { client } from '../../App';

export default function SearchResults(props) {

    const [items, setItems] = useState([]);
    const [results, setResults] = useState(props.results);

    const [fetching, setFetching] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        setItems(results.items);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!fetching) return;
        fetchNextPage();
      }, [fetching]);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        console.log('Fetch more list items!');
        setFetching(true);
    }

    const fetchNextPage = () => {

        setTimeout(async () => {
            const nextPage = results.queries.nextPage[0];
            
            const res = await client.get("", [
                ["q", nextPage.searchTerms],
                ["searchType", nextPage.searchType],
                ["start", nextPage.startIndex]
            ]);

            setItems([...items, ...res.data.items]);
            setFetching(false);
            setResults(res.data);
        }, 2000);
    }

    if (results.searchInformation.totalResults === "0") {
        return (
            <div className="results">
                <h2>Engar nidurstodur</h2>
            </div>
        )
    }

    return (
        <div className="results">
            {items.map((result, i) => {
                return (
                    <div className="results__item" key={i}>
                        <img src={result.link} alt={result.title} />
                    </div>
                )
            })}
            {fetching && <h2>Fetching</h2>}
        </div>
    );
}