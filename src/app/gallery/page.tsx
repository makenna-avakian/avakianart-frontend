import Image from "next/image";
import Navbar from "../components/Navbar";

const artworks = [
  {
    id: 1,
    title: "House by the Sea",
    description: "Watercolor",
    imageUrl: "/watercolor/art1.jpg",
    status: "Available",
  },
  {
    id: 2,
    title: "Husband",
    description: "Watercolor",
    imageUrl: "/watercolor/art2.jpg",
    status: "Sold",
  },
  {
    id: 3,
    title: "Untitled Study",
    description: "Watercolor",
    imageUrl: "/watercolor/art3.jpg",
    status: "Available",
  },
  {
    id: 4,
    title: "Max",
    description: "Charcoal",
    imageUrl: "/charcoal/art4.jpg",
    status: "sold",
  },
];

export default function GalleryPage() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-white p-8 text-gray-900 mt-14">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-10 text-center text-4xl font-bold">My works</h1>
        <p className="mb-12 text-center text-lg text-gray-700">
          A selection of my recent artworks. I specialize in pet portraits, landscapes, usually with watercolor and charcoal. Interested in a custom commission? Visit the Contact page to get in touch!
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {artworks.map((art) => (
            <div
              key={art.id}
              className="overflow-hidden rounded-lg border shadow transition hover:shadow-lg"
            >
              <Image
                src={art.imageUrl}
                alt={art.title}
                width={400}
                height={300}
                className="h-64 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="mb-2 text-xl font-semibold">{art.title}</h2>
                <p className="mb-2 text-gray-600">{art.description}</p>
                <span
                  className={`inline-block rounded px-3 py-1 text-sm ${
                    art.status === "Available"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {art.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    </>
  );
}
