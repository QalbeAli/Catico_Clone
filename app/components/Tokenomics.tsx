import Image from "next/image";
import React from "react";

const Tokenomics = () => {
  const tokenDistribution = [
    { label: "Presale", percentage: 35.0, color: "bg-pink-500" },
    { label: "Liquidity", percentage: 15.0, color: "bg-blue-500" },
    { label: "Team", percentage: 10.0, color: "bg-green-500" },
    { label: "Stake Rewards", percentage: 5.0, color: "bg-pink-300" },
    { label: "Marketing", percentage: 10.0, color: "bg-purple-500" },
    { label: "Dev and Ecosystem", percentage: 10.0, color: "bg-pink-400" },
    { label: "Community Rewards", percentage: 10.0, color: "bg-purple-400" },
    { label: "AI Reserve", percentage: 5.0, color: "bg-orange-500" },
  ];

  return (
    <section className="overflow-hidden relative px-4 py-20">
      {/* Background Blur Effect */}
      <div className="absolute inset-0" />

      <div className="relative max-w-[1400px] mx-auto">
        {/* Title Section */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-6xl font-acme">
            <span className="text-white">CATICO</span>{" "}
            <span className="text-pink-500">TOKENOMICS</span>
          </h2>
          <p className="mx-auto max-w-4xl text-xl text-white/80">
            Transparent and strategic token distribution to ensure long-term
            project sustainability and community growth.
          </p>
        </div>

        {/* Tokenomics Content */}
        <div className="flex flex-col-reverse gap-12 justify-between items-center md:flex-row">
          {/* Distribution List */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
            {tokenDistribution.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 items-center p-4 rounded-xl border backdrop-blur-sm bg-white/5 border-white/10"
              >
                <div className={`w-4 h-4 rounded-full ${item.color}`} />
                <div className="flex justify-between w-full">
                  <span className="text-white">{item.label}</span>
                  <span className="text-white/80">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pie Chart with Caticorn */}
          <div className="relative w-full md:w-1/2 aspect-square">
            <div className="absolute inset-0">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                {(() => {
                  const paths: React.ReactNode[] = [];
                  let endAngle = -90;

                  tokenDistribution.forEach((item, index) => {
                    const startAngle = endAngle;
                    const percentage = item.percentage;
                    endAngle = startAngle + (percentage / 100) * 360;

                    const x1 = 18 + 16 * Math.cos((Math.PI * startAngle) / 180);
                    const y1 = 18 + 16 * Math.sin((Math.PI * startAngle) / 180);
                    const x2 = 18 + 16 * Math.cos((Math.PI * endAngle) / 180);
                    const y2 = 18 + 16 * Math.sin((Math.PI * endAngle) / 180);

                    const largeArcFlag = percentage > 50 ? 1 : 0;

                    paths.push(
                      <path
                        key={index}
                        d={`M18 18 L${x1} ${y1} A16 16 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                        fill={item.color}
                      />
                    );
                  });

                  return paths;
                })()}
                <circle cx="18" cy="18" r="12" fill="white" />
              </svg>
            </div>

            {/* Caticorn Image */}
            <div className="flex absolute inset-0 justify-center items-center">
              <Image
                src="/logo.svg"
                alt="Caticorn Tokenomics"
                width={200}
                height={200}
                className="z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
