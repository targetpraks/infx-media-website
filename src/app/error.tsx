"use client";

import { useEffect } from "react";
import { RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-void" role="alert">
      <div className="text-center px-6 max-w-md">
        <div className="w-14 h-14 rounded-xl bg-blood/10 flex items-center justify-center mx-auto mb-6">
          <span className="text-blood text-2xl font-extrabold" aria-hidden="true">!</span>
        </div>
        <h2 className="text-xl font-bold text-text-primary mb-3">Something went wrong</h2>
        <p className="text-text-secondary text-sm mb-8">
          The page failed to load. This might be a temporary glitch.
        </p>
        <button onClick={reset} className="btn-cinematic">
          <RefreshCw size={16} />
          Try Again
        </button>
      </div>
    </div>
  );
}
