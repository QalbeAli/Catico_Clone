"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import { CustomButton } from "./ui/custom-button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const NftCollection = () => {
  const [visibleControls, setVisibleControls] = useState(false);

  // Check viewport size on component mount and window resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleControls(window.innerWidth >= 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nftCards = [
    {
      image: "/nft1.jpg",
      title: "CatiCorn NFT",
      link: "https://opensea.io/collection/caticorn",
    },
    {
      image: "/nft1.jpg",
      title: "CatiCorn NFT",
      link: "https://opensea.io/collection/caticorn",
    },
    {
      image: "/nft1.jpg",
      title: "CatiCorn NFT",
      link: "https://opensea.io/collection/caticorn",
    },
    {
      image: "/nft1.jpg",
      title: "CatiCorn NFT",
      link: "https://opensea.io/collection/caticorn",
    },
    {
      image: "/nft1.jpg",
      title: "CatiCorn NFT",
      link: "https://opensea.io/collection/caticorn",
    },
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
      className="px-4 py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Title */}
        <motion.h2
          variants={itemVariants}
          className="mb-4 text-3xl text-center text-blue-400 sm:mb-6 lg:mb-8 sm:text-4xl md:text-5xl lg:text-6xl font-acme"
        >
          NFT COLLECTION
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mb-8 max-w-4xl text-base text-center text-white sm:mb-12 lg:mb-16 sm:text-lg lg:text-xl"
        >
          CatiNFT aims to be a leading NFT marketplace within the CatiCorn
          ecosystem, leveraging the popularity of CatiCorn characters and
          community. It will connect creators and collectors, showcasing work in
          a vibrant digital economy.
        </motion.p>

        {/* NFT Cards Carousel */}
        <motion.div variants={itemVariants}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {nftCards.map((card, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <motion.div
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.4)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex overflow-hidden flex-col h-full rounded-3xl border backdrop-blur-sm border-purple-500/30"
                  >
                    {/* NFT Image */}
                    <div className="overflow-hidden relative aspect-square">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="flex-grow p-4 text-center sm:p-5 lg:p-6">
                      <h3 className="mb-2 text-xl text-white sm:mb-3 lg:mb-4 sm:text-2xl font-acme">
                        {card.title}
                      </h3>
                      <p className="text-xs text-purple-200 sm:text-sm">
                        To see the collection, click on the link below and enter
                        Clash Of Caticorns NFT Collection On Opensea
                        MarketPlace.
                      </p>
                    </div>
                    <div className="flex justify-center p-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <CustomButton>
                          <Link
                            href={card.link}
                            target="_blank"
                            className="text-sm sm:text-base"
                          >
                            See On OpenSea
                          </Link>
                        </CustomButton>
                      </motion.div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Dynamic carousel controls */}
            {visibleControls ? (
              <>
                <CarouselPrevious className="hidden opacity-80 transition-opacity md:flex lg:-left-12 hover:opacity-100" />
                <CarouselNext className="hidden opacity-80 transition-opacity md:flex lg:-right-12 hover:opacity-100" />
              </>
            ) : (
              <div className="flex gap-4 justify-center mt-6">
                <CarouselPrevious className="static mx-2 opacity-80 transition-opacity transform-none hover:opacity-100" />
                <CarouselNext className="static mx-2 opacity-80 transition-opacity transform-none hover:opacity-100" />
              </div>
            )}
          </Carousel>

          {/* Mobile swipe indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: 3, repeatDelay: 4 }}
            className="mt-4 text-sm text-center text-purple-300 md:hidden"
          >
            ← Swipe to see more →
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NftCollection;
