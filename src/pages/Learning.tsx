import "../styles/Page.css";

function Learning() {
    const courses = [
        {
            title: "🌐 HTML",
            description:
                "Learn website structure, tags and semantic HTML.",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            platform: "MDN Web Docs",
        },

        {
            title: "🎨 CSS",
            description:
                "Learn styling, layouts, Flexbox, Grid and responsive design.",
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            platform: "MDN Web Docs",
        },

        {
            title: "⚡ JavaScript",
            description:
                "Learn programming logic, DOM and interactive websites.",
            link: "https://javascript.info/",
            platform: "JavaScript.info",
        },

        {
            title: "⚛ React",
            description:
                "Learn modern frontend development with components and hooks.",
            link: "https://react.dev/learn",
            platform: "React Official Docs",
        },

        {
            title: "🐘 PHP",
            description:
                "Learn backend development, forms and server-side programming.",
            link: "https://www.php.net/manual/en/",
            platform: "PHP Official Docs",
        },
    ];

    return (
        <div className="page">
            <h1>📚 Programming Learning</h1>

            <p>
                Learn programming from trusted resources and improve your skills.
            </p>

            {courses.map((course, index) => (
                <div
                    className="card"
                    key={index}
                >
                    <h2>{course.title}</h2>

                    <p>{course.description}</p>

                    <h4>
                        📖 Resource: {course.platform}
                    </h4>
                    <a
                        href={course.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button>
                            Start Learning 🚀
                        </button>
                    </a>
                </div>
            ))}
        </div>
    );
}
export default Learning;