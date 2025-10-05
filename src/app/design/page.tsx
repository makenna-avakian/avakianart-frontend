"use client";
import Navbar from "../components/Navbar";

export default function LikePage() {
  return (
    <>
      <Navbar />
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-gray-900 p-8">
      <h1 className="mb-6 text-4xl font-bold">Like this website?</h1>
      <p className="mb-8 max-w-lg text-center text-lg">
        Thanks for checking it out! I’m Makenna Avakian, an artist and software engineer.
        If you’d like to see more of my work or connect with me, here are my links:
      </p>

      <div className="flex gap-6">
        <a
          href="www.linkedin.com/in/makenna-avakian" 
          rel="noopener noreferrer"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white font-medium transition hover:bg-blue-700"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/makenna-avakian" 
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-gray-800 px-6 py-3 text-white font-medium transition hover:bg-black"
        >
          GitHub
        </a>
      </div>
    </main>
    </>
  );
}
