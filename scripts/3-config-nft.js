import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x5dd75D0d8Cb36731808a90FAe430235826583060");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "YC membership",
        description: "This NFT will give you access to YCDAO!",
        image: readFileSync("scripts/assets/yc.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();