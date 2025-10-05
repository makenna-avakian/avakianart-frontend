export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8 text-gray-900">
      <div className="w-full max-w-lg">
        <h1 className="mb-6 text-center text-4xl font-bold">Contact Me</h1>
        <p className="mb-8 text-center text-lg text-gray-700">
          Interested in a custom commission or collaboration? Fill out the form below and I’ll get
          back to you.
        </p>

        <form className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-black focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-black focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Message</label>
            <textarea
              rows={5}
              placeholder="Tell me about your idea..."
              className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-black focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-black py-3 text-white transition hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
