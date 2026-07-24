import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";


dotenv.config();


const app = express();


app.use(cors());

app.use(express.json());



const groq = new Groq({

    apiKey: process.env.GROQ_API_KEY

});




app.get("/", (req, res) => {

    res.send("CodePilot AI Server Running 🚀");

});





app.post("/ask", async (req, res) => {


    try {


        const { question } = req.body;



        const response = await groq.chat.completions.create({


            messages: [

                {

                    role: "system",

                    content:
                        `
        You are CodePilot AI.

        Rules:
        - Explain programming concepts in simple language.
        - Give examples with code.
        - For debugging, explain error reason and fix step by step.
        - For code generation, provide clean and readable code.
        - Help students learn programming.
        `

                },


                {

                    role: "user",

                    content: question

                }

            ],


            model: "llama-3.1-8b-instant",


            max_tokens: 500


        });




        const answer = response.choices[0].message.content;



        res.json({

            answer: answer

        });



    }

    catch (error) {


        console.log(error);



        res.json({

            answer: "❌ AI Error: " + error.message

        });


    }


});





const PORT = 5000;


app.listen(PORT, () => {


    console.log(`Server running on port ${PORT}`);


});