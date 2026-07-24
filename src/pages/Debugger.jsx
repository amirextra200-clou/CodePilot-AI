import { useState } from "react";

import { askAI } from "../services/ai";
import { saveHistory } from "../services/history";

import AIResponse from "../components/AIResponse";
import Loading from "../components/Loading";

import "../styles/Page.css";


function Debugger() {


    const [error, setError] = useState("");

    const [solution, setSolution] = useState("");

    const [loading, setLoading] = useState(false);



    async function fixError() {


        if (error.trim() === "") {

            return;

        }


        setLoading(true);


        const response = await askAI(error);


        setSolution(response);


        saveHistory(
            "Debugger",
            error,
            response
        );


        setLoading(false);


    }



    function clearAll() {

        setError("");

        setSolution("");

    }



    return (

        <div className="page">


            <h1>
                🐞 AI Debugger
            </h1>


            <p>
                Paste your error and find the solution with AI.
            </p>



            <div className="card">


                <textarea

                    placeholder="Paste your error message here..."

                    value={error}

                    onChange={(e) => setError(e.target.value)}

                ></textarea>



                <button

                    onClick={fixError}

                    disabled={loading}

                >

                    Fix Error 🚀

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

                solution && !loading &&

                <AIResponse

                    title="🤖 AI Solution"

                    response={solution}

                />

            }



        </div>

    )

}


export default Debugger;