export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-900">
      <div className="text-center p-8">
        <h1 className="text-5xl font-bold mb-4">Makenna Avakian</h1>
        <h2 className="text-2xl mb-8">Artist & Software Engineer</h2>

        <p className="max-w-xl mx-auto text-lg mb-6">
          Explore my works, available pieces, and
          custom commission opportunities.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="#gallery"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            View Gallery
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-black text-black rounded-lg hover:bg-gray-200 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </main>
  );
}
