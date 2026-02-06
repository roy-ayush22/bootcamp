import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";
import { Keypair } from "@solana/web3.js";

const mnemonics = generateMnemonic();
const seed = mnemonicToSeedSync(mnemonics);

for (let i = 0; i < 1; i++) {
  const path = `m/44'/501'/${i}'/0'`; // derivation path
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  // @ts-ignore
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  const keypair = Keypair.fromSecretKey(secret);

  console.log(`Wallet ${i}:`);
  console.log("  Public Key (address):", keypair.publicKey.toBase58());
}
