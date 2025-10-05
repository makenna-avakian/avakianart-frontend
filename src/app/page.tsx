import IntroAnimation from "./components/IntroAnimation";
import Navbar from "./components/Navbar";
import CatEyes from "./components/CatEyes";


export default function Home() {
  return (
    <>
      <IntroAnimation />
      <Navbar />
      <main className="relative flex min-h-screen flex-col items-center justify-center bg-white text-gray-900 pt-32">
        <div className="p-8 text-center relative z-10 pb-70">
          <h1 className="mb-4 text-5xl font-bold">Makenna Avakian</h1>
          <h2 className="mb-8 text-2xl">Artist & Software Engineer</h2>

          <p className="mx-auto mb-6 max-w-xl text-lg">
            Explore my works, available pieces, and custom commissions. <br />
            Interested in a collaboration? Visit the Contact page to get in touch!
          </p>
        </div>
        <div className="w-full border-t-4 border-black" />
      </main>
      
      <CatEyes />
    </>
  );
}
