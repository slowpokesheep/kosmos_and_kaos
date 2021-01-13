import { useState } from 'react';

import './styles.scss';
import { client } from '../../App';

export default function Search(props) {

    const [query, setQuery] = useState(""); // Search query

    const {
        title,
        placeholder = 'Search...',
        setResults
    } = props;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await client.get("", [
            ["q", query],
            ["searchType", "image"]
        ]);

        setResults(res.data);
        setQuery("");
    }

    const handleInput = (e) => {
        const input = e.target.value
        setQuery(input);
    }

    return (
        <div className="search">
            {title && <h1 className="">
                {title}
            </h1>}
            <form className="search_form" onSubmit={handleSubmit}>
                <input
                    className="search__input"
                    type="text"
                    placeholder={placeholder}
                    onChange={handleInput}
                    value={query}
                />
            </form>
        </div>
    );
}