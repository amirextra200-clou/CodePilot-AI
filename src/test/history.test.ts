import { describe, expect, it, beforeEach } from "vitest";
import {
    getHistory,
    saveHistory,
    clearHistory
} from "../services/history";
describe("History Service", () => {
    beforeEach(() => {
        localStorage.clear();
    });
    it("should save and get history", () => {
        saveHistory(
            "Code Generator",
            "Create a calculator",
            "Here is the calculator code."
        );
        const history = getHistory();
        expect(history).toHaveLength(1);
        expect(history[0].type).toBe("Code Generator");
        expect(history[0].input).toBe(
            "Create a calculator"
        );
        expect(history[0].output).toBe(
            "Here is the calculator code."
        );
    });
    it("should clear all history", () => {
        saveHistory(
            "Debugger",
            "Fix this error",
            "The error is caused by..."
        );
        clearHistory();
        const history = getHistory();
        expect(history).toHaveLength(0);
    });
});