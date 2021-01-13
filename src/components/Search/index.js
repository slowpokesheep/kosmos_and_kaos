import { useState } from 'react';

import './styles.scss';

export default function Search(props) {

    const [query, setQuery] = useState(""); // Search query

    const {
        placeholder,
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
        <>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    className="search__input"
                    type="text"
                    placeholder={placeholder}
                    onChange={handleInput}
                    value={query}
                />
            </form>
        </>
    );
}