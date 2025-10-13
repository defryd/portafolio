export interface Certification {
    institution: string;
    courses: {
        name: string;
        institution: string;
        date: string;
        url: string;
    }[];
}