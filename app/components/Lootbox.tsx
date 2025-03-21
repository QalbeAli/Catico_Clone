"use client";
import Image from "next/image";
import { CustomButton } from "./ui/custom-button";
import { useState } from "react";
import PurchaseModal from "./PurchaseModal";

const Lootbox = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBox, setSelectedBox] = useState<{
    name: string;
    price: string;
    image: string;
  } | null>(null);

  const lootboxTiers = [
    {
      name: "Lunar Luck - 20%",
      price: "0.042 ETH",
      image: "/lootbox2.png",
      rewards: ["Random NFT", "10% Chance Rare", "5% Chance Epic"],
      color: "from-blue-500 to-purple-500",
    },
    {
      name: "Mystic Fortune - 25%",
      price: "0.075 ETH",
      image: "/lootbox2.png",
      rewards: ["Guaranteed Rare+", "25% Chance Epic", "10% Chance Legendary"],
      color: "from-purple-500 to-pink-500",
      featured: true,
    },
    {
      name: "Divine Destiny - 30%",
      price: "0.12 ETH",
      image: "/lootbox2.png",
      rewards: ["Guaranteed Epic+", "40% Chance Legendary", "Special Perks"],
      color: "from-pink-500 to-red-500",
    },
  ];

  const handlePurchase = (box: (typeof lootboxTiers)[0]) => {
    setSelectedBox(box);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="overflow-hidden relative px-4 py-20">
        {/* Background Effects */}
        <div className="absolute inset-0" />
        <div className="absolute inset-0">
          <div className="absolute -left-20 top-40 w-72 h-72 rounded-full blur-3xl animate-pulse bg-purple-500/20" />
          <div className="absolute -right-20 bottom-40 w-72 h-72 rounded-full blur-3xl animate-pulse bg-blue-500/20" />
        </div>

        <div className="relative max-w-[1400px] mx-auto">
          {/* Title Section */}
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-7xl font-acme">
              <span className="text-white">PRESALE</span>{" "}
              <span className="text-pink-500">LOOTBOX</span>
            </h2>
            <p className="mx-auto max-w-4xl text-xl text-white/80">
              Unlock exclusive NFTs and rewards with our special presale mystery
              boxes. Each box contains carefully curated items with varying
              rarity levels.
            </p>
          </div>

          {/* Lootbox Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {lootboxTiers.map((box, index) => (
              <div
                key={index}
                className={`relative group ${
                  box.featured ? "md:-mt-4 md:mb-4" : ""
                }`}
              >
                {/* Featured Tag */}
                {box.featured && (
                  <div className="absolute -top-4 left-1/2 z-10 px-4 py-1 text-sm font-bold text-white bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full -translate-x-1/2">
                    BEST VALUE
                  </div>
                )}

                {/* Card */}
                <div
                  className={`
                  relative overflow-hidden rounded-3xl
                  border backdrop-blur-sm border-white/10
                  ${box.featured ? "bg-white/10" : "bg-white/5"}
                  transition-transform duration-300 group-hover:scale-[1.02]
                `}
                >
                  {/* Lootbox Image */}
                  <div className="overflow-hidden relative aspect-square">
                    <div
                      className={`
                      absolute inset-0 bg-gradient-to-br ${box.color} opacity-20
                      group-hover:opacity-30 transition-opacity duration-300
                    `}
                    />
                    <Image
                      src={box.image}
                      alt={box.name}
                      fill
                      className="object-cover p-8 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-6 text-center">
                      <h3 className="mb-2 text-2xl text-white font-acme">
                        {box.name}
                      </h3>
                      <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-acme">
                        {box.price}
                      </p>
                    </div>

                    {/* Rewards List */}
                    <ul className="mb-6 space-y-3">
                      {box.rewards.map((reward, rewardIndex) => (
                        <li
                          key={rewardIndex}
                          className="flex items-center text-white/80"
                        >
                          <span className="mr-2 text-pink-500">•</span>
                          {reward}
                        </li>
                      ))}
                    </ul>

                    {/* Buy Button */}
                    <CustomButton
                      className="z-50 w-full hover:cursor-pointer"
                      onClick={() => handlePurchase(box)}
                    >
                      Buy Now
                    </CustomButton>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent transition-transform duration-1000 -translate-x-full via-white/10 group-hover:translate-x-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timer Section */}
          <div className="mt-16 text-center">
            <p className="mb-4 text-xl text-white/80">Presale Ends In</p>
            <div className="flex gap-4 justify-center">
              {["23", "12", "45", "30"].map((value, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 min-w-[100px]"
                >
                  <div className="mb-1 text-3xl font-bold text-white">
                    {value}
                  </div>
                  <div className="text-sm text-white/60">
                    {["Days", "Hours", "Minutes", "Seconds"][index]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Modal */}
      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedBox={selectedBox || undefined}
      />
    </>
  );
};

export default Lootbox;
