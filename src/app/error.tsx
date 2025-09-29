"use client";

export default function GlobalError({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <p className="text-red-600 text-lg font-bold border rounded p-4">{error.message}</p>
    </div>
  );
}
