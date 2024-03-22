export default function Body({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full max-w-[1440px] h-full px-6 text-white mt-32">
      {children}
    </main>
  );
}
