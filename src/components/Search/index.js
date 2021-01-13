import { useState } from 'react';

import './styles.scss';

export default function Search(props) {

    const [query, setQuery] = useState(""); // Search query

    const {
        title,
        placeholder = 'Search...',
    } = props;

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`Submit: ${query}`)
        setQuery("");
    }

    const handleInput = (e) => {
        const input = e.target.value
        console.log(input)
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