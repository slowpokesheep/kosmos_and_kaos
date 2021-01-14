import { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';

import './styles.scss';
import { client } from '../../App';

import SearchResults from '../../components/SearchResults'

export default function Search(props) {

    const [query, setQuery] = useState("");                 // Search query
    const [results, setResults] = useState("");             // Results object
    const [items, setItems] = useState([]);                 // Items in the result
    const [totalResults, setTotalResults] = useState("");   // result count to detect no results

    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(false);

    const {
        title,
        placeholder = 'Search...',
    } = props;

    // Setup listeners for infinite scrolling
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Listener for infinite scroll load spinner
    useEffect(() => {
        if (fetching && items.length > 0) fetchNextPage();
    });

    const fetchNextPage = () => {
        setTimeout(async () => {
            const nextPage = results.queries.nextPage[0];

            const res = await client.get("", [
                ["q", nextPage.searchTerms],
                ["searchType", nextPage.searchType],
                ["start", nextPage.startIndex]
            ]);

            setResults(res.data);
            setItems([...items, ...res.data.items]);
            setTotalResults(res.data.searchInformation.totalResults)
            setFetching(false);
        }, 2000);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const res = await client.get("", [
            ["q", query],
            ["searchType", "image"]
        ]);

        // Checking http response
        if (res.ok) {
            setResults(res.data);
            setTotalResults(res.data.searchInformation.totalResults);
            
            // http response may be ok with no results, this ensures that the check
            // items.length > 0 doesn't error
            if (res.data.searchInformation.totalResults === "0") {
                setItems([]);
            } else {
                setItems(res.data.items);
            }
        }
        else {
            setResults("");
            setItems([]);
            setTotalResults("0");
        }
        setLoading(false);
        setQuery("");
    }

    const handleInput = (e) => {
        const input = e.target.value
        setQuery(input);
    }

    // For infinite scrolling
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setFetching(true);
    }

    return (
        <>
            <div className="container__header">
                <div className="search">
                    {title && <h1 className="search__title">
                        {title}
                    </h1>}
                    <form className="search__form" onSubmit={handleSubmit}>
                        <input
                            className="search__input"
                            type="text"
                            placeholder={placeholder}
                            onChange={handleInput}
                            value={query}
                        />
                    </form>
                </div>
            </div>
            <div className="container__main">
                {items.length > 0 &&
                    <div className="results">
                        {items.map((result, key) => {
                            return (
                                <SearchResults
                                    result={result}
                                    key={key}
                                />
                            )
                        })}
                    </div>
                }
                {(loading || (fetching && items.length > 0)) &&
                    <div className="loading">
                        <Loader
                            type="Puff"
                            color="#00BFFF"
                            height={100}
                            width={100}
                            timeout={3000} //3 secs
                        />
                    </div>
                }
                {(!loading && totalResults === "0") &&
                    <div className="results">
                        <h2>Engar Niðurstöður</h2>
                    </div>
                }
            </div>
        </>
    );
}