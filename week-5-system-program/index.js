import {
  Connection,
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"), "finalized");
const sender = Keypair.fromSecretKey(
  Uint8Array.from([
    111, 164, 86, 21, 79, 214, 0, 238, 92, 178, 223, 70, 75, 84, 236, 36, 175,
    193, 244, 156, 171, 198, 45, 177, 194, 2, 102, 17, 217, 56, 127, 197, 198,
    97, 194, 233, 170, 196, 99, 93, 45, 255, 209, 175, 57, 78, 32, 61, 80, 91,
    130, 210, 40, 106, 180, 193, 69, 63, 187, 191, 103, 98, 173, 78,
  ]),
);

const reciever = new PublicKey("JCQaQ88AuRFmzfBBVzY5Hz2gVxpxqhGo6oUk1CedtGfS");

const transaction = new Transaction().add(
  SystemProgram.transfer({
    fromPubkey: sender.publicKey,
    toPubkey: reciever,
    lamports: 0.1 * LAMPORTS_PER_SOL,
  }),
);

const signature = await sendAndConfirmTransaction(connection, transaction, [
  sender,
]);
console.log("sol transfer signature: ", signature);
