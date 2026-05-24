import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Hello World" },
      { name: "description", content: "A simple hello world project." },
    ],
  }),
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <h1 className="text-6xl font-bold tracking-tight text-foreground">
        Hello, world 👋
      </h1>
    </main>
  );
}
