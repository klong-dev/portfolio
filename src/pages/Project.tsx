import { ContentBox } from "@/components/ContentBox";
import { Icon } from "@iconify/react";
import React from "react";

interface Repository {
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
}

export const Project = () => {
  const [loading, setLoading] = React.useState(true);
  const [repositories, setRepositories] = React.useState<Repository[]>([]);
  React.useEffect(() => {
    async function fetchRepos() {
      try {
        let data = JSON.parse(localStorage.getItem("repos") || "") || [];
        const response = await fetch("https://api.github.com/users/klong-dev/repos");
        if (response.ok) {
          data = await response.json();
          localStorage.setItem("repos", JSON.stringify(data));
        }
        // Ensure data is array before setting
        if (Array.isArray(data)) {
          setRepositories(data);
        } else {
          console.error("API response is not an array:", data);
          setRepositories([]);
        }
      } catch (error) {
        console.error("Error fetching repos:", error);
        setRepositories([]);
      } finally {
        console.log(repositories);
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-16 text-center">🧑&zwj;💻Projects</h1>
      <ContentBox>
        <div className="space-y-6 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Projects on Github</h2>
            <label htmlFor="project-filter" className="sr-only">
              Filter Projects
            </label>
            <select id="project-filter" className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option value="All">All</option>
            </select>
          </div>
          <div className="flex space-x-4 border-b border-gray-200 dark:border-gray-700">
            <button className="py-2 px-4 font-medium focus:outline-none text-indigo-600 border-b-2 border-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user w-4 h-4 inline-block mr-2">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              My Projects
            </button>
            <button className="py-2 px-4 font-medium focus:outline-none text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-git-branch w-4 h-4 inline-block mr-2">
                <line x1="6" x2="6" y1="3" y2="15"></line>
                <circle cx="18" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M18 9a9 9 0 0 1-9 9"></path>
              </svg>
              Forked Projects
            </button>
          </div>
          <div className="grid gap-4 p-6 pt-3 pb-0 sm:grid-cols-2">
            {repositories.map((repo) => (
              <div className="group relative overflow-hidden rounded-xl p-1 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl flex-grow">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-75 transition-all duration-500 group-hover:opacity-100"></div>
                <div className="relative h-full rounded-lg bg-white p-6 dark:bg-gray-800 transition-all duration-500 dark:bg-opacity-80 backdrop-blur-sm flex flex-col">
                  <h3 className="mb-3 text-2xl font-bold text-gray-800 dark:text-white">{repo.name}</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300 flex-grow">{repo.description || "No description available"}</p>
                  <div className="flex flex-wrap gap-2">
                    {repo.topics.map((tech) => (
                      <span key={tech} className="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 items-center text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Icon icon="mdi:star" className="mr-[2px]" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon icon="mdi:source-fork" className="mr-[2px]" />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                  <a href={repo.html_url} className="flex items-center mt-4 text-blue-500 dark:text-blue-400 hover:underline">
                    <Icon icon="meteor-icons:github" className="mr-1" />
                    <span className="text-sm">Github</span>
                  </a>
                </div>
              </div>
            ))}
            <div className="group relative overflow-hidden rounded-xl p-1 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl flex-grow"></div>
          </div>
        </div>
      </ContentBox>
    </div>
  );
};
