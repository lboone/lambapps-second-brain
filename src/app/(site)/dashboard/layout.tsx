import NavPanel from "@/app/(site)/dashboard/nav-panel";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row gap-2">
      <div className="w-[20%] hidden md:block pr-10 border-r border-slate-200 mr-10 h-[93vh] pt-10 pb-10 ">
        <NavPanel />
      </div>
      <div className="w-[80%] mt-10 mb-10">{children}</div>
    </div>
  );
}
