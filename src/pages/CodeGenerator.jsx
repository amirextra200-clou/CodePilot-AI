import { useState } from "react";

import { askAI } from "../services/ai";
import { saveHistory } from "../services/history";

import AIResponse from "../components/AIResponse";
import Loading from "../components/Loading";

import "../styles/Page.css";


function CodeGenerator(){


    const [idea,setIdea] = useState("");

    const [language,setLanguage] = useState("JavaScript");

    const [code,setCode] = useState("");

    const [loading,setLoading] = useState(false);

    const [error,setError] = useState("");





    async function generateCode(){


        if(idea.trim()===""){


            setError(
                "⚠️ Please enter your project idea first."
            );


            return;

        }



        setError("");

        setLoading(true);




        try{


            const prompt = `

You are an expert ${language} developer.

Generate clean, beginner-friendly and production-ready code.

Project Idea:

${idea}


Requirements:

1. Give complete code.
2. Add useful comments.
3. Explain important parts.
4. Follow best practices.

Language:
${language}

            `;




            const response = await askAI(prompt);



            setCode(response);




            if(response){


                saveHistory(

                    "Code Generator",

                    `${language}: ${idea}`,

                    response

                );


            }




        }

        catch(error){


            setCode(
                "❌ Failed to generate code. Try again."
            );


            console.log(error);


        }


        finally{


            setLoading(false);


        }


    }





    function clearAll(){


        setIdea("");

        setCode("");

        setError("");


    }





    return(


        <div className="page">



            <h1>
                ⚡ AI Code Generator
            </h1>



            <p>
                Describe your idea and generate code with AI.
            </p>




            <div className="card">





                <select

                    value={language}

                    onChange={(e)=>setLanguage(e.target.value)}

                >


                    <option>
                        JavaScript
                    </option>


                    <option>
                        Python
                    </option>


                    <option>
                        React
                    </option>


                    <option>
                        PHP
                    </option>


                    <option>
                        HTML/CSS
                    </option>


                </select>







                <textarea


                    placeholder=
                    "Example: Create a weather app with API integration"


                    value={idea}


                    onChange={(e)=>setIdea(e.target.value)}


                />






                {

                    error &&

                    <p style={{color:"red"}}>

                        {error}

                    </p>

                }







                <button

                    onClick={generateCode}

                    disabled={loading}

                >


                    {

                        loading

                        ?

                        "🤖 Generating..."

                        :

                        "⚡ Generate Code"

                    }


                </button>






                <button

                    onClick={clearAll}

                    disabled={loading}

                >

                    🗑 Clear

                </button>





            </div>






            {

                loading && <Loading/>

            }







            {

                code && !loading &&


                <AIResponse

                    title="🤖 Generated Code"

                    response={code}

                />


            }





        </div>


    )


}



export default CodeGenerator;