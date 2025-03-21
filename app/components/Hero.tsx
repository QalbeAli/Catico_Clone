"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="px-4 pt-24">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full min-h-[600px] border border-purple-500/30 rounded-[2rem] backdrop-blur-sm bg-purple-900/20 p-4 md:p-8"
        >
          <div className="flex flex-col gap-2 justify-center items-center text-center">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 text-3xl leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl font-acme"
            >
              OH MY GOD!{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                The Luckiest NFT/meme
              </span>{" "}
              in Crypto!
            </motion.h1>

            {/* Character and Token Info Container */}
            <div className="relative my-4 w-full max-w-7xl md:my-8">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 min-h-[400px]">
                {/* Character Image */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="flex z-10 justify-center lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2"
                >
                  <Image
                    src="/hero-cat.svg"
                    alt="Luck's Victim"
                    width={300}
                    height={300}
                    className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] object-contain"
                    priority
                  />
                </motion.div>

                {/* Token Info */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 text-center lg:text-right bg-purple-900/40 p-4 sm:p-6 md:p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm w-full sm:w-[90%] md:w-[80%] lg:w-auto lg:min-w-[400px] xl:min-w-[600px]"
                >
                  <div className="space-y-4 md:space-y-8">
                    <div>
                      <h2 className="mb-2 text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl font-acme">
                        $Oh My GOd{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                          Token
                        </span>
                      </h2>
                      <p className="text-lg text-purple-300 sm:text-xl md:text-2xl">
                        Powered by Solana 🚀
                      </p>
                    </div>
                    <div className="space-y-3 md:space-y-6">
                      <p className="text-2xl text-white sm:text-3xl md:text-4xl font-acme">
                        🌟 Fast as Light, Cheap as Sol!
                      </p>
                      <div>
                        <p className="mb-2 text-xl text-purple-300 sm:text-2xl md:text-3xl font-acme">
                          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            Total Supply:
                          </span>{" "}
                          42,069,000
                        </p>
                        <p className="text-lg text-purple-300 sm:text-xl md:text-2xl font-acme">
                          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            Network:
                          </span>{" "}
                          Solana
                        </p>
                      </div>
                      <p className="text-lg italic text-purple-200 sm:text-xl md:text-2xl font-acme">
                        *Not Financial Advice
                        <br />
                        (But my cat said it&apos;s purrfect) 😺
                        <br className="hidden sm:block" />
                        <span className="sm:hidden"> - </span>
                        Fastest Meme in the West! ⚡
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-4 text-xl italic text-white sm:text-2xl md:text-3xl lg:text-4xl font-acme"
            >
              Some people trade, some people HODL…{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                I just win!
              </span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
