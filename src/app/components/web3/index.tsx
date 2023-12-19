import Core from "@quicknode/sdk/core";
import { Network, Alchemy } from "alchemy-sdk";
import { useEffect } from "react";

const core = new Core({
  endpointUrl:
    "https://convincing-indulgent-sunset.quiknode.pro/9a44fd649656fb69806e08da5d4428a82d15a1f0/",
  config: {
    addOns: {
      nftTokenV2: true,
    },
  },
});
const Web3: React.FC = () => {
  useEffect(() => {
    core.client
      .qn_getWalletTokenBalance({
        wallet: "0x60427f86a29a65747092C31061FC0F9F4F02c5A3",
      })
      .then(console.log);
  }, []);

  return <div>t</div>;
};

export default Web3;
