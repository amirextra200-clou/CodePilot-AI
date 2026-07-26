import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";


function Sidebar(){

    return(

        <aside className="sidebar">


            <h2>
                🛠 Developer Tools
            </h2>


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



            <h2 className="learning-title">
                📚 Learning
            </h2>



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

    )

}


export default Sidebar;