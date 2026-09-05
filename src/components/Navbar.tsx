import {
    NavLink,
    Link,
    useNavigate,
} from "react-router-dom";

import { useState } from "react";

import searchData from "../data/searchData";

import "../styles/Navbar.css";

interface NavbarProps {
    onMenuClick: () => void;
}

function Navbar({ onMenuClick }: NavbarProps) {
    const [search, setSearch] = useState<string>("");

    const navigate = useNavigate();

    const results = searchData.filter((item) =>
        item.title
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    function openPage(path: string): void {
        navigate(path);

        setSearch("");
    }

    return (
        <nav className="navbar">

            {/* Mobile menu button */}

            <button
                className="mobile-menu-btn"
                onClick={onMenuClick}
                aria-label="Open menu"
            >
                ☰
            </button>

            <Link
                to="/"
                className="logo"
            >
                🚀 CodePilot AI
            </Link>

            <div className="nav-links">

                <NavLink to="/">
                    🏠 Home
                </NavLink>

                <NavLink to="/explain">
                    📝 Explain
                </NavLink>

                <NavLink to="/debugger">
                    🐞 Debugger
                </NavLink>

                <NavLink to="/generator">
                    ⚡ Generator
                </NavLink>

                <NavLink to="/Projects">
                    🚀 Projects
                </NavLink>

                <NavLink to="/learning">
                    📚 Learning
                </NavLink>

                <NavLink to="/history">
                    📜 History
                </NavLink>

                <NavLink to="/dashboard">
                    📊 Dashboard
                </NavLink>

            </div>

            <div className="search-box">

                <input
                    placeholder="🔍 Search tools..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                />

                {search && (
                    <div className="search-results">

                        {results.length > 0 ? (

                            results.map(
                                (item, index) => (
                                    <div
                                        key={index}
                                        className="search-item"
                                        onClick={() =>
                                            openPage(
                                                item.path
                                            )
                                        }
                                    >
                                        {item.title}
                                    </div>
                                )
                            )

                        ) : (

                            <div className="search-item">
                                ❌ No Results
                            </div>

                        )}

                    </div>
                )}

            </div>

        </nav>
    );
}

export default Navbar;