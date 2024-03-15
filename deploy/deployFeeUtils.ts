import { createDeployFunction } from "../utils/deploy";

const func = createDeployFunction({
  contractName: "FeeUtils",
  libraryNames: ["MarketUtils"],
});

export default func;
