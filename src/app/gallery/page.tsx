import Image from "next/image";

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
    <main className="min-h-screen bg-white text-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {artworks.map((art) => (
            <div
              key={art.id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <Image
                src={art.imageUrl}
                alt={art.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{art.title}</h2>
                <p className="text-gray-600 mb-2">{art.description}</p>
                <span
                  className={`inline-block px-3 py-1 text-sm rounded ${
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
  );
}
