import { useState } from "react";

import { askAI } from "../services/ai";
import { saveHistory } from "../services/history";

import AIResponse from "../components/AIResponse";
import Loading from "../components/Loading";

import "../styles/Page.css";


function CodeGenerator() {


    const [idea, setIdea] = useState<string>("");

    const [language, setLanguage] =
        useState<string>("JavaScript");

    const [code, setCode] =
        useState<string>("");

    const [loading, setLoading] =
        useState<boolean>(false);

    const [error, setError] =
        useState<string>("");


    async function generateCode(): Promise<void> {


        if (idea.trim() === "") {

            setError(
                "⚠️ Please enter your project idea first."
            );

            return;

        }


        setError("");

        setLoading(true);


        try {

const prompt = `
You are CodePilot AI, an expert ${language} developer.

The user wants you to generate code for this project:

${idea}

IMPORTANT CODE GENERATION RULES:

1. Generate COMPLETE working code.
2. Never truncate the code.
3. Never use placeholders such as "...", "rest of the code", or "add your code here".
4. If the project requires multiple files, provide ALL required files.
5. Before every code block, clearly write the exact filename.
6. Put every code file inside a proper Markdown code block.
7. Do not give a long tutorial or unnecessary introduction.
8. Do not give practice questions.
9. Do not include a "What you learned" section.
10. Do not include unnecessary explanations after the code.
11. Add short useful comments inside the code where they help understanding.
12. Follow modern development best practices.
13. Keep the code clean, readable, and beginner-friendly.
14. Make sure imports and file paths are correct.
15. Make sure the generated files work together as one complete project.
16. If React is requested, use modern React with functional components and hooks.
17. Do not use Create React App unless the user explicitly asks for it.
18. For React projects, prefer Vite-compatible code.
19. If TypeScript is requested or appropriate, use .tsx/.ts files.
20. If CSS is required, provide the complete CSS file.
21. If JavaScript is required, provide the complete JavaScript file.
22. If HTML is required, provide the complete HTML file.
23. Do not stop generating until all required code has been provided.
24. The final response should focus primarily on the actual code.

Selected language/framework:
${language}

User project request:
${idea}
`;



            const response = await askAI(prompt);


            setCode(response);


            if (response) {

                saveHistory(
                    "Code Generator",
                    `${language}: ${idea}`,
                    response
                );

            }


        } catch (error: unknown) {

            setCode(
                "❌ Failed to generate code. Try again."
            );

            console.log(error);

        } finally {

            setLoading(false);

        }

    }


    function clearAll(): void {

        setIdea("");

        setCode("");

        setError("");

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


                <select

                    value={language}

                    onChange={(e) =>
                        setLanguage(e.target.value)
                    }

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

                    placeholder="Example: Create a weather app with API integration"

                    value={idea}

                    onChange={(e) =>
                        setIdea(e.target.value)
                    }

                />


                {

                    error &&

                    <p style={{ color: "red" }}>

                        {error}

                    </p>

                }


                <button

                    onClick={generateCode}

                    disabled={loading}

                >

                    {

                        loading

                            ? "🤖 Generating..."

                            : "⚡ Generate Code"

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