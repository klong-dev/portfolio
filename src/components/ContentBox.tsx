import { FC, ReactNode } from "react";

interface ContentBoxProps {
  children: ReactNode;
}

export const ContentBox: FC<ContentBoxProps> = ({ children }) => {
  return <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl md:col-span-3 lg:col-span-4">{children}</div>;
};
