import { useState } from "react";

export default function App() {
  const [showWish, setShowWish] = useState(false);

  const diwaliImages = [
    {
      image:
        "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=600",
      title: "Magical Diyas",
    },
    {
      image:
        "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?w=600",
      title: "Colorful Lights",
    },
    {
      image:
        "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600",
      title: "Festive Moments",
    },
  ];

  return (
    <div className="min-h-screen bg-[#09091f] text-white relative overflow-hidden px-4 py-8 sm:p-10">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 blur-[130px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 blur-[130px] rounded-full" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full" />

      {/* Outer Border */}
      <div className="relative max-w-6xl mx-auto border border-amber-400/60 rounded-[35px] p-5 sm:p-10 shadow-[0_0_50px_rgba(212,175,55,0.12)]">

        {/* Header Section */}
        <header className="text-center py-8 sm:py-12">

          <div className="flex justify-center gap-6 text-4xl sm:text-5xl mb-8">
            <span className="animate-pulse">🪔</span>
            <span className="animate-bounce">✨</span>
            <span className="animate-pulse">🪔</span>
          </div>

          <p className="text-amber-300 tracking-[6px] text-xs sm:text-sm mb-4">
            THE FESTIVAL OF LIGHTS
          </p>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight">

            <span className="text-white">Happy </span>

            <span className="bg-linear-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Diwali
            </span>

          </h1>

          <p className="text-gray-300 text-base sm:text-xl mt-7">
            Wishing you a bright and prosperous{" "}
            <span className="text-amber-300 font-semibold">
              Diwali!
            </span>
          </p>

          <div className="flex items-center justify-center gap-4 mt-7 text-amber-400">
            <div className="w-16 sm:w-28 h-px bg-amber-400/60" />
            ✦ ✧ ✦
            <div className="w-16 sm:w-28 h-px bg-amber-400/60" />
          </div>

        </header>

        {/* Inner Card */}
        <section className="max-w-5xl mx-auto border border-amber-400/50 rounded-3xl bg-white/3 backdrop-blur-xl p-5 sm:p-8">

          <h2 className="text-center text-2xl sm:text-4xl font-semibold text-amber-300 mb-10">
            Some Beautiful Diwali Moments
          </h2>

          {/* Images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            {diwaliImages.map((item, index) => (

              <div
                key={index}
                className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-amber-400/70 transition-all duration-500 hover:-translate-y-2"
              >

                <div className="overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                </div>

                <h3 className="text-center text-amber-200 font-medium py-4">
                  {item.title}
                </h3>

              </div>

            ))}

          </div>

          {/* Wishing Paragraph */}
          <div className="mt-14 text-center max-w-3xl mx-auto">

            <h2 className="text-2xl sm:text-4xl font-semibold italic text-amber-300 mb-7">
              ✨ A Special Diwali Wish ✨
            </h2>

            <p className="text-gray-300 text-sm sm:text-lg leading-8">

              May the beautiful festival of lights fill your life
              with endless happiness, love, peace and prosperity.
              May every diya bring new hope, every sparkle bring
              new opportunities, and every moment be filled with
              beautiful memories.

              <br /><br />

              May Goddess Lakshmi bless you with success and
              abundance. Wishing you and your family a very
              Happy and Prosperous Diwali!

            </p>

          </div>

          {/* Surprise Button */}
          <div className="text-center mt-10">

            <button
              onClick={() => setShowWish(!showWish)}
              className="px-8 py-4 rounded-full bg-linear-to-r from-amber-300 to-yellow-500 text-[#17132c] font-bold shadow-[0_0_25px_rgba(251,191,36,0.2)] hover:shadow-[0_0_35px_rgba(251,191,36,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              {showWish ? "Close Surprise ✨" : "Open Your Surprise 🎁"}
            </button>

            {showWish && (

              <div className="mt-8 p-7 rounded-2xl border border-amber-400/40 bg-purple-500/10">

                <h2 className="text-3xl text-amber-300 font-bold mb-4">
                  🪔 शुभ दीपावली 🪔
                </h2>

                <p className="text-gray-200 leading-7">
                  May your life shine brighter than a thousand
                  stars. May happiness always find its way to
                  your home. Keep smiling and keep shining! ❤️
                </p>

              </div>

            )}

          </div>

        </section>

        {/* Footer */}
        <footer className="text-center mt-12 pb-4">

          <h2 className="text-2xl sm:text-3xl font-bold text-amber-300">
            🪔 शुभ दीपावली 🪔
          </h2>

          <p className="text-gray-400 text-xs sm:text-sm tracking-[3px] mt-5">
            SPREAD LOVE • SPREAD LIGHT • SPREAD HAPPINESS
          </p>

        </footer>

      </div>

    </div>
  );
}