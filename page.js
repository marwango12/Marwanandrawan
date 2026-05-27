'use client';

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

    return {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))).toString(),
      hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)).toString(),
      minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)).toString(),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60)).toString(),
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <div>
          <audio autoPlay loop>
            <source src="/music/Jason Mraz - Lucky (feat. Colbie Caillat) [Official Video] [HD Remaster] - (320 Kbps).mp3" type="audio/mpeg" />
          </audio>

          <p className="uppercase tracking-[0.5em] text-sm text-yellow-400 mb-6">
            A Love Written In The Stars
          </p>

          <h1 className="text-5xl md:text-7xl font-light mb-6">
            Marwan Mohamed
            <br />
            <span className="text-yellow-400">&</span>
            <br />
            Rawan Gamal
          </h1>

          <p className="text-xl text-gray-300 mb-6">28 June 2026</p>

          <p className="italic text-gray-400 mb-10">
            “Every love story is beautiful, but ours is our favorite.”
          </p>

          <a
            href="#details"
            className="px-8 py-4 bg-yellow-400 text-black rounded-full"
          >
            Wedding Details
          </a>
        </div>
      </section>

      <section id="details" className="py-24 px-6 text-center">
        <h2 className="text-4xl mb-12 text-yellow-400">Wedding Details</h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-[#111] p-8 rounded-3xl">
            <h3 className="text-2xl mb-4">Date & Time</h3>
            <p>Sunday, 28 June 2026</p>
            <p>7:00 PM</p>
          </div>

          <div className="bg-[#111] p-8 rounded-3xl">
            <h3 className="text-2xl mb-4">Venue</h3>
            <p>Salah El Din Citadel</p>
            <p>Bir Youssef</p>

            <a
              href={mapLink}
              target="_blank"
              className="inline-block mt-6 px-6 py-3 border border-yellow-400 text-yellow-400 rounded-full"
            >
              Open Location
            </a>
          </div>

          <div className="bg-[#111] p-8 rounded-3xl">
            <h3 className="text-2xl mb-4">Dress Code</h3>
            <p>Formal / Elegant</p>
            <p>Black Tie Preferred</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0f0f0f] text-center">
        <h2 className="text-4xl mb-12 text-yellow-400">Gallery & Memories</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              className="rounded-3xl h-[420px] object-cover w-full"
            />
          ))}
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl mb-12 text-yellow-400">Love Story Film</h2>

        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden">
          <video controls autoPlay muted loop className="w-full">
            <source
              src="/videos/9c1c2b13-3766-4cea-8b8d-3269dca48774.MP4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0f0f0f] text-center">
        <h2 className="text-4xl mb-12 text-yellow-400">
          Counting Down To Forever
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: timeLeft.days, label: 'Days' },
            { value: timeLeft.hours, label: 'Hours' },
            { value: timeLeft.minutes, label: 'Minutes' },
            { value: timeLeft.seconds, label: 'Seconds' },
          ].map((item) => (
            <div key={item.label} className="bg-black p-8 rounded-3xl border border-yellow-400/20">
              <div className="text-5xl text-yellow-400 mb-2">{item.value}</div>
              <div>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl mb-10 text-yellow-400">
            Leave A Message
          </h2>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#111] rounded-2xl px-6 py-4"
            />

            <textarea
              rows="6"
              placeholder="Write your message here..."
              className="w-full bg-[#111] rounded-2xl px-6 py-4"
            />

            <button
              type="submit"
              className="px-10 py-4 bg-yellow-400 text-black rounded-full"
            >
              Send Your Wishes
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
