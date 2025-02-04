import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle, ChevronLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-4 mx-auto">
      <div className="w-full max-w-3xl py-8 text-center">
        <div className="mb-8">
          <AlertCircle className="mx-auto h-16 w-16 text-destructive" />
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
            Page not found
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            Oops! Something went wrong. The page you’re looking for might have
            been moved, deleted, or temporarily unavailable. Please check the
            URL or return to the homepage. If the issue persists, contact
            support for assistance.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline">
            <Link href="/" className="inline-flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Go back
            </Link>
          </Button>
          <Button asChild>
            <Link href="/" className="inline-flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
