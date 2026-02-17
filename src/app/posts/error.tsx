"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen font-sans bg-background">
      <div className="w-full mx-auto max-w-3xl py-16 px-4 bg-background">
        <div className="flex flex-col items-center rounded-2xl space-y-4 border p-8 shadow-sm border-zinc-800 bg-zinc-950">
          <h2 className="text-base text-center text-zinc-400 sm:text-lg">
            Qualcosa è andato storto!
          </h2>
          <p className="text-sm text-zinc-500 text-center">{error.message}</p>
          <button
            className="mt-8 bg-white items-center justify-center inline-flex px-5 py-3 rounded-full text-zinc-900 transition-colors hover:opacity-90 hover:bg-foreground"
            onClick={() => reset()}
          >
            Riprova
          </button>
        </div>
      </div>
    </div>
  );
}
