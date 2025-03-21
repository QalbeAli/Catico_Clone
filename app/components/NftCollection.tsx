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

const NftCollection = () => {
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

  return (
    <section className="px-4 py-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Title */}
        <h2 className="mb-8 text-6xl text-center text-blue-400 font-acme">
          NFT COLLECTION
        </h2>

        {/* Description */}
        <p className="mx-auto mb-16 max-w-4xl text-xl text-center text-white">
          CatiNFT aims to be a leading NFT marketplace within the CatiCorn
          ecosystem, leveraging the popularity of CatiCorn characters and
          community. It will connect creators and collectors, showcasing work in
          a vibrant digital economy.
        </p>

        {/* NFT Cards Carousel */}
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
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4"
              >
                <div className="overflow-hidden rounded-3xl border backdrop-blur-sm border-purple-500/30">
                  {/* NFT Image */}
                  <div className="overflow-hidden relative aspect-square">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 text-center">
                    <h3 className="mb-4 text-2xl text-white font-acme">
                      {card.title}
                    </h3>
                    <p className="text-sm text-purple-200">
                      To see the collection, click on the link below and enter
                      Clash Of Caticorns NFT Collection On Opensea MarketPlace.
                    </p>
                  </div>
                  <div className="flex justify-center pb-4">
                    <CustomButton>
                      <Link href={card.link} target="_blank">
                        See On OpenSea
                      </Link>
                    </CustomButton>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default NftCollection;
