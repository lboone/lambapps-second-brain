import React from "react";

interface PageTitleProps {
  children: React.ReactNode;
}
const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <h1 className="text-3xl md:text-4xl font-bold pb-4 w-full border-b border-slate-300 flex items-center justify-between">
      {children}
    </h1>
  );
};

export default PageTitle;
