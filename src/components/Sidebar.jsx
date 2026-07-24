import { Link } from "react-router-dom";
import "../styles/Sidebar.css";


function Sidebar(){

    return(

        <aside className="sidebar">


            <h2>
                🛠 Developer Tools
            </h2>


            <Link to="/explain">
                📝 Code Explain
            </Link>


            <Link to="/debugger">
                🐞 Debugger
            </Link>


            <Link to="/generator">
                ⚡ Code Generator
            </Link>


            <Link to="/ideas">
                💡 Ideas
            </Link>


            <Link to="/errors">
                ❌ Errors
            </Link>


            <Link to="/history">
                📜 History
            </Link>



            <h2 className="learning-title">
                📚 Learning
            </h2>



            <Link to="/learning">
                🌐 HTML / CSS / JavaScript
            </Link>


            <Link to="/learning">
                ⚛ React
            </Link>


            <Link to="/learning">
                🐘 PHP
            </Link>


        </aside>

    )

}


export default Sidebar;