import type { AIRequest, AIResponse } from "../types";

export async function askAI(question: string): Promise<string> {
    try {
        const requestBody: AIRequest = {
            question,
        };

        const response = await fetch("/api/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error(`AI server error: ${response.status}`);
        }

        const data: AIResponse = await response.json();

        if (!data.answer) {
            return "🤖 AI could not generate a response. Please try again.";
        }

        return data.answer;

    } catch (error) {
        console.log("AI Error:", error);

        return "❌ Unable to connect with AI service. Please try again.";
    }
}