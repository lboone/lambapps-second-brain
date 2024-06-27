export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div>{children}</div>;
    </div>
  );
}
