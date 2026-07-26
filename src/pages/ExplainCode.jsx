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



    async function explainCode() {


        if (code.trim() === "") {

            return;

        }


        setLoading(true);


        const response = await askAI(code);


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

    }



    return (

        <div className="page">


            <h1>
                📝 Code Explain
            </h1>


            <p>
                Paste your code and understand it easily with AI.
            </p>



            <div className="card">


                <textarea

                    placeholder="Paste your code here..."

                    value={code}

                    onChange={(e) => setCode(e.target.value)}

                ></textarea>



                <button

                    onClick={explainCode}

                    disabled={loading}

                >

                    Explain Code 🚀

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
