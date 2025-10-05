import IntroAnimation from "./components/IntroAnimation";

export default function Home() {
  return (
    <>
    <IntroAnimation />
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-gray-900">
      <div className="p-8 text-center">
        <h1 className="mb-4 text-5xl font-bold">Makenna Avakian</h1>
        <h2 className="mb-8 text-2xl">Artist & Software Engineer</h2>

        <p className="mx-auto mb-6 max-w-xl text-lg">
          Explore my works, available pieces, and custom commission opportunities.
        </p>

        <div className="flex justify-center gap-4">
        <a
  href="/gallery"
  className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
>
  View Portfolio
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
    </>
  );
}
