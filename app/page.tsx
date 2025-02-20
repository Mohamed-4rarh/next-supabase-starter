import { BookOpenText, Github, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import UserAuthState from "@/components/user-auth-state";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen mx-auto">
      <header className="container mx-auto p-4 flex items-center justify-between">
        <h1 className="font-bold text-2xl">Next.js + Supabase Starter</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link href="https://www.npmjs.com/package/create-next-supabase-starter?activeTab=readme">
              <Package className="mr-2 h-4 w-4" />
              NPM Package
            </Link>
          </Button>
          <UserAuthState />
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-5">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Next.js + Supabase Starter
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Jumpstart your full-stack project with Next.js and Supabase.
                  Authentication, database, and API routes - all set up and
                  ready to go! <br /> best for e-commerce, SaaS, Dashboards.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="https://github.com/Mohamed-4rarh/next-supabase-starter">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#get-started">
                    <BookOpenText className="mr-2 h-4 w-4" />
                    Get Startted
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Key Features
            </h2>

            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <svg
                  className=" h-12 w-12 text-gray-800 dark:text-gray-200"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7h-9" />
                  <path d="M14 17H5" />
                  <circle cx="17" cy="17" r="3" />
                  <circle cx="7" cy="7" r="3" />
                </svg>
                <h3 className="text-xl font-bold">⚡ Next.js 13 App Router</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Leverage the latest Next.js features with the App Router
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <svg
                  className=" h-12 w-12 text-gray-800 dark:text-gray-200"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <h3 className="text-xl font-bold">
                  ⚡ Supabase Authentication
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Pre-configured authentication with Supabase
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <svg
                  className=" h-12 w-12 text-gray-800 dark:text-gray-200"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>
                <h3 className="text-xl font-bold">⚡ Supabase Database</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Easy database setup and management with Supabase
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <path d="M8 8h8" />
                  <path d="M8 12h8" />
                  <path d="M8 16h8" />
                </svg>
                <h3 className="text-xl font-bold">
                  ⚡ Tailwind CSS & shadcn/ui
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Styled components ready to use.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
                  <path d="M3 10h18" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h8" />
                  <path d="M16 18h.01" />
                  <path d="M10 6l2 2 4-4" />
                </svg>
                <h3 className="text-xl font-bold">⚡ React Hook Form</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Efficient and flexible form handling with ZOD validation
                  integrated.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                  <path d="M8 12h8" />
                  <path d="M10 8h4" />
                  <path d="M12 16v-8" />
                </svg>
                <h3 className="text-xl font-bold">⚡ TypeScript Support</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Type Safe with typescript error handling.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v4" />
                  <path d="M12 18v4" />
                  <path d="M4.93 4.93l2.83 2.83" />
                  <path d="M16.24 16.24l2.83 2.83" />
                  <path d="M2 12h4" />
                  <path d="M18 12h4" />
                  <path d="M4.93 19.07l2.83-2.83" />
                  <path d="M16.24 7.76l2.83-2.83" />
                </svg>
                <h3 className="text-xl font-bold">
                  ⚡ React Query Integration
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Efficient data fetching, caching, and synchronization.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M9 15l-3 3" />
                  <path d="M15 9l3-3" />
                  <path d="M9 9L6 6" />
                  <path d="M15 15l3 3" />
                  <path d="M3 12h3" />
                  <path d="M18 12h3" />
                </svg>
                <h3 className="text-xl font-bold">⚡ Built-in Hooks</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Custom hooks for fetching and mutating data with optimistic
                  updates.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12L12 3l9 9-9 9-9-9z" /> {/* Hexagon Shape */}
                  <path d="M12 3v18" /> {/* Vertical Divider */}
                  <path d="M6 9h4v6H6z" /> {/* Left Block */}
                  <path d="M14 9h4v6h-4z" /> {/* Right Block */}
                </svg>
                <h3 className="text-xl font-bold">⚡ Uses pnpm</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Using pnpm for faster installs and efficient dependency
                  handling.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="get-started" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Get Started
            </h2>
            <div className="space-y-4 max-w-[600px] mx-auto">
              <p className="text-gray-500 dark:text-gray-400">
                To get started with this Next.js and Supabase starter, follow
                these steps to start effortlessly:
              </p>
              <ol className="list-decimal list-inside space-y-5 text-gray-500 dark:text-gray-400">
                <li>
                  Create a new project using the CLI:
                  <code className="bg-gray-100 dark:bg-gray-800 p-1 rounded block">
                    npx create-next-supabase-starter my-project
                  </code>
                </li>
                <li>
                  Navigate to your project folder:
                  <code className="bg-gray-100 dark:bg-gray-800 p-1 rounded block">
                    cd my-project
                  </code>
                </li>
                <li>
                  Set up your environment variables: Rename the{" "}
                  <code className="bg-gray-100 dark:bg-gray-800 p-1 rounded">
                    .env.example
                  </code>
                  file to{" "}
                  <code className="bg-gray-100 dark:bg-gray-800 p-1 rounded">
                    .env.local
                  </code>{" "}
                  and update it with your Supabase credentials.
                  <code className="bg-gray-100 dark:bg-gray-800 p-1 rounded">
                    NEXT_PUBLIC_SUPABASE_URL
                  </code>{" "}
                  ,
                  <code className="bg-gray-100 dark:bg-gray-800 p-1 rounded">
                    NEXT_PUBLIC_SUPABASE_ANON_KEY
                  </code>
                </li>
                <li>
                  Install dependencies using pnpm if it&#39;s skipped:
                  <code className="bg-gray-100 dark:bg-gray-800 p-1 rounded block">
                    pnpm install
                  </code>
                </li>
                <li>
                  Run the development server:
                  <code className="bg-gray-100 dark:bg-gray-800 p-1 rounded block">
                    pnpm dev
                  </code>
                </li>
              </ol>
              <p className="text-gray-500 dark:text-gray-400">
                Once the setup is complete, open{" "}
                <strong>http://localhost:3000</strong> in your browser to
                explore your project.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                For more detailed instructions, check out the README in the
                GitHub repository.
              </p>
            </div>
          </div>
        </section>
        <section
          id="docs"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Documentation
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Learn how to use the prebuilt components, hooks, and utilities
              included in this starter. Below are some essential parts of the
              system to help you quickly integrate and expand upon this project.
            </p>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div>
                <h3 className="text-2xl font-semibold">🔹 Fetching Data</h3>
                <pre className=" mt-2">
                  <SyntaxHighlighter
                    language="tsx"
                    style={atomDark}
                    className="rounded-lg">
                    {fetchingData}
                  </SyntaxHighlighter>
                </pre>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">🔹 Mutations</h3>
                <pre className=" mt-2">
                  <SyntaxHighlighter
                    language="tsx"
                    style={atomDark}
                    className="rounded-lg">
                    {mutateData}
                  </SyntaxHighlighter>
                </pre>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">
                  🔹 Advanced Hooks Usage
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  The starter includes powerful hooks to handle complex use
                  cases. Here are some advanced examples:
                </p>
                <h4 className="text-xl font-semibold mt-4">
                  🔸 Fetching Data with Filters
                </h4>
                <pre className=" mt-2">
                  <SyntaxHighlighter
                    language="tsx"
                    style={atomDark}
                    className="rounded-lg">
                    {fetchingDataWithFilters}
                  </SyntaxHighlighter>
                </pre>
                <h4 className="text-xl font-semibold mt-4">
                  🔸 Mutating with Optimistic Updates
                </h4>
                <pre className=" mt-2">
                  <SyntaxHighlighter
                    language="tsx"
                    style={atomDark}
                    className="rounded-lg">
                    {mutateDataWithOptimistic}
                  </SyntaxHighlighter>
                </pre>
                <h4 className="text-xl font-semibold mt-4">
                  🔸 Subscribing to Real-Time Data
                </h4>
                <pre className=" mt-2">
                  <SyntaxHighlighter
                    language="tsx"
                    style={atomDark}
                    className="rounded-lg">
                    {realTimeDataSubscribtion}
                  </SyntaxHighlighter>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className=" py-6 w-full items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mx-auto">
          © 2023 Next.js + Supabase Starter. All rights reserved | developed by
          Mohamed-4rarh.
        </p>
      </footer>
    </div>
  );
}

