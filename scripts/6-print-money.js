import sdk from "./1-initialize-sdk.js";

// This is the address of our ERC-20 contract printed out in the step before.
const token = sdk.getToken("0x73eA1E036E5732154C0e96D0d04Acad707605Af8");

(async () => {
  try {
    // What's the max supply you want to set? 1,000,000 is a nice number!
    const amount = 1_000_000;
    //console.log(token)
    // Interact with your deployed ERC-20 contract and mint the tokens!
    await token.mintTo("0x026e0fedfaf30c52dc557fd257299d50a8a542f6",amount);
    const totalSupply = await token.totalSupply();

    // Print out how many of our token's are out there now!
    console.log("✅ There now is", totalSupply.displayValue, "$HOKAGE in circulation");
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();