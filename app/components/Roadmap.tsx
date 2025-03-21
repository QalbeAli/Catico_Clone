import Image from "next/image";

const Roadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Launch website & meme/ NFT drop",
      items: [
        {
          title: "Website Launch:",
          description:
            "Official CatiCorn platform with meme creation tools and NFT marketplace integration.",
        },
        {
          title: "Community Building:",
          description:
            "Launch social media campaigns and community engagement programs.",
        },
        {
          title: "NFT Collection:",
          description:
            "Release exclusive CatiCorn NFT collection with unique designs.",
        },
        {
          title: "Token Launch:",
          description: "Initial token distribution and exchange listings.",
        },
      ],
    },
    {
      phase: "Phase 2",
      title: "Mystery Box events",
      items: [
        {
          title: "Mystery Box Implementation:",
          description:
            "Launch of interactive mystery box system with rare NFT rewards.",
        },
        {
          title: "Special Events:",
          description:
            "Regular mystery box events with exclusive content and rewards.",
        },
        {
          title: "Community Rewards:",
          description:
            "Special mystery box airdrops for active community members.",
        },
      ],
    },
    {
      phase: "Phase 3",
      title: "Integration with play-to-earn features",
      items: [
        {
          title: "Gaming Features:",
          description:
            "Implementation of play-to-earn mechanics and mini-games.",
        },
        {
          title: "Reward System:",
          description:
            "Launch of token rewards for game participation and achievements.",
        },
        {
          title: "Ecosystem Expansion:",
          description:
            "Integration with other play-to-earn platforms and partnerships.",
        },
      ],
    },
  ];

  return (
    <section className="overflow-hidden relative px-4 py-12 md:py-20">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0" />
      <div className="absolute inset-0">
        <div className="absolute left-10 top-20 w-36 h-36 rounded-full blur-3xl md:left-20 md:w-72 md:h-72 bg-purple-500/20" />
        <div className="absolute right-10 bottom-20 w-36 h-36 rounded-full blur-3xl md:right-20 md:w-72 md:h-72 bg-blue-500/20" />
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        {/* Title Section */}
        <div className="mb-8 text-center md:mb-16">
          <h2 className="mb-4 text-4xl md:mb-6 md:text-7xl font-acme">
            <span className="text-white">ROAD</span>
            <span className="text-pink-500">MAP</span>
          </h2>
          <p className="px-4 mx-auto max-w-4xl text-base md:text-xl text-white/80">
            Launching website, community engagement, token utility integration,
            exchange listings, expanding partnerships, and global adoption.
          </p>
        </div>

        {/* Phases */}
        <div className="space-y-8 md:space-y-12 max-w-[1400px]">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="flex relative flex-col gap-4 items-center md:flex-row md:gap-8 md:items-start"
            >
              {/* Phase Icon */}
              <div className="overflow-hidden flex-shrink-0 p-1 w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full md:w-32 md:h-32">
                <div className="flex justify-center items-center w-full h-full rounded-full backdrop-blur-sm bg-blue-900/50">
                  <Image
                    src="/hero-cat.svg"
                    alt="CatiCorn"
                    width={60}
                    height={60}
                    className="transition-transform transform hover:scale-110 md:w-20 md:h-20"
                  />
                </div>
              </div>

              {/* Phase Content */}
              <div className="flex-grow p-4 w-full rounded-2xl border backdrop-blur-lg md:p-8 md:rounded-3xl bg-white/5 border-white/10">
                <h3 className="mb-1 text-2xl text-pink-500 md:mb-2 md:text-3xl font-acme">
                  {phase.phase}
                </h3>
                <h4 className="mb-4 text-xl text-white md:mb-6 md:text-2xl">
                  {phase.title}
                </h4>
                <ul className="space-y-3 md:space-y-4">
                  {phase.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex gap-2 items-start md:gap-3"
                    >
                      <span className="mt-1 text-lg text-pink-500 md:text-xl">
                        •
                      </span>
                      <div>
                        <span className="text-sm font-semibold text-pink-500 md:text-base">
                          {item.title}
                        </span>{" "}
                        <span className="text-sm text-white/80 md:text-base">
                          {item.description}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
