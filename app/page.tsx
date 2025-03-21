import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NftCollection from "./components/NftCollection";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import Lootbox from "./components/Lootbox";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Lootbox />
      <NftCollection />
      <Roadmap />
      <Footer />
    </main>
  );
}
