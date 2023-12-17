import React, { useState } from 'react';

function Nav({ onSearch }) {
    const [showSearchInput, setShowSearchInput] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchIconClick = () => {
        setShowSearchInput(!showSearchInput);
    };

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand d-none d-lg-block" href="#">Tienda Electrónica</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Categoría 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Categoría 2</a>
                    </li>
                </ul>
                <div className="navbar-nav ml-auto d-flex align-items-center">
                    {showSearchInput && (
                        <form className="form-inline my-2 my-lg-0" onSubmit={handleSearchSubmit}>
                            <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar" value={searchQuery} onChange={handleSearchInputChange} />
                        </form>
                    )}
                    <button className="btn btn-outline-primary my-2 my-sm-0" onClick={handleSearchIconClick}><i className="fas fa-search"></i></button>
                    <a className="nav-item nav-link" href="#"><i className="fas fa-shopping-cart"></i></a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
