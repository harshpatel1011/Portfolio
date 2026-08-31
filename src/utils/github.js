import axios from 'axios';

const GITHUB_USERNAME = 'harshpatel1011';
const PROJECT_ORDER = [
  "Skill-Exchange-Platform",
  "Tech-Blogs",
  "Library-Management",
  "HP-Terminal-Portfolio",
  "ContactBook",
  "Hospital",
  "Creative-Hackathon-Enquiry-Portal",
  "The-Rick-and-Morty-API"
];

const CUSTOM_DESCRIPTIONS = {
  "Skill-Exchange-Platform": "A modern platform for users to exchange skills and knowledge, built with React and Vite.",
  "Tech-Blogs": "A full-featured technical blogging platform built with Django for creating and publishing articles.",
  "Library-Management": "A robust library management system built with Django for tracking books, issues, and student memberships.",
  "HP-Terminal-Portfolio": "A unique, interactive terminal-style developer portfolio built with JavaScript.",
  "ContactBook": "A contact management system developed with Django and Python for organizing and storing contact information.",
  "Hospital": "A hospital management web application built with Django and Python to manage patients, appointments, and doctors.",
  "Creative-Hackathon-Enquiry-Portal": "An enquiry portal system designed for a creative hackathon using Python and Flask.",
  "The-Rick-and-Morty-API": "A React application fetching and displaying characters from The Rick and Morty API."
};

const CUSTOM_TOPICS = {
  "Skill-Exchange-Platform": ["React", "Vite", "JavaScript", "Tailwind CSS"],
  "Tech-Blogs": ["Python", "Django", "PostgreSQL", "HTML", "CSS"],
  "Library-Management": ["Python", "Django", "PostgreSQL", "HTML", "CSS"],
  "HP-Terminal-Portfolio": ["React", "HTML", "CSS", "JavaScript"],
  "ContactBook": ["Python", "Django", "PostgreSQL", "HTML", "CSS"],
  "Hospital": ["Python", "Django", "PostgreSQL", "HTML", "CSS"],
  "Creative-Hackathon-Enquiry-Portal": ["Python", "Flask", "SQLite", "HTML", "CSS"],
  "The-Rick-and-Morty-API": ["React", "JavaScript", "REST API", "CSS"]
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
  }
};
