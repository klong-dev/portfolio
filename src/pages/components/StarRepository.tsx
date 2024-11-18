import { ContentBox } from "@/components/ContentBox";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const repositories = [
  {
    name: "Portfolio",
    description: "A Portfolio Website with an AI chatbot that can answer any question about you.",
    url: "",
    tech: ["React", "Tailwind CSS", "TypeScript", "Firebase"],
  },
  {
    name: "RemindMe",
    description: "A simple reminder app that can help you remember important events.",
    url: "",
    tech: ["React", "Tailwind CSS", "TypeScript", "Firebase"],
  },
];

export const StarRepository = () => {
  const { t } = useTranslation();
  return (
    <ContentBox>
      <h1 className="pt-6 pl-6 text-2xl font-bold text-gray-800 dark:text-white">{t("pinned-repo")}</h1>
      <div className="grid gap-4 p-6 pt-3 pb-0 sm:grid-cols-2">
        {repositories.map((repo) => (
          <div className="group relative overflow-hidden rounded-xl p-1 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl flex-grow">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-75 transition-all duration-500 group-hover:opacity-100"></div>
            <div className="relative h-full rounded-lg bg-white p-6 dark:bg-gray-800 transition-all duration-500 dark:bg-opacity-80 backdrop-blur-sm flex flex-col">
              <h3 className="mb-3 text-2xl font-bold text-gray-800 dark:text-white">{repo.name}</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300 flex-grow">{repo.description}</p>
              <div className="flex flex-wrap gap-2">
                {repo.tech.map((tech) => (
                  <span key={tech} className="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={repo.url} className="flex items-center mt-4 text-blue-500 dark:text-blue-400 hover:underline">
                <Icon icon="meteor-icons:github" className="mr-1" />
                <span className="text-sm">Github</span>
              </a>
            </div>
          </div>
        ))}
        <div className="group relative overflow-hidden rounded-xl p-1 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl flex-grow"></div>
      </div>
    </ContentBox>
  );
};
