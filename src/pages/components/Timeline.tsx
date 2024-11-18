import { CalendarIcon, BriefcaseIcon, GraduationCapIcon as AcademicCapIcon, UsersIcon } from "lucide-react";
// Types
interface TimelineItemData {
  title: string;
  subtitle?: string;
  date: string;
  description?: string;
  tags?: string[];
  icon: JSX.Element;
}

// Data arrays
const experiences: TimelineItemData[] = [
  {
    title: "Software Developer (Freelance)",
    date: "2023 - Present",
    icon: <BriefcaseIcon className="h-5 w-5" />,
    description: "Specializing in full-stack web development with focus on modern JavaScript frameworks. Developing scalable and responsive web applications. Implementing RESTful APIs and database integration.",
    tags: ["ReactJS", "NestJS"],
  },
  {
    title: "Web Developer (Freelance)",
    date: "2021 - 2023",
    icon: <BriefcaseIcon className="h-5 w-5" />,
    description: "Architecting and developing dynamic web applications. Building custom CMS solutions. Implementing front-end interfaces using VueJS.",
    tags: ["PHP", "Laravel", "VueJS"],
  },
  {
    title: "Application Developer (Freelance)",
    date: "2020 - 2022",
    icon: <BriefcaseIcon className="h-5 w-5" />,
    description: "Developed automated management tools for Ngoc Rong Online game. Designed and implemented desktop applications using .NET Framework. Created custom automation solutions and modification tools. Optimized application performance and user experience.",
    tags: ["C#", "WinForm", "WPF"],
  },
];

const education: TimelineItemData[] = [
  {
    title: "FPT University Ho Chi Minh City",
    subtitle: "Software Engineering",
    date: "2022 - Present",
    icon: <AcademicCapIcon className="h-5 w-5" />,
  },
];

const leadership: TimelineItemData[] = [
  {
    title: "Team Leader - SWP391 Course Project",
    date: "2024",
    icon: <UsersIcon className="h-5 w-5" />,
    description: "Led development of 'FPT Mentor' platform. Managed team workflow and project deliverables. Coordinated with stakeholders and supervised technical implementation.",
  },
];

export default function Timeline() {
  return (
    <div className="mt-6 mx-auto p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Timeline</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Experience</h2>
          <div className="space-y-8">
            {experiences.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Education</h2>
          <div className="space-y-8">
            {education.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
          <h2 className="text-xl font-bold my-4 text-gray-900 dark:text-white">Project Leadership</h2>
          <div className="space-y-8">
            {leadership.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ title, subtitle, date, icon, description, tags }: { title: string; subtitle?: string; date: string; icon: React.ReactNode; description?: string; tags?: string[] }) {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-2 h-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="ml-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="absolute left-0 top-4 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">{icon}</div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
        {subtitle && <p className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>}
        <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center">
          <CalendarIcon className="h-4 w-4 mr-1" />
          {date}
        </p>
        {description && <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{description}</p>}
        {tags && (
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
