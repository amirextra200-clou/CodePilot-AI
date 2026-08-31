import "../styles/Page.css";
interface ErrorItem {
    category: string;
    error: string;
    explanation: string;
    solution: string;
}

function Errors() {
    const errors: ErrorItem[] = [
        {
            category: "JavaScript",
            error: "❌ Cannot read properties of undefined",
            explanation:
                "This error happens when you try to access a property from a value that does not exist.",
            solution:
                "Check if the value exists before using it. Use optional chaining (?.) or add proper conditions."
        },
        {
            category: "React",
            error: "❌ Module not found",
            explanation:
                "React cannot find the file or package you are trying to import.",
            solution:
                "Check the import path, file name, and install missing packages using npm install."
        },
        {
            category: "JavaScript",
            error: "❌ Unexpected token",
            explanation:
                "The JavaScript parser found something unexpected in your code.",
            solution:
                "Check brackets {}, parentheses (), quotes, commas and syntax mistakes."
        },
        {
            category: "Programming",
            error: "❌ Undefined variable",
            explanation:
                "You are using a variable that was never created or declared.",
            solution:
                "Declare the variable before using it and check spelling mistakes."
        },
        {
            category: "Logic",
            error: "❌ Infinite loop",
            explanation:
                "Your loop keeps running because the stopping condition is never reached.",
            solution:
                "Check your loop condition and make sure the value changes inside the loop."
        },
        {
            category: "React",
            error: "❌ Invalid Hook Call",
            explanation:
                "React hooks are being used incorrectly.",
            solution:
                "Use hooks only inside functional components and check duplicate React versions."
        }
    ];
    return (
        <div className="page">
            <h1>
                ❌ Common Programming Errors
            </h1>
            <p>
                Understand common coding errors and learn how to fix them easily.
            </p>
            {
                errors.map((item, index) => (
                    <div
                        className="card"
                        key={index}
                    >
                        <span
                            style={{
                                color: "#2563eb",
                                fontWeight: "bold"
                            }}
                        >
                            {item.category}
                        </span>
                        <h2>
                            {item.error}
                        </h2>
                        <p>
                            💡 <b>Why it happens:</b>
                            <br />
                            {item.explanation}
                        </p>
                        <p>
                            ✅ <b>Solution:</b>
                            <br />
                            {item.solution}
                        </p>
                    </div>
                ))
            }
        </div>
    );
}
export default Errors;