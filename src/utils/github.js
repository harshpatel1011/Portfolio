import axios from 'axios';

const GITHUB_USERNAME = 'harshpatel1011';
const PROJECT_ORDER = [
  "Skill-Exchange-Platform",
  "HP-Terminal-Portfolio",
  "Creative-Hackathon-Enquiry-Portal",
  "ReactJS-09-The-Rick-and-Morty-API",
  "ReactJS-09-To-Do-List",
  "ReactJS-07-Tic-Tac-Toe",
  "EMS"
];

const CUSTOM_DESCRIPTIONS = {
  "Skill-Exchange-Platform": "A modern platform for users to exchange skills and knowledge, built with React and Vite.",
  "HP-Terminal-Portfolio": "A unique, interactive terminal-style developer portfolio built with JavaScript.",
  "Creative-Hackathon-Enquiry-Portal": "An enquiry portal system designed for a creative hackathon using Python and Flask.",
  "ReactJS-09-The-Rick-and-Morty-API": "A React application fetching and displaying characters from The Rick and Morty API.",
  "ReactJS-09-To-Do-List": "A responsive To-Do List application built with React to manage daily tasks efficiently.",
  "ReactJS-07-Tic-Tac-Toe": "An interactive Tic-Tac-Toe game developed in React with state management.",
  "EMS": "An Employee Management System for tracking and managing staff details and activities."
};

const CUSTOM_TOPICS = {
  "Skill-Exchange-Platform": ["React", "Vite", "JavaScript", "Tailwind CSS"],
  "HP-Terminal-Portfolio": ["React", "HTML", "CSS", "JavaScript"],
  "Creative-Hackathon-Enquiry-Portal": ["Python", "Flask", "SQLite", "HTML", "CSS"],
  "ReactJS-09-The-Rick-and-Morty-API": ["React", "JavaScript", "REST API", "CSS"],
  "ReactJS-09-To-Do-List": ["React", "JavaScript", "HTML", "CSS"],
  "ReactJS-07-Tic-Tac-Toe": ["React", "JavaScript", "HTML", "CSS"],
  "EMS": ["HTML", "CSS"]
};

export const fetchGithubRepos = async () => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`
    );

    // Filter to include only specified repos, then sort according to PROJECT_ORDER
    const repos = response.data
      .filter((repo) => PROJECT_ORDER.includes(repo.name))
      .sort((a, b) => PROJECT_ORDER.indexOf(a.name) - PROJECT_ORDER.indexOf(b.name));

    return repos.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: CUSTOM_DESCRIPTIONS[repo.name] || repo.description || 'A web development project.',
      html_url: repo.html_url,
      homepage: repo.homepage,
      stargazers_count: repo.stargazers_count,
      topics: CUSTOM_TOPICS[repo.name] || repo.topics || [],
      language: repo.language,
    }));
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    // Fallback data
    return [
      {
        id: 1,
        name: 'Portfolio-3D',
        description: 'Immersive premium developer portfolio with 3D elements.',
        html_url: '#',
        homepage: '#',
        stargazers_count: 120,
        topics: ['react', 'threejs', 'gsap'],
        language: 'JavaScript',
      },
      {
        id: 2,
        name: 'E-commerce UI',
        description: 'Modern glassmorphism e-commerce frontend.',
        html_url: '#',
        homepage: '#',
        stargazers_count: 85,
        topics: ['tailwind', 'framer-motion'],
        language: 'TypeScript',
      },
      {
        id: 3,
        name: 'NovaDash Admin',
        description: 'React Admin panel dashboard with full analytics.',
        html_url: '#',
        homepage: '#',
        stargazers_count: 65,
        topics: ['react', 'recharts'],
        language: 'JavaScript',
      },
    ];
  }
};
