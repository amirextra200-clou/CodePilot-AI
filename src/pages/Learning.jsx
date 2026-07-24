import "../styles/Page.css";


function Learning(){


    const courses = [

        {
            title:"🌐 HTML",
            description:"Learn website structure and elements."
        },

        {
            title:"🎨 CSS",
            description:"Learn styling and design."
        },

        {
            title:"⚡ JavaScript",
            description:"Learn programming logic and interactivity."
        },

        {
            title:"⚛ React",
            description:"Learn modern frontend development."
        },

        {
            title:"🐘 PHP",
            description:"Learn backend development basics."
        }

    ];



    return(

        <div className="page">


            <h1>
                📚 Programming Learning
            </h1>


            <p>
                Learn programming concepts step by step.
            </p>



            {

                courses.map((course,index)=>(


                    <div className="card" key={index}>


                        <h2>
                            {course.title}
                        </h2>


                        <p>
                            {course.description}
                        </p>



                        <button>

                            Start Learning 🚀

                        </button>


                    </div>


                ))

            }



        </div>

    )

}


export default Learning;