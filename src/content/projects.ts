import { Project } from "@/types";
import { getImagePath } from "@/app/utils/imagePath";

export const projects: Project[] = [
  {
    title: 'VizLab',
    description: 'A data-visualization platform powered by AI, with inspiration drawn from Microsoft\'s Lida. (Still under development)',
    technologies: ['React.js', 'Tailwind CSS', 'FastAPI', 'llama.cpp', 'Uvicorn'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: getImagePath('/projects/vizlab.jpg'),
  },
  {
    title: 'Insight Canvas',
    description: 'An automated data-visualization platform with machine-learning generated insights.',
    technologies: ['React.js', 'FastAPI', 'Uvicorn', 'numpy', 'pandas', 'plotly'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: getImagePath('/projects/ic3.jpg'),
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio website showcasing my projects and skills.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Github-Pages'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: getImagePath('/projects/portfolio.jpg'),
  },
  {
    title: 'Flower Image Segmentation',
    description: 'An image segmentation pipeline that extracts whole flowers from their background, tested with Oxfords Flowers Dataset.',
    technologies: ['Python', 'Open-CV'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: getImagePath('/projects/flowers.jpg'),
  },
  {
    title: 'Sky-Battle',
    description: 'A fast-paced, visually engaging plane-shooter game built with JavaFX and Maven.',
    technologies: ['Java', 'JavaFX', 'Maven', 'CSS'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: getImagePath('/projects/skybattle.png'),
  },
  {
    title: 'Kristang Speech Recognition',
    description: 'A speech-recognition software that aims to preserve the Kristang language in a gamified approach.',
    technologies: ['Streamlit', 'Vosk', 'PyAudio'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: getImagePath('/projects/kristang.jpg'),
  },
  {
    title: 'Eat With JJ',
    description: 'An online restaurant food-ordering system with dynamic menu management, order management, customer and admin dashboards.',
    technologies: ['HTML', 'CSS', 'Javascript', 'PHP', 'XAMPP', 'MySQL'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: getImagePath('/projects/ewj.jpg'),
  },

  {
    title: 'Library Management System',
    description: 'My initial project, a library management system built in C while strengthening my understanding in programming fundamentals.',
    technologies: ['C'],
    githubLink: 'https://github.com',
    demoLink: 'https://demo.com',
    image: getImagePath('/projects/clib.jpg'),
  },
];