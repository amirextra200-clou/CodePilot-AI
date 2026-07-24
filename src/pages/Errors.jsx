import "../styles/Page.css";


function Errors(){


    const errors = [


        {
            error:"❌ Cannot read properties of undefined",
            solution:"Check if the value exists before using it."
        },


        {
            error:"❌ Module not found",
            solution:"Check your import path or install the missing package."
        },


        {
            error:"❌ Unexpected token",
            solution:"Check your syntax, brackets, and commas."
        },


        {
            error:"❌ Undefined variable",
            solution:"Make sure the variable is declared before using it."
        },


        {
            error:"❌ Infinite loop",
            solution:"Check your loop condition and make sure it can stop."
        }


    ];



    return(


        <div className="page">


            <h1>
                ❌ Common Programming Errors
            </h1>


            <p>
                Learn common errors and how to solve them.
            </p>




            {

                errors.map((item,index)=>(


                    <div className="card" key={index}>


                        <h2>
                            {item.error}
                        </h2>


                        <p>
                            ✅ Solution: {item.solution}
                        </p>


                    </div>


                ))

            }



        </div>


    )

}


export default Errors;