const fetchingData = `import { useClientFetch } from "@/hooks/useClientFetch";

const Posts = () => {
  const { data, isLoading } = useClientFetch("posts", "posts");

  if (isLoading) return <p>Loading...</p>;

  return (
    <ul>
      {data?.map((post) => (
        <li key={post.id}>{post.name}</li>
      ))}
    </ul>
  );
};`;

const mutateData = `import { useClientMutate } from "@/hooks/useClientMutate";

const AddPost = () => {
  const mutation = useClientMutate("posts", "insert");

  const handleSubmit = async () => {
    mutation.mutate({ id: Date.now(), name: "New Post" });
  };

  return <button onClick={handleSubmit}>Add Post</button>;
};`;

const fetchingDataWithFilters = `const FilteredUsers = () => {
  const { data, isLoading } = useClientFetch(
    "filtered-users", // key
    "users", // table name
    5000, // cache time
    (query) => query.eq("role", "admin") // Supabase query filter
  );
  
  if (isLoading) return <p>Loading...</p>;
  
  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>{user.name} ({user.role})</li>
      ))}
    </ul>
  );
};`;

const mutateDataWithOptimistic = `import { useClientMutate } from "@/hooks/useClientMutate";
import { useQueryClient } from "@tanstack/react-query";

const queryClient = useQueryClient();
const mutation = useClientMutate("posts", "update", {
  onMutate: async (newData) => {
    await queryClient.cancelQueries(["posts"]);
    const previousData = queryClient.getQueryData(["posts"]);
    queryClient.setQueryData(["posts"], (oldData) =>
      oldData?.map(post => (post.id === newData.id ? { ...post, ...newData } : post))
    );
    return { previousData };
  },
  onError: (err, newData, context) => {
    queryClient.setQueryData(["posts"], context.previousData);
  },
  onSettled: () => {
    queryClient.invalidateQueries(["posts"]);
  },
});
mutation.mutate({ id: 1, name: "Updated Post" });`;

const realTimeDataSubscribtion = `import { useEffect, useState } from "react";
import { createClient } from "@/supabase/client;

const supabase = createClient()

const [messages, setMessages] = useState([]);

useEffect(() => {
  const subscription = supabase
    .from("messages")
    .on("INSERT", (payload) => {
      setMessages((prev) => [...prev, payload.new]);
    })
    .subscribe();

  return () => {
    supabase.removeSubscription(subscription);
  };
}, []);`;
