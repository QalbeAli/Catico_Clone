import Image from "next/image";

const Hero = () => {
  return (
    <section className="pt-24 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="w-full min-h-[600px] border border-purple-500/30 rounded-[2rem] backdrop-blur-sm bg-purple-900/20 p-8">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            {/* Main Heading */}
            <h1 className="text-6xl font-acme text-white leading-tight mb-4">
              OH MY GOD!{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                The Luckiest NFT/meme
              </span>{" "}
              in Crypto!
            </h1>

            {/* Character and Token Info Container */}
            <div className="relative w-full max-w-7xl h-[400px] my-8">
              {/* Character Image */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                <Image
                  src="/hero-cat.svg"
                  alt="Luck's Victim"
                  width={400}
                  height={400}
                />
              </div>

              {/* Token Info */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 text-right bg-purple-900/40 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm min-w-[600px]">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-6xl font-acme text-white mb-2">
                      $Oh My GOd{" "}
                      <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                        Token
                      </span>
                    </h2>
                    <p className="text-2xl text-purple-300">
                      Powered by Solana 🚀
                    </p>
                  </div>
                  <div className="space-y-6">
                    <p className="text-4xl font-acme text-white">
                      🌟 Fast as Light, Cheap as Sol!
                    </p>
                    <div>
                      <p className="text-3xl text-purple-300 font-acme mb-2">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text font-bold">
                          Total Supply:
                        </span>{" "}
                        42,069,000
                      </p>
                      <p className="text-2xl text-purple-300 font-acme">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text font-bold">
                          Network:
                        </span>{" "}
                        Solana
                      </p>
                    </div>
                    <p className="text-2xl text-purple-200 italic font-acme">
                      *Not Financial Advice
                      <br />
                      (But my cat said it&apos;s purrfect) 😺
                      <br />
                      Fastest Meme in the West! ⚡
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-4xl font-acme text-white italic mt-4">
              Some people trade, some people HODL…{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                I just win!
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
