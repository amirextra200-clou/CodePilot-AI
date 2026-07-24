import Groq from "groq-sdk";


export default async function handler(req, res) {


    if (req.method !== "POST") {

        return res.status(405).json({
            message: "Method not allowed"
        });

    }


    try {


        const { question } = req.body;


        if (!question) {

            return res.status(400).json({

                answer: "Please enter a question."

            });

        }



        const groq = new Groq({

            apiKey: process.env.GROQ_API_KEY

        });



        const response = await groq.chat.completions.create({


            messages: [

                {

                    role: "system",

                    content:
                    `
You are CodePilot AI, a friendly AI teacher for students.

Your goal:
- Teach students, not just give answers.
- Explain concepts in very simple language.
- Assume the student is a beginner unless they ask for advanced explanation.
- Use examples from real life when possible.
- Break difficult topics into small steps.

For programming questions:
- Explain what the code does.
- Give clean and readable code examples.
- Explain important lines of code.
- Mention common mistakes.

For debugging:
- First explain why the error happened.
- Then show the fix.
- Explain the corrected code.

For code generation:
- Generate clean code.
- Explain how it works.
- Suggest improvements.

For study topics:
- Give short notes.
- Highlight important points.
- Add practice questions when helpful.

Always encourage learning.
Do not only provide the final answer; help the student understand.
`

                },


                {

                    role: "user",

                    content: question

                }

            ],


            model: "llama-3.1-8b-instant",


            max_tokens: 800


        });



        const answer = response.choices[0].message.content;



        res.status(200).json({

            answer: answer

        });



    } catch(error) {


        console.log(error);


        res.status(500).json({

            answer: "❌ AI Error: " + error.message

        });


    }


}