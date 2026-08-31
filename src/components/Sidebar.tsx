import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";
function Sidebar() {
    return (
        <aside className="sidebar">
            <h2>
                🚀 CodePilot AI
            </h2>

            <h3>
                🛠 Developer Tools
            </h3>

            <NavLink to="/dashboard">
                📊 Dashboard
            </NavLink>

            <NavLink to="/explain">
                📝 Code Explain
            </NavLink>

            <NavLink to="/debugger">
                🐞 Debugger
            </NavLink>

            <NavLink to="/generator">
                ⚡ Code Generator
            </NavLink>

            <NavLink to="/Projects">
                🚀 Projects
            </NavLink>

            <NavLink to="/errors">
                ❌ Errors
            </NavLink>

            <NavLink to="/history">
                📜 History
            </NavLink>

            <h3 className="learning-title">
                📚 Learning
            </h3>

            <NavLink to="/learning">
                🌐 HTML / CSS / JavaScript
            </NavLink>

            <NavLink to="/learning">
                ⚛ React
            </NavLink>

            <NavLink to="/learning">
                🐘 PHP
            </NavLink>
        </aside>
    );
}
export default Sidebar;