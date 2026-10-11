export interface Project {
    name: string;
    tagline: string;
    period: string;
    summary: string[];
    technologies: string[];
    links: { title: string; href: string }[];
}

export const projects: Project[] = [
    {
        name: "Parable",
        tagline: "Windows games on Apple Silicon",
        period: "Oct. 2026 – Present",
        summary: [
            "A free, open source Mac app that installs and launches Windows software, Steam included, using its own build of Wine.",
            "Patched Wine to get Steam working: one fix for Steam's window rendering black, another for a crash that broke online play.",
            "Built as a Swift library with a command-line tool and a SwiftUI app on top, so both front ends share one core."
        ],
        technologies: ["Swift", "SwiftUI", "Wine", "D3DMetal", "Shell"],
        links: [
            { title: "Code on GitHub", href: "https://github.com/ZachariahHansen/parable" },
            { title: "Download", href: "https://github.com/ZachariahHansen/parable/releases" }
        ]
    },
    {
        name: "ASD Prediction",
        tagline: "Neumont Hackathon, First Place",
        period: "May 2025",
        summary: [
            "Won first place out of 10+ teams in a 48-hour hackathon, predicting autism spectrum disorder from questionnaire and demographic data.",
            "Compared logistic regression, random forest, XGBoost, CatBoost, and neural networks, tuned with Optuna for a heavily imbalanced dataset."
        ],
        technologies: ["Python", "XGBoost", "CatBoost", "TensorFlow", "Optuna"],
        links: [
            { title: "Code on GitHub", href: "https://github.com/robertjshirts/asd-hackathon-25" }
        ]
    }
];

export default projects;
