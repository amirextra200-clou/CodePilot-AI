
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

app.get("/", (req, res) => {
    res.send("CodePilot AI Server Running 🚀");
});

app.post("/ask", async (req, res) => {
    try {
        const { question } = req.body;

        if (!question || question.trim() === "") {
            return res.status(400).json({
                answer: "Please enter a question.",
            });
        }

        const response = await groq.chat.completions.create({
            model: "openai/gpt-oss-20b",

            messages: [
                {
                    role: "system",
                    content: `
You are CodePilot AI, an expert programming assistant and teacher.

Your job is to help users understand programming and generate useful code.

GENERAL RULES:
- Explain things in simple beginner-friendly language.
- Give accurate and practical answers.
- Use clear formatting.
- Do not give unnecessary introductions.
- When the user asks for code, actually provide the code.

CODE GENERATION RULES:
- If the user asks to create, build, make, or generate a project, provide complete working code.
- Never respond with only an explanation.
- Put code inside proper Markdown code blocks.
- Use the programming language requested by the user.
- For HTML/CSS/JavaScript projects, provide the actual HTML, CSS, and JavaScript code.
- Include all important parts required for the requested project.
- After the code, briefly explain how it works.
- Keep the generated code clean and readable.

DEBUGGING RULES:
- Explain what caused the error.
- Show the corrected code.
- Explain the fix step by step.

LEARNING RULES:
- Teach the concept in simple language.
- Give a small example when useful.
- Mention common mistakes when relevant.

IMPORTANT:
If the user asks:
"create html login page"

you MUST generate an actual HTML login page with code, not just say that you can generate one.

Always prioritize the user's requested task.
`,
                },
                {
                    role: "user",
                    content: question,
                },
            ],

            max_tokens: 4000,
        });

        const answer = response.choices?.[0]?.message?.content;

        if (!answer) {
            return res.status(500).json({
                answer: "❌ AI did not return a response.",
            });
        }

        return res.status(200).json({
            answer,
        });
    } catch (error) {
        console.error("AI Error:", error);

        return res.status(500).json({
            answer: "❌ AI Error: " + error.message,
        });
    }
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`🚀 CodePilot AI Server running on port ${PORT}`);
});
