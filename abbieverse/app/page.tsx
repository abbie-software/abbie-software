import {ThemeToggle } from "@/src/components/theme-toggle";
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-3x1">Launching Abbieverse</h1>
      <ThemeToggle />
      </main>
  );
}