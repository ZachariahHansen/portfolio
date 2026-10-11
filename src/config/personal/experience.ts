export interface Experience {
    company: string;
    jobTitle: string;
    period: string;
    // Small label beside the dates, e.g. "Internship"
    note?: string;
    technologies: string[];
    summary: string[];
}

// Top is most recent experience
export const experiences: Experience[] = [
    {
        company: "DSD Labs",
        jobTitle: "Full Stack Software Engineer",
        period: "April 2026 – Present",
        technologies: ["PHP", "Laravel", "PostgreSQL", "Azure GCC High", "Azure AD", "Azure OpenAI", "Bot Framework", "GitLab"],
        summary: [
            "Designed and built the platform’s MCP server from scratch: OAuth 2.1 with Azure AD Government, and 83 tools that let AI assistants work in the system under full RBAC and audit logging.",
            "Shipped a Microsoft Teams chatbot for a Laravel monolith on Azure GCC High, used by 107 people, with GPT-4o intent classification and a permission check on every command.",
            "Rewrote role-based access control around one permission evaluator that decides access for the web app, API, bot, and MCP server.",
            "Built a GitLab integration linking merge requests, pipelines, and commits to tasks, and routed every LLM call through one logged client for compliance."
        ]
    },
    {
        company: "Merits AI",
        jobTitle: "Full Stack Software Engineer",
        period: "Oct. 2025 – Present",
        technologies: ["PHP", "Laravel", "Python", "FastAPI", "Azure Functions", "PostgreSQL", "pgvector", "Azure OpenAI"],
        summary: [
            "Led DoD STIG compliance for a legal eDiscovery platform, from 69% to 98% across 286 controls, and fixed SQL- and command-injection vulnerabilities.",
            "Re-architected the Azure Functions document pipeline: OCR 3-5x faster, MinHash/LSH deduplication, and pgvector RAG search, with about half the AI token use.",
            "Built a document-review batch workflow and a PostgreSQL migration framework for a multi-tenant Laravel and Python codebase."
        ]
    },
    {
        company: "Aabo Home",
        jobTitle: "Software Engineer",
        period: "July 2025 – Oct. 2025",
        note: "Internship, then full-time",
        technologies: ["PHP", "Laravel", "PostgreSQL"],
        summary: [
            "Built and maintained the iSoftPull credit check integration behind customer onboarding and Sunlight financing.",
            "Covered the credit check and financing flow with PHPUnit tests, and documented it in Notion for the team."
        ]
    },
    {
        company: "Salt Lake Weekly",
        jobTitle: "Full Stack Developer",
        period: "April 2025 – June 2025",
        note: "Internship",
        technologies: ["JavaScript", "React", "React Native", "PostgreSQL", "BitBucket", "Jira"],
        summary: [
            "Migrated the app to React Native for cross-platform support and documented the API with Swagger."
        ]
    },
    {
        company: "Motorola Solutions",
        jobTitle: "Software Engineering Intern",
        period: "Jan. 2025 – Mar. 2025",
        note: "Internship",
        technologies: ["C#", "MSTest", "Visual Studio", "Azure"],
        summary: [
            "Reached 98% unit-test coverage while refactoring C# in the Premier One Records Management Software, clearing 300+ IDE warnings along the way."
        ]
    }
];

export default experiences;
