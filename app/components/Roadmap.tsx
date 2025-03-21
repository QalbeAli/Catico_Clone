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
    <section className="overflow-hidden relative px-4 py-20">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl bg-purple-500/20" />
        <div className="absolute right-20 bottom-20 w-72 h-72 rounded-full blur-3xl bg-blue-500/20" />
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        {/* Title Section */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-7xl font-acme">
            <span className="text-white">ROAD</span>
            <span className="text-pink-500">MAP</span>
          </h2>
          <p className="mx-auto max-w-4xl text-xl text-white/80">
            Launching website, community engagement, token utility integration,
            exchange listings, expanding partnerships, and global adoption.
          </p>
        </div>

        {/* Phases */}
        <div className="space-y-12 max-w-[1400px]">
          {phases.map((phase, index) => (
            <div key={index} className="flex relative gap-8 items-start">
              {/* Phase Icon */}
              <div className="overflow-hidden flex-shrink-0 p-1 w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full">
                <div className="flex justify-center items-center w-full h-full rounded-full backdrop-blur-sm bg-blue-900/50">
                  <Image
                    src="/hero-cat.svg"
                    alt="CatiCorn"
                    width={80}
                    height={80}
                    className="transition-transform transform hover:scale-110"
                  />
                </div>
              </div>

              {/* Phase Content */}
              <div className="flex-grow p-8 rounded-3xl border backdrop-blur-lg bg-white/5 border-white/10">
                <h3 className="mb-2 text-3xl text-pink-500 font-acme">
                  {phase.phase}
                </h3>
                <h4 className="mb-6 text-2xl text-white">{phase.title}</h4>
                <ul className="space-y-4">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-3 items-start">
                      <span className="mt-1 text-xl text-pink-500">•</span>
                      <div>
                        <span className="font-semibold text-pink-500">
                          {item.title}
                        </span>{" "}
                        <span className="text-white/80">
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
