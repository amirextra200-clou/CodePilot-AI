import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import searchData from "../data/searchData";
import "../styles/Navbar.css";

function Navbar() {

    const [search, setSearch] = useState("");

    const navigate = useNavigate();


    const results = searchData.filter((item) =>

        item.title.toLowerCase().includes(search.toLowerCase())

    );


    function openPage(path) {

        navigate(path);

        setSearch("");

    }


    return (

        <nav className="navbar">

            <Link
                to="/"
                className="logo"
            >
                🚀 CodePilot AI
            </Link>



            <div className="nav-links">

                <Link to="/">
                    Home
                </Link>

                <Link to="/explain">
                    Explain
                </Link>

                <Link to="/debugger">
                    Debugger
                </Link>

                <Link to="/generator">
                    Generator
                </Link>

                <Link to="/ideas">
                    Ideas
                </Link>

                <Link to="/errors">
                    Errors
                </Link>

                <Link to="/learning">
                    Learning
                </Link>

                <Link to="/history">
                    History
                </Link>

            </div>



            <div className="search-box">

                <input

                    type="text"

                    placeholder="🔍 Search tools..."

                    value={search}

                    onChange={(e) => setSearch(e.target.value)}

                />



                {

                    search !== "" &&

                    (

                        <div className="search-results">

                            {

                                results.length > 0

                                    ?

                                    results.map((item, index) => (

                                        <div

                                            key={index}

                                            className="search-item"

                                            onClick={() => openPage(item.path)}

                                        >

                                            {item.title}

                                        </div>

                                    ))

                                    :

                                    <div className="search-item">

                                        ❌ No Results Found

                                    </div>

                            }

                        </div>

                    )

                }

            </div>

        </nav>

    )

}

export default Navbar;