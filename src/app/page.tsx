export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-900">
      <div className="p-8 text-center">
        <h1 className="mb-4 text-5xl font-bold">Makenna Avakian</h1>
        <h2 className="mb-8 text-2xl">Artist & Software Engineer</h2>

        <p className="mx-auto mb-6 max-w-xl text-lg">
          Explore my works, available pieces, and custom commission opportunities.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#gallery"
            className="rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800"
          >
            View Gallery
          </a>
          <a
            href="/contact"
            className="rounded-lg border border-black px-6 py-3 text-black transition hover:bg-gray-200"
          >
            Contact
          </a>
        </div>
      </div>
    </main>
  );
}
