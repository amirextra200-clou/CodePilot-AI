import type { HistoryItem } from "../types";
const HISTORY_KEY = "codepilot_history";
export function getHistory(): HistoryItem[] {
    const data = localStorage.getItem(HISTORY_KEY);
    if (data) {
        return JSON.parse(data) as HistoryItem[];
    }
    return [];
}

export function saveHistory(
    type: string,
    input: string,
    output: string
): void {

    const history = getHistory();
    const newHistoryItem: HistoryItem = {
        type,
        input,
        output,
        date: new Date().toLocaleString()
    };

    history.unshift(newHistoryItem);

    localStorage.setItem(
        HISTORY_KEY,
        JSON.stringify(history)
    );
}

export function clearHistory(): void {
    localStorage.removeItem(HISTORY_KEY);
}