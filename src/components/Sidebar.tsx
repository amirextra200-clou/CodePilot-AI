import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

function Sidebar({ isOpen, onClose }: SidebarProps) {
    return (
        <aside
            className={`sidebar ${
                isOpen ? "sidebar-open" : ""
            }`}
        >
            <div className="sidebar-header">
                <h2>🚀 CodePilot AI</h2>

                <button
                    className="sidebar-close"
                    onClick={onClose}
                    aria-label="Close menu"
                >
                    ✕
                </button>
            </div>

            <h3>🛠 Developer Tools</h3>

            <NavLink
                to="/dashboard"
                onClick={onClose}
            >
                📊 Dashboard
            </NavLink>

            <NavLink
                to="/explain"
                onClick={onClose}
            >
                📝 Code Explain
            </NavLink>

            <NavLink
                to="/debugger"
                onClick={onClose}
            >
                🐞 Debugger
            </NavLink>

            <NavLink
                to="/generator"
                onClick={onClose}
            >
                ⚡ Code Generator
            </NavLink>

            <NavLink
                to="/Projects"
                onClick={onClose}
            >
                🚀 Projects
            </NavLink>

            <NavLink
                to="/errors"
                onClick={onClose}
            >
                ❌ Errors
            </NavLink>

            <NavLink
                to="/history"
                onClick={onClose}
            >
                📜 History
            </NavLink>

            <h3 className="learning-title">
                📚 Learning
            </h3>

            <NavLink
                to="/learning"
                onClick={onClose}
            >
                🌐 HTML / CSS / JavaScript
            </NavLink>

            <NavLink
                to="/learning"
                onClick={onClose}
            >
                ⚛ React
            </NavLink>

            <NavLink
                to="/learning"
                onClick={onClose}
            >
                🐘 PHP
            </NavLink>
        </aside>
    );
}

export default Sidebar;