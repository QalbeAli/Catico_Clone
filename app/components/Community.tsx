"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CustomButton } from "@/app/components/ui/custom-button";

const Community = () => {
  const [activeTab, setActiveTab] = useState("memes");

  const tabs = [
    { id: "memes", label: "Live Memes" },
    { id: "telegram", label: "Telegram" },
    { id: "twitter", label: "Twitter" },
  ];

  const memes = [
    {
      id: 1,
      image: "/lootmeme.jpg",
      title: "Epic CatiCorn Moment",
      author: "@caticorn_lover",
      likes: 1234,
    },
    {
      id: 2,
      image: "/lootmeme.jpg",
      title: "To The Moon!",
      author: "@crypto_memer",
      likes: 987,
    },
    {
      id: 3,
      image: "/lootmeme.jpg",
      title: "OH MY GOD Moment",
      author: "@nft_wizard",
      likes: 2345,
    },
  ];

  return (
    <section className="overflow-hidden relative px-4 py-16 md:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-10 top-20 w-36 h-36 rounded-full blur-3xl md:left-20 md:w-72 md:h-72 bg-purple-500/20" />
        <div className="absolute right-10 bottom-20 w-36 h-36 rounded-full blur-3xl md:right-20 md:w-72 md:h-72 bg-pink-500/20" />
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        {/* Title Section */}
        <div className="mb-12 text-center">
          <motion.h2
            className="mb-4 text-4xl md:text-7xl font-acme"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-white">Community &</span>{" "}
            <span className="text-pink-500">Socials</span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-base text-white/80 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join our vibrant community! Share your OH MY GOD moments, create
            memes, and connect with fellow CatiCorn enthusiasts.
          </motion.p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 p-1 rounded-lg backdrop-blur-xl bg-white/5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-pink-500 text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Share Your Moment Card */}
          <motion.div
            className="col-span-1 p-6 rounded-3xl border backdrop-blur-xl md:col-span-2 lg:col-span-3 bg-white/5 border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col gap-6 items-center md:flex-row">
              <div className="flex-1">
                <h3 className="mb-4 text-2xl text-white md:text-3xl font-acme">
                  Share your OH MY GOD moment! 🎉
                </h3>
                <p className="mb-6 text-white/80">
                  Got an epic CatiCorn moment? Share it with the community and
                  let the world see your creativity!
                </p>
                <CustomButton>Share Now</CustomButton>
              </div>
              <div className="w-full md:w-1/3">
                <Image
                  src="/hero-cat.svg"
                  alt="Share Moment"
                  width={200}
                  height={200}
                  className="w-full max-w-[200px] mx-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* Memes Feed */}
          {activeTab === "memes" &&
            memes.map((meme, index) => (
              <motion.div
                key={meme.id}
                className="p-4 rounded-3xl border backdrop-blur-xl transition-all duration-300 group bg-white/5 border-white/10 hover:bg-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="overflow-hidden relative mb-4 rounded-2xl aspect-square">
                  <Image
                    src={meme.image}
                    alt={meme.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h4 className="mb-2 text-xl text-white font-acme">
                  {meme.title}
                </h4>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">{meme.author}</span>
                  <div className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-pink-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                    <span className="text-white/60">{meme.likes}</span>
                  </div>
                </div>
              </motion.div>
            ))}

          {/* Social Feed Widgets */}
          {activeTab === "telegram" && (
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <div className="p-4 rounded-3xl border backdrop-blur-xl aspect-video bg-white/5 border-white/10">
                <div className="flex justify-center items-center w-full h-full">
                  <p className="text-white/80">Telegram Feed Widget</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "twitter" && (
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <div className="p-4 rounded-3xl border backdrop-blur-xl aspect-video bg-white/5 border-white/10">
                <div className="flex justify-center items-center w-full h-full">
                  <p className="text-white/80">Twitter Feed Widget</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Community;
