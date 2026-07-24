import Groq from "groq-sdk";


export default async function handler(req, res) {


    if (req.method !== "POST") {

        return res.status(405).json({
            message: "Method not allowed"
        });

    }



    try {


        const { question } = req.body;



        const groq = new Groq({

            apiKey: process.env.GROQ_API_KEY

        });



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

                    role:"user",

                    content: question

                }

            ],


            model:"llama-3.1-8b-instant",


            max_tokens:500


        });



        res.status(200).json({

            answer: response.choices[0].message.content

        });



    } catch(error){


        res.status(500).json({

            answer:"❌ AI Error: " + error.message

        });


    }


}