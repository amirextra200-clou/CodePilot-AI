export async function askAI(question) {


    try {


        const response = await fetch(
            "/api/ask",
            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    question: question

                })

            }
        );



        // Check server response

        if (!response.ok) {

            throw new Error("AI server error");

        }



        const data = await response.json();



        if (!data.answer) {

            return "🤖 AI could not generate a response. Please try again.";

        }



        return data.answer;



    } catch(error) {


        console.log("AI Error:", error);


        return "❌ Unable to connect with AI service. Please check your internet and try again.";


    }


}