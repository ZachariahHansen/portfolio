export interface Education {
    school: string;
    location?: string;
    degree: string;
    endDate?: string;
    gpa?: number;
}

// Top is most recent
export const educationData: Education[] = [
    {
        school: "Neumont University",
        location: "Salt Lake City, UT",
        degree: "Bachelor of Science, Software Engineering",
        endDate: "Graduated Sept. 2025",
        gpa: 3.99
    }
];

export default educationData;
