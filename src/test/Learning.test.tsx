import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Learning from "../pages/Learning";
describe("Learning Component", () => {
    it("should render the page heading", () => {
        render(<Learning />);
        expect(
            screen.getByRole("heading", {
                name: /Programming Learning/i,
            })
        ).toBeInTheDocument();
    });
    it("should render the page description", () => {
        render(<Learning />);
        expect(
            screen.getByText(
                /Learn programming from trusted resources and improve your skills/i
            )
        ).toBeInTheDocument();
    });
    it("should render all programming courses", () => {
        render(<Learning />);
        expect(screen.getByText("🌐 HTML")).toBeInTheDocument();
        expect(screen.getByText("🎨 CSS")).toBeInTheDocument();
        expect(screen.getByText("⚡ JavaScript")).toBeInTheDocument();
        expect(screen.getByText("⚛ React")).toBeInTheDocument();
        expect(screen.getByText("🐘 PHP")).toBeInTheDocument();
    });
    it("should render all Start Learning buttons", () => {
        render(<Learning />);
        const buttons = screen.getAllByRole("button", {
            name: /Start Learning/i,
        });
        expect(buttons).toHaveLength(5);
    });
    it("should render correct learning resource links", () => {
    render(<Learning />);

    const links = screen.getAllByRole("link", {
        name: /Start Learning/i
    });

    expect(links).toHaveLength(5);

    expect(links[0]).toHaveAttribute(
        "href",
        "https://developer.mozilla.org/en-US/docs/Web/HTML"
    );

    expect(links[1]).toHaveAttribute(
        "href",
        "https://developer.mozilla.org/en-US/docs/Web/CSS"
    );

    expect(links[2]).toHaveAttribute(
        "href",
        "https://javascript.info/"
    );

    expect(links[3]).toHaveAttribute(
        "href",
        "https://react.dev/learn"
    );

    expect(links[4]).toHaveAttribute(
        "href",
        "https://www.php.net/manual/en/"
    );
});
});