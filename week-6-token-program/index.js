const { mintTo } = require("@solana/spl-token");
const { getOrCreateAssociatedTokenAccount } = require("@solana/spl-token");
const { createMint, TOKEN_PROGRAM_ID } = require("@solana/spl-token");
const { PublicKey } = require("@solana/web3.js");
const { clusterApiUrl } = require("@solana/web3.js");
const { Connection } = require("@solana/web3.js");
const { Keypair } = require("@solana/web3.js");

const payer = Keypair.fromSecretKey(Uint8Array.from());

const mintAuthority = payer;
const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

const createMintForToken = async (payer, mintAuthority) => {
  const mint = await createMint(
    connection,
    payer,
    mintAuthority,
    null,
    6,
    TOKEN_PROGRAM_ID,
  );
  return mint;
};

const mintNewTokens = async (mint, to, amount) => {
  const tokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    payer,
    mint,
    new PublicKey(to),
  );
  console.log("token account created at", tokenAccount.address.toBase58());
  await mintTo(connection, payer, mint, tokenAccount.address, payer, amount);
  console.log("minted", amount, "tokens to", tokenAccount.address.toBase58());
};

const main = async () => {
  const mint = new PublicKey("Dos58SuMVnPVbCbmJAtd8eg7WJpexZMUkWpXjJShddfJ");
  await mintNewTokens(mint, mintAuthority.publicKey, 100 * 10 ** 6);
};

main();
