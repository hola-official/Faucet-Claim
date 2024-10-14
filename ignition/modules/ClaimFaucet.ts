import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const NAME = "DLT Africa";
const SYMBOL = "DLT";
const ClaimFaucetModule = buildModule("ClaimFaucetModule", (m) => {
  // const ClaimFaucet = m.contract("");
  const getName = m.getParameter("tokenName", NAME);
  const getSymbol = m.getParameter("tokenName", SYMBOL);

  const ClaimFaucet = m.contract("ClaimFaucet", [getName, getSymbol]);

  return { ClaimFaucet };
});

export default ClaimFaucetModule;
