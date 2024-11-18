import { FC } from "react";
import { Icon } from "@iconify/react";
import { ContentBox } from "@/components/ContentBox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslation } from "react-i18next";

const technologies = [
  {
    name: "TypeScript",
    icon: <Icon icon="ph:file-ts" width={24} height={24} />,
  },
  {
    name: "JavaScript",
    icon: <Icon icon="ph:code" width={24} height={24} />,
  },
  {
    name: "PHP",
    icon: <Icon icon="nonicons:php-16" width={24} height={24} />,
  },
  {
    name: "Java",
    icon: <Icon icon="hugeicons:java" width={24} height={24} />,
  },
  {
    name: "C/C++",
    icon: <Icon icon="ph:file-cpp" width={24} height={24} />,
  },
  {
    name: "CSharp",
    icon: <Icon icon="ph:file-c-sharp-thin" width={24} height={24} />,
  },
  {
    name: "Python",
    icon: <Icon icon="ph:file-py" width={24} height={24} />,
  },
  {
    name: "NestJS",
    icon: <Icon icon="simple-icons:nestjs" width={24} height={24} />,
  },
  {
    name: "Vue.js",
    icon: <Icon icon="teenyicons:vue-outline" width={24} height={24} />,
  },
  {
    name: "React",
    icon: <Icon icon="akar-icons:react-fill" width={24} height={24} />,
  },
  {
    name: "Laravel",
    icon: <Icon icon="mdi:laravel" width={24} height={24} />,
  },
  {
    name: "Node.js",
    icon: <Icon icon="akar-icons:node-fill" width={24} height={24} />,
  },
  {
    name: "MYSQL",
    icon: <Icon icon="ph:database" width={24} height={24} />,
  },
  {
    name: "MongoDB",
    icon: <Icon icon="teenyicons:mongodb-outline" width={24} height={24} />,
  },
  {
    name: "GIT",
    icon: <Icon icon="ph:git-branch" width={24} height={24} />,
  },
  {
    name: "Cloud VPS",
    icon: <Icon icon="teenyicons:computer-outline" width={24} height={24} />,
  },
  {
    name: "Cloud Hosting",
    icon: <Icon icon="ph:cloud" width={24} height={24} />,
  },
  {
    name: "Github",
    icon: <Icon icon="ph:github-logo" width={24} height={24} />,
  },
  {
    name: "Mockup Design",
    icon: <Icon icon="ph:pencil-ruler" width={24} height={24} />,
  },
  {
    name: "Restful API",
    icon: <Icon icon="ant-design:api-outlined" width={24} height={24} />,
  },
];
export const Hero: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <ContentBox>
        <div className="flex flex-col sm:flex-row gap-6 p-6">
          <Avatar className="rounded-full shadow-md h-32 w-32 object-cover object-center ring-4 ring-blue-500 dark:ring-blue-400" style={{ width: 128, height: 128 }}>
            <AvatarImage src="https://www.medevs.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAhmed.826f0c71.jpeg&w=3840&q=75" />
            <AvatarFallback>KLong-Dev</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="text-3xl font-bold">Hoàng Kim Long</h1>
            <p className="text-primary mt-2 mb-4">@klong-dev</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm tracking-wide">{t("bio-1")}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm tracking-wide">{t("bio-2")}</p>
            <ul className="flex gap-3">
              <li>
                <a href="https://www.facebook.com/hklong04/" title="Facebook Profile">
                  <Icon icon="logos:facebook" width={24} height={24} />
                </a>
              </li>
              <li>
                <a href="https://github.com/klong-dev" title="GitHub Profile">
                  <Icon icon="logos:github-icon" width={24} height={24} />
                </a>
              </li>
              <li>
                <a href="https://vn.linkedin.com/in/long8204" title="LinkedIn Profile">
                  <Icon icon="lucide:linkedin" width={24} height={24} color="#1877f2" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </ContentBox>

      <div className="grid grid-cols-2 py-6 gap-6">
        <div>
          <ContentBox>a</ContentBox>
        </div>
        <div>
          <ContentBox>
            <div className="p-6">
              <h2 className="text-2xl font-bold">Technologies</h2>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
                {technologies.map((technology) => (
                  <li className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-100 dark:bg-gray-700 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105 transform">
                    <div className="text-gray-600 dark:text-gray-300 mb-2">{technology.icon}</div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{technology.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ContentBox>
        </div>
      </div>
    </>
  );
};
