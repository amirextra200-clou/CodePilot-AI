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

            alert("⚠ Please enter a project idea first.");

            return;

        }

        setLoading(true);

        try {

            const prompt = `
Generate clean, readable and beginner-friendly code for this idea:

${idea}

Include explanation and comments where necessary.
            `;

            const response = (await askAI(prompt)).trim();

            setCode(response);

            if (response) {

                saveHistory(
                    "Code Generator",
                    idea,
                    response
                );

            }

        }

        catch (err) {

            setCode(
                "❌ Failed to generate code. Please try again."
            );

            console.log(err);

        }

        finally {

            setLoading(false);

        }

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
                Describe your idea and let AI generate clean code for you.
            </p>


            <div className="card">

                <textarea

                    placeholder="Example: Create a React weather app with search functionality"

                    value={idea}

                    onChange={(e) => setIdea(e.target.value)}

                ></textarea>


                <button

                    onClick={generateCode}

                    disabled={loading}

                >

                    ⚡ Generate with AI

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

    );

}


export default CodeGenerator;