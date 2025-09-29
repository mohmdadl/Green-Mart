import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Find the perfect Plants to you.",
};

export default function HomePage() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen text-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/image.jpeg')" }} // put an image inside public/images/bg-room.jpg
    >
      {/* Overlay to darken background */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to the green market!
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Explore our wide selection of plants to brighten your home and garden.
        </p>

        <Link
          href="/products"
          className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
        >
          Browse Plants
        </Link>
      </div>
    </div>
  );
}
