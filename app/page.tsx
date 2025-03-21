import Hero from "./components/Hero";
import NftCollection from "./components/NftCollection";
import Lootbox from "./components/Lootbox";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import Community from "./components/Community";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <NftCollection />
      <Lootbox />
      <Tokenomics />
      <Roadmap />
      <Community />
    </main>
  );
}
