import "../styles/Page.css";
import { HugeiconsIcon } from "@hugeicons/react";
import { Rocket01Icon } from "@hugeicons/core-free-icons";

function Ideas() {


    const ideas = [

        {
            title: "🤖 AI Study Helper",
            description: "Create an AI tool that helps students learn."
        },


        {
            title: "🌦 Weather App",
            description: "Build an app that shows weather information."
        },


        {
            title: "💼 Portfolio Website",
            description: "Create a personal developer portfolio."
        },


        {
            title: "💬 Chat Application",
            description: "Build a real-time messaging application."
        },


        {
            title: "🛒 E-commerce Website",
            description: "Create an online shopping platform."
        }

    ];



    return (

        <div className="page">


            <h1>
                💡 Programming Ideas
            </h1>


            <p>
                Find creative project ideas and build amazing applications.
            </p>



            {

                ideas.map((idea, index) => (


                    <div className="card" key={index}>


                        <h2>
                            {idea.title}
                        </h2>


                        <p>
                            {idea.description}
                        </p>


                        <button>
                            Start Building <HugeiconsIcon icon={Rocket01Icon} size={32} color="currentColor" strokeWidth={1.5} />
                        </button>

                    </div>


                ))

            }



        </div>

    )

}


export default Ideas;