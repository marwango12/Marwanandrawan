import { useEffect, useState } from 'react';

export default function WeddingWebsite() {
  const mapLink = 'https://maps.app.goo.gl/3XNHfDDj9zM1L9gS6?g_st=com.google.maps.preview.copy';

  const galleryImages = [
    '/images/3P7A0657.JPG',
    '/images/3P7A0704.JPG',
    '/images/28fba512-cc01-4c37-84ff-3fcf6dc1ee22.JPG',
    '/images/058B2E0E-9D77-48DD-AC7C-618D5371CC68.JPG',
    '/images/553f3109-8511-4100-ab92-cffaadcecad6.JPG',
    '/images/801df1a9-7f01-45dd-a845-7b7ec990598b.jpg',
  ];
  const weddingDate = new Date('2026-06-28T19:00:00');

  const calculateTimeLeft = () => {
    const difference = weddingDate - new Date();

    if (difference <= 0) {
      return {
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0',
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString(),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString(),
      minutes: Math.floor((difference / 1000 / 60) % 60).toString(),
      seconds: Math.floor((difference / 1000) % 60).toString(),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1974&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div>
          <audio autoPlay loop>
            <source src="/music/Jason Mraz - Lucky (feat. Colbie Caillat) [Official Video] [HD Remaster] - (320 Kbps).mp3" type="audio/mpeg" />
          </audio>
          <p className="uppercase tracking-[0.5em] text-sm text-yellow-400 mb-6">
            A Love Written In The Stars
          </p>

          <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
            Marwan Mohamed
            <br />
            <span className="text-yellow-400">&</span>
            <br />
            Rawan Gamal
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 mb-4">
            28 June 2026
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-base md:text-xl text-gray-300 leading-relaxed">
              We invite you to celebrate our wedding ceremony at Salah El Din Citadel – Bir Youssef
            </p>

            <p className="italic text-yellow-100/80 text-lg md:text-xl leading-relaxed">
              “Every love story is beautiful, but ours is our favorite.”
            </p>

            <p className="italic text-gray-400 text-lg md:text-xl leading-relaxed">
              “And suddenly, all the love songs were about you.”
            </p>
          </div>

          <div className="mt-12 flex justify-center gap-4 flex-wrap">
            <a
              href="#details"
              className="px-8 py-4 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              Wedding Details
            </a>

            <a
              href="#gallery"
              className="px-8 py-4 bg-yellow-400 text-black rounded-full hover:opacity-90 transition"
            >
              Our Memories
            </a>
          </div>
        </div>
      </section>

      {/* Details */}
      <section id="details" className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="border border-yellow-400/20 rounded-3xl p-10 bg-[#111111] shadow-2xl">
            <h3 className="text-2xl mb-4 text-yellow-400">Date & Time</h3>
            <p className="text-gray-300 text-lg">Sunday, 28 June 2026</p>
            <p className="text-gray-400 mt-2">7:00 PM</p>
          </div>

          <div className="border border-yellow-400/20 rounded-3xl p-10 bg-[#111111] shadow-2xl">
            <h3 className="text-2xl mb-4 text-yellow-400">Venue</h3>
            <p className="text-gray-300 text-lg">Salah El Din Citadel</p>
            <p className="text-gray-400 mt-2 mb-6">Bir Youssef</p>

            <a
              href={mapLink}
              target="_blank"
              className="inline-block px-6 py-3 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              Open Location
            </a>
          </div>

          <div className="border border-yellow-400/20 rounded-3xl p-10 bg-[#111111] shadow-2xl">
            <h3 className="text-2xl mb-4 text-yellow-400">Dress Code</h3>
            <p className="text-gray-300 text-lg">Formal / Elegant</p>
            <p className="text-gray-400 mt-2">Black Tie Preferred</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-yellow-400 tracking-[0.4em] uppercase text-sm mb-4">
            Our Story
          </p>

          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Gallery & Memories
          </h2>

          <p className="text-gray-400 text-lg italic mb-14 max-w-2xl mx-auto leading-relaxed">
            “In all the world, there is no heart for me like yours.”
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image}
                className="rounded-3xl h-[420px] object-cover w-full hover:scale-[1.02] transition duration-500"
              />
            ))}
          </div>

          <p className="text-gray-400 mt-8 text-lg">
            A glimpse into our journey together ❤️
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 px-6 bg-black text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-yellow-400 uppercase tracking-[0.4em] text-sm mb-4">
            Our Video
          </p>

          <h2 className="text-4xl md:text-5xl font-light mb-10">
            Love Story Film
          </h2>

          <div className="rounded-3xl overflow-hidden border border-yellow-400/20 shadow-2xl bg-black">
            <video
              controls
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-video object-cover"
            >
              <source
                src="/videos/9c1c2b13-3766-4cea-8b8d-3269dca48774.MP4"
                type="video/mp4"
              />
            </video>
          </div>

          <p className="text-gray-400 mt-8 italic text-lg leading-relaxed max-w-2xl mx-auto">
            “You are my today and all of my tomorrows.”
          </p>
        </div>
      </section>

      {/* Countdown */}
      <section className="py-24 px-6 bg-[#0f0f0f] text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-yellow-400 uppercase tracking-[0.4em] text-sm mb-4">
            Countdown
          </p>

          <h2 className="text-4xl md:text-5xl font-light mb-10">
            Counting Down To Forever
          </h2>

          <p className="text-gray-400 text-lg mb-12 italic max-w-2xl mx-auto leading-relaxed">
            “I have found the one whom my soul loves.”
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: timeLeft.days, label: 'Days' },
              { value: timeLeft.hours, label: 'Hours' },
              { value: timeLeft.minutes, label: 'Minutes' },
              { value: timeLeft.seconds, label: 'Seconds' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-black border border-yellow-400/20 rounded-3xl p-8"
              >
                <div className="text-5xl font-light text-yellow-400 mb-2">
                  {item.value}
                </div>
                <div className="text-gray-400 uppercase tracking-widest text-sm">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-24 px-6 bg-black text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-yellow-400 uppercase tracking-[0.4em] text-sm mb-4">
            Leave A Message
          </p>

          <h2 className="text-4xl md:text-5xl font-light mb-10 leading-tight">
            Share Your Wishes With
            <br />
            Marwan & Rawan
          </h2>

          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Your love, prayers, and heartfelt messages mean the world to us.
          </p>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#111111] border border-yellow-400/20 rounded-2xl px-6 py-4 text-white"
            />

            <textarea
              placeholder="Write your message here..."
              rows="6"
              className="w-full bg-[#111111] border border-yellow-400/20 rounded-2xl px-6 py-4 text-white"
            />

            <button
              type="submit"
              className="px-10 py-4 bg-yellow-400 text-black rounded-full text-lg hover:opacity-90 transition"
            >
              Send Your Wishes
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-yellow-400/10 bg-[#0a0a0a]">
        <h3 className="text-3xl font-light mb-4">
          Marwan <span className="text-yellow-400">&</span> Rawan
        </h3>

        <p className="text-gray-500">
          June 28, 2026 • Salah El Din Citadel – Bir Youssef
        </p>
      </footer>
    </div>
  );
}
