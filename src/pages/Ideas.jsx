import "../styles/Page.css";


function Projects() {


    const projects = [


        {

            title: "🤖 AI Study Helper",

            description:
            "AI-powered learning platform for students. Generate notes, quizzes, study plans and AI explanations.",

            status: "🟢 Live",

            tech:[
                "⚛ React",
                "🟨 JavaScript",
                "🤖 Groq AI",
                "▲ Vercel"
            ],

            live: "https://YOUR-AI-STUDY-HELPER.vercel.app",

            github: "https://github.com/YOUR_USERNAME/AI-STUDY-HELPER"

        },



        {

            title: "🤖 CodePilot AI",

            description:
            "AI assistant for programmers. Explain code, debug errors, generate code and help students learn programming.",

            status: "🟢 Live",

            tech:[
                "⚛ React",
                "🟨 JavaScript",
                "🤖 Groq AI",
                "▲ Vercel"
            ],

            live:"https://code-pilot-ai-orpin.vercel.app",

            github:"https://github.com/amirextra200-clou/CodePilot-AI"

        },



        {

            title:"🌦 Weather App",

            description:
            "Modern weather application with live forecast and beautiful user interface.",

            status:"🚧 Coming Soon",

            tech:[
                "⚛ React",
                "🌐 Weather API",
                "🎨 CSS"
            ],

            live:"#",

            github:"#"

        },



        {

            title:"👨‍💻 Portfolio Website",

            description:
            "Professional developer portfolio showcasing projects, skills and achievements.",

            status:"🚧 Coming Soon",

            tech:[
                "⚛ React",
                "🟨 JavaScript",
                "🎨 CSS"
            ],

            live:"#",

            github:"#"

        }


    ];




    return(


        <div className="page">


            <h1>
                🚀 My Projects
            </h1>



            <p>
                Explore my projects, live demos, technologies and source code.
            </p>




            {

                projects.map((project,index)=>(


                    <div
                    className="project-card"
                    key={index}
                    >



                        <h2>
                            {project.title}
                        </h2>




                        <p>
                            {project.description}
                        </p>




                        <div className="project-status">

                            {project.status}

                        </div>





                        <div className="tech-stack">


                            <h4>
                                Built With:
                            </h4>



                            <div className="tech-list">


                                {

                                    project.tech.map((item,index)=>(

                                        <span key={index}>
                                            {item}
                                        </span>

                                    ))

                                }


                            </div>


                        </div>






                        <div className="project-buttons">



                            <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            >

                                <button>
                                    🌐 Live Demo
                                </button>

                            </a>





                            <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            >

                                <button>
                                    💻 GitHub
                                </button>

                            </a>




                        </div>



                    </div>


                ))

            }



        </div>


    )


}



export default Projects;