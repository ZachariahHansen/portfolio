export interface Experience {
    company: string;
    jobTitle: string;
    period: string;
    technologies: string[];
    summary: string[];
}

// Top is most recent experience
export const experiences: Experience[] = [
    {
        company: "Salt Lake Weekly",
        jobTitle: "Full Stack Intern",
        period: "April 2025 - Present",
        technologies: ["PostgresSQL", "React", "React Native"],
        summary: []
    }, 
    {
        company: "",
        jobTitle: "Quality Assurance",
        period: "Structured Contract Work",
        technologies: [],
        summary: []
    },
    {
        company: "Motorola Solutions",
        jobTitle: "Software Engineering Intern",
        period: "January 2025 - March  2025",
        technologies: ["C#", ],
        summary: [
            "Worked with PremierOne Records Management Software that had numerous code issues.",
            "Improved the C# codebase quality and reliability through refactoring and testing.",
            "Cleaned up over 300 warning messages and created thorough unit tests for all modified code."
        ]
    },
    {
        company: "WorkChat",
        jobTitle: "Full Stack Software Developer",
        period: "Senior Project",
        technologies: ["Flutter", "PostgreSQL", "AWS", "Google Cloud"],
        summary: [
            "Developed cross-platform mobile application using Flutter, showcasing mobile development expertise.",
            "Engineered real-time WebSocket messaging to enable instant, seamless communication."
        ]
    }
];

export default experiences;