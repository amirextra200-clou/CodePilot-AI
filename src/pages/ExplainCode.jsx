import { useState } from "react";

import { askAI } from "../services/ai";
import { saveHistory } from "../services/history";

import AIResponse from "../components/AIResponse";
import Loading from "../components/Loading";

import "../styles/Page.css";


function ExplainCode() {


    const [code, setCode] = useState("");

    const [answer, setAnswer] = useState("");

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");




    async function explainCode() {


        if (code.trim() === "") {

            setError("⚠️ Please paste your code first.");

            return;

        }


        setError("");

        setLoading(true);



        const response = await askAI(

            `Explain this code step by step.
Tell me:
1. What this code does
2. How it works
3. Any improvements

Code:

${code}`

        );



        setAnswer(response);



        saveHistory(

            "Code Explanation",

            code,

            response

        );



        setLoading(false);


    }





    function clearAll() {


        setCode("");

        setAnswer("");

        setError("");


    }





    return (


        <div className="page">


            <h1>
                📝 AI Code Explain
            </h1>



            <p>
                Paste your programming code and understand it with AI.
            </p>




            <div className="card">



                <textarea


                    placeholder=

                    "Example:function hello(){ console.log('Hello World');}Paste your code here..."


                    value={code}


                    onChange={(e) => setCode(e.target.value)}


                />





                {

                    error &&

                    <p style={{ color: "red" }}>

                        {error}

                    </p>

                }







                <button

                    onClick={explainCode}

                    disabled={loading}

                >


                    {

                        loading

                            ?

                            "🤖 Explaining..."

                            :

                            "📝 Explain Code 🚀"

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

                loading && <Loading />

            }






            {

                answer && !loading &&


                <AIResponse

                    title="🤖 AI Explanation"

                    response={answer}

                />


            }




        </div>


    )

}


export default ExplainCode;