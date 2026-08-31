import "../styles/Loading.css";
function Loading() {
    return (
        <div className="loading">
            
            <div className="spinner"></div>
            
            <h3>
                🤖 CodePilot AI is Thinking...
            </h3>

            <p>
                Please wait while AI prepares your answer.
            </p>

        </div>
    );
}
export default Loading;