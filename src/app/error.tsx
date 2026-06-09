import Link from "next/link";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-semibold text-foreground">Something went wrong</h1>
        <p className="mt-4 text-muted-foreground">An unexpected error occurred while loading the page.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button onClick={reset} className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Try again
          </button>
          <Link href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
