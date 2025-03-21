import Image from "next/image";
import { CustomButton } from "./ui/custom-button";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBox?: {
    name: string;
    price: string;
    image: string;
  };
}

const PurchaseModal = ({
  isOpen,
  onClose,
  selectedBox,
}: PurchaseModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="flex fixed inset-0 z-50 justify-center items-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 backdrop-blur-sm bg-black/60"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-[#001529] rounded-3xl border border-white/10 p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Title */}
        <h2 className="mb-6 text-2xl text-white font-acme">Purchase Lootbox</h2>

        {/* Network Selection */}
        <div className="mb-6">
          <label className="block mb-2 text-white">Choose Network</label>
          <div className="relative">
            <select className="w-full bg-[#0A2540] text-white rounded-xl px-4 py-3 appearance-none border border-white/10">
              <option>Ethereum</option>
              <option>Solana</option>
              <option>Binance Smart Chain</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white/60"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Selected Lootbox */}
        <div className="mb-6">
          <label className="block mb-2 text-white">
            Selected lootbox and amount you pay (ETH)
          </label>
          <div className="flex gap-4">
            <div className="flex-grow">
              <div className="flex items-center gap-3 bg-[#0A2540] rounded-xl px-4 py-3 border border-white/10">
                <Image
                  src={selectedBox?.image || "/lootbox.png"}
                  alt="Lootbox"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <div className="flex-grow">
                  <div className="text-white">
                    {selectedBox?.name} - 20% ($320)
                  </div>
                  <div className="text-sm text-white/60">
                    0.042 ETH | 0.052 ETH (20% OFF)
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white/60"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="mt-1 text-sm text-red-500">
                Insufficient Balance
              </div>
            </div>
            <div className="w-32">
              <div className="bg-[#0A2540] rounded-xl px-4 py-3 border border-white/10 flex items-center justify-between">
                <span className="text-white">ETH</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white/60"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* CATICO Amount */}
        <div className="mb-8">
          <label className="block mb-2 text-white">
            Amount of CATICO you receive
          </label>
          <div className="flex gap-4">
            <input
              type="text"
              value="14M (2.7M free coins)"
              readOnly
              className="flex-grow px-4 py-3 text-black bg-white rounded-xl"
            />
            <div className="w-32">
              <div className="bg-[#0A2540] rounded-xl px-4 py-3 border border-white/10 flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="CATICO"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-white">CATICO</span>
              </div>
            </div>
          </div>
        </div>

        {/* Purchase Button */}
        <CustomButton className="w-full !bg-blue-500 hover:!bg-blue-600">
          Insufficient Balance
        </CustomButton>
      </div>
    </div>
  );
};

export default PurchaseModal;
