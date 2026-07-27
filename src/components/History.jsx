import { useState, useEffect } from "react";

import ReactMarkdown from "react-markdown";

import {
    getHistory,
    clearHistory
} from "../services/history";

import "../styles/History.css";


function History(){

    const [history,setHistory] = useState([]);

    const [copied,setCopied] = useState(null);



    useEffect(()=>{

        setHistory(getHistory());

    },[]);



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

        await navigator.clipboard.writeText(text);

        setCopied(index);


        setTimeout(()=>{

            setCopied(null);

        },2000);

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
                            Your AI questions and answers will appear here.
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

                        </div>






                        <div className="history-output">

                            <h4>
                                🤖 AI Answer
                            </h4>


                            <ReactMarkdown>

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