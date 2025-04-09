export interface Education {
    school: string;
    location?: string;
    degree: string;
    fieldOfStudy?: string;
    startDate?: string;
    endDate?: string;
    gpa?: number;
    extras?: string[];
}

// Top is most recent
export const educationData: Education[] = [
    {
        school: "Neumont College of Computer Science",
        location: "Salt Lake City, Utah",
        degree: "Bachelor of Science in Software Engineering",
        fieldOfStudy: "Computer Science",
        startDate: "September 2022",
        endDate: "September 2025",
        gpa: 3.99,
        extras: [
            "President's List all semesters",
            "Relevant coursework: Data Structures, Algorithms, Web Development"
        ]
    },
    {
        school: "DeVry University",
        degree: "Programming Essentials Certification"
    }
];

export default educationData;