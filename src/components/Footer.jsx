import { Link } from "react-router-dom";

import "../styles/Footer.css";


function Footer(){

    return(

        <footer className="footer">


            <div className="footer-container">



                <div className="footer-brand">


                    <h2>
                        🚀 CodePilot AI
                    </h2>


                    <p>
                        Your AI Assistant for Programming.
                        Build, Learn and Debug Code Easily.
                    </p>


                </div>





                <div className="footer-links">


                    <h3>
                        Quick Links
                    </h3>


                    <Link to="/explain">
                        📝 Explain Code
                    </Link>


                    <Link to="/debugger">
                        🐞 Debugger
                    </Link>


                    <Link to="/generator">
                        ⚡ Code Generator
                    </Link>


                    <Link to="/learning">
                        📚 Learning
                    </Link>


                </div>







                <div className="footer-tech">


                    <h3>
                        Built With
                    </h3>


                    <p>
                        ⚛ React
                    </p>


                    <p>
                        🟨 JavaScript
                    </p>


                    <p>
                        🤖 Groq AI
                    </p>


                    <p>
                        ▲ Vercel
                    </p>


                </div>



            </div>





            <div className="footer-bottom">


                <p>
                    © 2026 CodePilot AI. All Rights Reserved.
                </p>


            </div>



        </footer>


    )

}


export default Footer;