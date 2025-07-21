export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubLink:string; //remove this later
    demoLink: string;
    image: string;
}

export interface Experience{
    position: string;
    start: string,
    end: string,
    year: string,
    company: string;
    description: string[];
}