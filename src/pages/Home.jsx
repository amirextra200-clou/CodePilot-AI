import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {

    const tools = [

        {
            icon: "📝",
            title: "Explain Code",
            description: "Understand any code with simple AI explanations.",
            path: "/explain"
        },

        {
            icon: "🐞",
            title: "AI Debugger",
            description: "Find and fix programming errors quickly.",
            path: "/debugger"
        },

        {
            icon: "⚡",
            title: "Code Generator",
            description: "Generate code from your ideas.",
            path: "/generator"
        },

        {
            icon: "💡",
            title: "Project Ideas",
            description: "Discover creative programming projects.",
            path: "/ideas"
        },

        {
            icon: "📚",
            title: "Learning",
            description: "Learn HTML, CSS, JavaScript, React and PHP.",
            path: "/learning"
        },

        {
            icon: "❌",
            title: "Common Errors",
            description: "Learn errors and their solutions.",
            path: "/errors"
        }

    ];



   return (

    <div className="home">

        <section className="hero">

            <h1>
                🚀 CodePilot AI
            </h1>

            <p>
                The Ultimate AI Assistant for Developers
            </p>

            <div className="hero-buttons">

                <Link to="/explain">
                    <button>📝 Explain Code</button>
                </Link>

                <Link to="/generator">
                    <button>⚡ Generate Code</button>
                </Link>

            </div>

        </section>


        {/* ===== NEW STATS SECTION ===== */}

        <section className="stats-section">

            <h2>📊 CodePilot AI Stats</h2>

            <div className="stats-grid">

                <div className="stat-card">
                    <h3>6+</h3>
                    <p>AI Tools</p>
                </div>

                <div className="stat-card">
                    <h3>5+</h3>
                    <p>Programming Languages</p>
                </div>

                <div className="stat-card">
                    <h3>2</h3>
                    <p>Live Projects</p>
                </div>

                <div className="stat-card">
                    <h3>100%</h3>
                    <p>AI Powered</p>
                </div>

            </div>

        </section>


        <section className="features-strip">

            <div>⚡ Fast AI Responses</div>

            <div>🔒 Secure</div>

            <div>🤖 Powered by Groq AI</div>

            <div>⚛ Built with React</div>

        </section>


        {/* ===== DEVELOPER TOOLS ===== */}

        <section className="tools-section">

            <h2>
                Developer Tools
            </h2>

            <div className="tools-grid">

                {

                    tools.map((tool, index) => (

                        <Link
                            key={index}
                            to={tool.path}
                            className="tool-card"
                        >

                            <div className="tool-icon">
                                {tool.icon}
                            </div>

                            <h3>
                                {tool.title}
                            </h3>

                            <p>
                                {tool.description}
                            </p>

                            <span>
                                Open Tool →
                            </span>

                        </Link>

                    ))

                }

            </div>

        </section>

    </div>

);

}

export default Home;