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

            alert("⚠ Please enter an error message first.");

            return;

        }

        setLoading(true);

        try {

            const response = (await askAI(error)).trim();

            setSolution(response);

            if (response) {

                saveHistory(
                    "Debugger",
                    error,
                    response
                );

            }

        }

        catch (err) {

            setSolution(
                "❌ Something went wrong while fixing your error. Please try again."
            );

            console.log(err);

        }

        finally {

            setLoading(false);

        }

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
                Paste your error and let AI explain the problem and suggest a solution.
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

                    🔍 Debug with AI

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

    );

}


export default Debugger;