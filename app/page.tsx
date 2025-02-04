import Link from "next/link";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen mx-auto">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Next.js + Supabase Starter
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Jumpstart your full-stack project with Next.js and Supabase.
                  Authentication, database, and API routes - all set up and
                  ready to go!
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="https://github.com/yourusername/your-repo-name">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#get-started">Contact Developer</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Features
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
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 7h-9" />
                  <path d="M14 17H5" />
                  <circle cx="17" cy="17" r="3" />
                  <circle cx="7" cy="7" r="3" />
                </svg>
                <h3 className="text-xl font-bold">Next.js 13 App Router</h3>
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
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <h3 className="text-xl font-bold">Supabase Authentication</h3>
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
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>
                <h3 className="text-xl font-bold">Supabase Database</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Easy database setup and management with Supabase
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
                these steps:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-500 dark:text-gray-400">
                <li>
                  Clone the repository:{" "}
                  <code className="bg-gray-100 dark:bg-gray-800 p-1 rounded">
                    git clone https://github.com/yourusername/your-repo-name.git
                  </code>
                </li>
                <li>
                  Install dependencies:{" "}
                  <code className="bg-gray-100 dark:bg-gray-800 p-1 rounded">
                    npm install
                  </code>
                </li>
                <li>
                  Set up your Supabase project and add the environment variables
                </li>
                <li>
                  Run the development server:{" "}
                  <code className="bg-gray-100 dark:bg-gray-800 p-1 rounded">
                    npm run dev
                  </code>
                </li>
              </ol>
              <p className="text-gray-500 dark:text-gray-400">
                For more detailed instructions, check out the README in the
                GitHub repository.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 Next.js + Supabase Starter. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
