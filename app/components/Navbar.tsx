import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "@/app/components/ui/custom-button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 px-4 py-2">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex gap-2 items-center">
          <Image
            src="/logo.svg"
            alt="CatiCorn"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold text-white font-acme">
            CatiCorn
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8 items-center">
          <Link href="/" className="text-white hover:text-purple-300 font-acme">
            HOME
          </Link>
          <Link
            href="/lootbox"
            className="text-white hover:text-purple-300 font-acme"
          >
            LOOTBOX
          </Link>
          <Link
            href="/feature"
            className="text-white hover:text-purple-300 font-acme"
          >
            FEATURE
          </Link>
          <Link
            href="/airdrop"
            className="text-white hover:text-purple-300 font-acme"
          >
            AIRDROP
          </Link>
          <Link
            href="/roadmap"
            className="text-white hover:text-purple-300 font-acme"
          >
            ROADMAP
          </Link>
          <Link
            href="/tokenomics"
            className="text-white hover:text-purple-300 font-acme"
          >
            TOKENOMICS
          </Link>
          <Link
            href="/kyc-audit"
            className="text-white hover:text-purple-300 font-acme"
          >
            KYC-AUDIT
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex gap-4 items-center">
          <Link href="#" className="text-white hover:text-purple-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>
          <Link href="#" className="text-white hover:text-purple-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-6h2v6z" />
            </svg>
          </Link>
          <CustomButton>Discuss</CustomButton>
          <CustomButton className="!bg-blue-300 hover:!bg-blue-400">
            EN
          </CustomButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
