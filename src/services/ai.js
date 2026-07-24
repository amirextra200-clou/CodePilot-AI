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



        const data = await response.json();



        return data.answer;



    } catch(error) {


        return "❌ Server connection error. Please try again.";


    }


}