// This is a types
export interface AIResponse {
    answer: string;
}

export interface AIRequest {
    question: string;
}

export interface HistoryItem {
    type: string;
    input: string;
    output: string;
    date: string;
}