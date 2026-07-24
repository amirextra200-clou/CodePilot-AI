import { useState } from "react";

import { askAI } from "../services/ai";
import { saveHistory } from "../services/history";

import AIResponse from "../components/AIResponse";
import Loading from "../components/Loading";

import "../styles/Page.css";


function CodeGenerator() {


    const [idea, setIdea] = useState("");

    const [code, setCode] = useState("");

    const [loading, setLoading] = useState(false);



    async function generateCode() {


        if (idea.trim() === "") {

            return;

        }


        setLoading(true);


        const response = await askAI(idea);


        setCode(response);


        saveHistory(
            "Code Generator",
            idea,
            response
        );


        setLoading(false);


    }



    function clearAll() {

        setIdea("");

        setCode("");

    }



    return (

        <div className="page">


            <h1>
                ⚡ AI Code Generator
            </h1>


            <p>
                Describe your idea and generate code with AI.
            </p>



            <div className="card">


                <textarea

                    placeholder="Example: Create a React login page..."

                    value={idea}

                    onChange={(e) => setIdea(e.target.value)}

                ></textarea>



                <button

                    onClick={generateCode}

                    disabled={loading}

                >

                    Generate Code 🚀

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