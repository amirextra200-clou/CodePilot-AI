import { useState, useEffect } from "react";

import ReactMarkdown from "react-markdown";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import {
    getHistory,
    clearHistory
} from "../services/history";

import "../styles/History.css";


function History(){


    const [history,setHistory] = useState([]);

    const [copied,setCopied] = useState(null);



    useEffect(()=>{

        loadHistory();

    },[]);



    function loadHistory(){

        const data = getHistory();

        setHistory(data);

    }





    function clearAll(){

        clearHistory();

        setHistory([]);

    }






    function deleteOne(index){


        const updated = history.filter(

            (_,i)=> i !== index

        );



        localStorage.setItem(

            "codepilot_history",

            JSON.stringify(updated)

        );



        setHistory(updated);


    }







    async function copyText(text,index){


        try{


            await navigator.clipboard.writeText(text);


            setCopied(index);



            setTimeout(()=>{


                setCopied(null);


            },2000);



        }


        catch(error){

            console.log(
                "Copy Error:",
                error
            );

        }


    }







    return(


        <div className="history-container">



            <div className="history-header">


                <h2>
                    📜 AI History
                </h2>




                {

                    history.length > 0 &&


                    <button

                    className="clear-btn"

                    onClick={clearAll}

                    >

                        🗑 Clear All


                    </button>


                }



            </div>







            {

                history.length === 0 ?


                (


                    <div className="empty-history">


                        <h3>
                            📭 No History Found
                        </h3>


                        <p>
                            Ask AI questions and your conversations will appear here.
                        </p>


                    </div>


                )


                :



                history.map((item,index)=>(



                    <div

                    className="history-card"

                    key={index}

                    >






                        <div className="history-top">


                            <h3>

                                {item.type}

                            </h3>




                            <button

                            className="delete-btn"

                            onClick={()=>deleteOne(index)}

                            >

                                ❌


                            </button>



                        </div>









                        <div className="history-input">


                            <h4>
                                📝 Question
                            </h4>



                            <p>

                                {item.input}

                            </p>



                            <button

                            onClick={()=>copyText(item.input,index+"q")}

                            >

                            {

                            copied === index+"q"

                            ?

                            "✅ Copied"

                            :

                            "📋 Copy Question"

                            }


                            </button>



                        </div>









                        <div className="history-output">


                            <h4>
                                🤖 AI Answer
                            </h4>






                            <ReactMarkdown


                            components={{



                                code({

                                    inline,

                                    className,

                                    children,

                                    ...props

                                }){



                                    const match =

                                    /language-(\w+)/.exec(

                                        className || ""

                                    );





                                    if(!inline && match){


                                        return(



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



                                        );


                                    }





                                    return(


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




                        </div>









                        <div className="history-footer">



                            <button


                            onClick={()=>copyText(item.output,index)}

                            >


                            {


                            copied === index


                            ?


                            "✅ Copied"


                            :


                            "📋 Copy Answer"


                            }



                            </button>





                            <small>

                                🕒 {item.date}

                            </small>



                        </div>





                    </div>




                ))



            }



        </div>



    )


}


export default History;