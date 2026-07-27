import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {

    const stats = [

        {
            title: "AI Tools",
            value: "6+",
            icon: "🤖"
        },

        {
            title: "Languages",
            value: "5+",
            icon: "💻"
        },

        {
            title: "Projects",
            value: "2",
            icon: "🚀"
        },

        {
            title: "AI Powered",
            value: "100%",
            icon: "⚡"
        }

    ];


    const actions = [

        {
            title: "Explain Code",
            path: "/explain",
            icon: "📝"
        },

        {
            title: "Debugger",
            path: "/debugger",
            icon: "🐞"
        },

        {
            title: "Code Generator",
            path: "/generator",
            icon: "⚡"
        },

        {
            title: "Projects",
            path: "/projects",
            icon: "🚀"
        }

    ];


    return (

        <div className="dashboard">

            <section className="dashboard-hero">

                <h1>
                    👋 Welcome to CodePilot AI
                </h1>

                <p>
                    Your personal AI assistant for programming, debugging and learning.
                </p>

            </section>



            <section className="stats-grid">

                {

                    stats.map((item,index)=>(

                        <div
                        className="stat-card"
                        key={index}
                        >

                            <div className="stat-icon">
                                {item.icon}
                            </div>

                            <h2>
                                {item.value}
                            </h2>

                            <p>
                                {item.title}
                            </p>

                        </div>

                    ))

                }

            </section>



            <section className="quick-actions">

                <h2>
                    ⚡ Quick Actions
                </h2>

                <div className="actions-grid">

                    {

                        actions.map((item,index)=>(

                            <Link
                            key={index}
                            to={item.path}
                            className="action-card"
                            >

                                <div className="action-icon">

                                    {item.icon}

                                </div>

                                <h3>

                                    {item.title}

                                </h3>

                            </Link>

                        ))

                    }

                </div>

            </section>



            <section className="goal-card">

                <h2>
                    🎯 Daily Goal
                </h2>

                <p>

                    Learn one new programming concept every day and build one project every week.

                </p>

            </section>

        </div>

    );

}

export default Dashboard;