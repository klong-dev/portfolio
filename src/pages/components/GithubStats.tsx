import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import sample from "@/data/sampleGithub.json";
import user from "@/data/userGithub.json";
import { useTranslation } from "react-i18next";

interface Repository {
  language: string | null;
}

interface LanguageStats {
  name: string;
  value: number;
}

export default function GithubStats() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchRepos() {
      try {
        const data = sample;
        // Ensure data is array before setting
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          console.error("API response is not an array:", data);
          setRepos([]);
        }
      } catch (error) {
        console.error("Error fetching repos:", error);
        setRepos([]);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  const calculateLanguageStats = (): LanguageStats[] => {
    const languageCounts: { [key: string]: number } = {};
    let total = 0;

    repos.forEach((repo) => {
      if (repo.language) {
        languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
        total++;
      }
    });

    return Object.entries(languageCounts).map(([name, count]) => ({
      name,
      value: (count / total) * 100,
    }));
  };

  const COLORS = {
    JavaScript: "#f1e05a",
    TypeScript: "#2b7489",
    CSS: "#563d7c",
    PHP: "#4F5D95",
    Astro: "#ff5a03",
    Other: "#8e8e8e",
  };

  return (
    <div className="p-6 rounded-lg flex flex-col h-full justify-between">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md shadow text-center text-wrap">
          <span className="block text-2xl font-bold text-gray-900 dark:text-gray-100">{repos.length}</span>
          <div className="text-xs text-gray-600 dark:text-gray-400">Repositories</div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md shadow text-center text-wrap">
          <span className="block text-2xl font-bold text-gray-900 dark:text-gray-100">{sample.reduce((totalStars, repo) => totalStars + (repo.stargazers_count || 0), 0)}</span>
          <div className="text-xs text-gray-600 dark:text-gray-400">Stars</div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md shadow text-center text-wrap">
          <span className="block text-2xl font-bold text-gray-900 dark:text-gray-100">{user.followers}</span>
          <div className="text-xs text-gray-600 dark:text-gray-400">Followers</div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md shadow text-center text-wrap">
          <span className="block text-2xl font-bold text-gray-900 dark:text-gray-100">{user.following}</span>
          <div className="text-xs text-gray-600 dark:text-gray-400">Following</div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">{t("top-language")}</h2>
        {!loading && (
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={calculateLanguageStats()} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis type="number" hide />
                <YAxis className="text-sm text-gray-900 dark:text-gray-100" dataKey="name" type="category" axisLine={false} tickLine={false} width={80} />
                <Tooltip formatter={(value: number) => `${value.toFixed(2)}%`} contentStyle={{ background: "#2d3748", border: "none" }} cursor={{ fill: "rgba(255, 255, 255, 0.1)" }} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {calculateLanguageStats().map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[entry.name as keyof typeof COLORS] || COLORS.Other} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-400">
        {t("member-since")}: {new Date(user.created_at).toLocaleDateString()}
      </div>

      <div className="flex mt-6 justify-center">
        <a href="https://github.com/klong-dev" target="_blank" rel="noopener noreferrer" className="h-10 inline-block bg-gray-800 dark:bg-gray-600 text-white font-medium py-2 px-4 rounded hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors mr-2 mb-2">
          {t("view-profile")}
        </a>
        <a href="https://github.com/klong-dev?tab=repositories" target="_blank" rel="noopener noreferrer" className="h-10 inline-block bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600 transition-colors">
          {t("view-repos")}
        </a>
      </div>
    </div>
  );
}
