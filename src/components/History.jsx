import { useState, useEffect } from "react";

import ReactMarkdown from "react-markdown";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { getHistory, clearHistory } from "../services/history";

import "../styles/History.css";



function History() {


    const [history, setHistory] = useState([]);



    const [copied, setCopied] = useState(null);




    useEffect(() => {


        loadHistory();


    }, []);




    function loadHistory(){


        const data = getHistory();


        setHistory(data);


    }





    function deleteHistory(){


        clearHistory();


        setHistory([]);


    }






    async function copyText(text,index){


        await navigator.clipboard.writeText(text);


        setCopied(index);



        setTimeout(()=>{


            setCopied(null);



        },2000);



    }





    return (


        <div className="card">



            <h2>
                📜 AI History
            </h2>




            {

                history.length === 0


                ?


                <p>
                    No history yet.
                </p>


                :


                <>



                    <button onClick={deleteHistory}>

                        🗑 Clear History

                    </button>





                    {


                        history.map((item,index)=>(



                            <div

                                key={index}

                                className="history-item"

                            >



                                <h3>

                                    {item.type}

                                </h3>





                                <p>

                                    <b>
                                        Input:
                                    </b>

                                </p>




                                <p>

                                    {item.input}

                                </p>






                                <p>

                                    <b>
                                        AI Output:
                                    </b>

                                </p>






                                <ReactMarkdown



                                    components={{



                                        code({inline,className,children,...props}){



                                            const match =
                                            /language-(\w+)/.exec(className || "");





                                            return !inline && match ? (



                                                <SyntaxHighlighter


                                                    style={oneDark}


                                                    language={match[1]}


                                                    PreTag="div"



                                                >



                                                    {

                                                        String(children)
                                                        .replace(/\n$/,"")

                                                    }



                                                </SyntaxHighlighter>



                                            )



                                            :



                                            (



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


                                    {item.output}



                                </ReactMarkdown>







                                <button


                                    onClick={()=>copyText(item.output,index)}



                                >



                                    {


                                        copied === index


                                        ?


                                        "✅ Copied"


                                        :


                                        "📋 Copy Output"



                                    }



                                </button>






                                <small>

                                    {item.date}

                                </small>




                            </div>



                        ))


                    }



                </>



            }



        </div>


    )


}



export default History;