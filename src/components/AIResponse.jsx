import { useState } from "react";

import ReactMarkdown from "react-markdown";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import "../styles/AIResponse.css";


function AIResponse({ title, response }) {


    const [copied, setCopied] = useState(false);



    async function copyResponse() {

        try {

            await navigator.clipboard.writeText(response);

            setCopied(true);


            setTimeout(() => {

                setCopied(false);

            }, 2000);


        }

        catch (error) {

            console.log("Copy Error:", error);

        }

    }




    return (


        <div className="ai-card">



            <div className="ai-header">


                <h2>
                    {title}
                </h2>



                <button

                    className="copy-btn"

                    onClick={copyResponse}

                >

                    {

                        copied

                            ?

                            "✅ Copied"

                            :

                            "📋 Copy"

                    }


                </button>



            </div>





            <div className="ai-body">


                <ReactMarkdown


                    components={{



                        h1({ children }) {

                            return (

                                <h1>
                                    {children}
                                </h1>

                            )

                        },



                        h2({ children }) {

                            return (

                                <h2>
                                    {children}
                                </h2>

                            )

                        },



                        code({ inline, className, children, ...props }) {


                            const match =
                                /language-(\w+)/.exec(className || "");



                            if (!inline && match) {


                                return (


                                    <div className="code-box">


                                        <div className="code-title">

                                            💻 {match[1]}

                                        </div>



                                        <SyntaxHighlighter

                                            style={oneDark}

                                            language={match[1]}

                                            PreTag="div"

                                        >

                                            {

                                                String(children)
                                                    .replace(/\n$/, "")

                                            }


                                        </SyntaxHighlighter>


                                    </div>


                                );


                            }



                            return (

                                <code

                                    className="inline-code"

                                    {...props}

                                >

                                    {children}


                                </code>

                            );


                        }



                    }}


                >


                    {response}


                </ReactMarkdown>


            </div>



        </div>


    );

}

export default AIResponse;