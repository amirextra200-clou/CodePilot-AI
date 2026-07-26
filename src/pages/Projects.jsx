import "../styles/Page.css";


function Projects() {


    const projects = [


        {

            title: "🤖 AI Study Helper",

            description:
            "AI-powered learning platform for students. Generate notes, quizzes, study plans and AI explanations.",

            status: "🟢 Live",

            category: "AI Education Platform",

            level: "Advanced",

            tech:[
                "⚛ React",
                "🟨 JavaScript",
                "🤖 AI",
                "▲ Vercel"
            ],

            live: "https://YOUR-AI-STUDY-HELPER.vercel.app",

            github: "https://github.com/YOUR_USERNAME/AI-STUDY-HELPER",

            completed:true

        },



        {

            title: "🤖 CodePilot AI",

            description:
            "AI assistant for programmers. Explain code, debug errors, generate code and help students learn programming.",

            status: "🟢 Live",

            category: "AI Developer Tool",

            level: "Advanced",

            tech:[
                "⚛ React",
                "🟨 JavaScript",
                "🤖 Groq AI",
                "▲ Vercel"
            ],

            live:"https://code-pilot-ai-orpin.vercel.app",

            github:"https://github.com/amirextra200-clou/CodePilot-AI",

            completed:true

        },



        {

            title:"🌦 Weather App",

            description:
            "Modern weather application with live forecast, location search and beautiful interface.",

            status:"🚧 Coming Soon",

            category:"Web Application",

            level:"Intermediate",

            tech:[
                "⚛ React",
                "🌐 Weather API",
                "🎨 CSS"
            ],

            completed:false

        },



        {

            title:"👨‍💻 Portfolio Website",

            description:
            "Professional developer portfolio showcasing projects, skills and achievements.",

            status:"🚧 Coming Soon",

            category:"Personal Branding",

            level:"Intermediate",

            tech:[
                "⚛ React",
                "🟨 JavaScript",
                "🎨 CSS"
            ],

            completed:false

        },



        {

            title:"💬 Chat Application",

            description:
            "Real-time messaging application with modern UI and communication features.",

            status:"🚧 Coming Soon",

            category:"Full Stack App",

            level:"Advanced",

            tech:[
                "⚛ React",
                "🔥 Firebase",
                "🟨 JavaScript"
            ],

            completed:false

        }


    ];





    return(


        <div className="page">


            <h1>
                🚀 My Projects
            </h1>



            <p>
                Explore my projects, technologies and development journey.
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





                        <div className="project-info">


                            <p>
                                📂 Category:
                                <b> {project.category}</b>
                            </p>



                            <p>
                                📈 Level:
                                <b> {project.level}</b>
                            </p>



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



                            {

                            project.completed ?


                            <>


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


                            </>



                            :


                            <button disabled>

                                🚧 In Development

                            </button>


                            }



                        </div>




                    </div>


                ))

            }





        </div>


    )


}



export default Projects;