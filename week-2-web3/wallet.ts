import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

const getBalance = async (address: any) => {
  try {
    const connection = new Connection(clusterApiUrl("devnet"));
    const publickey = new PublicKey(address);
    const balanceLamports = await connection.getBalance(publickey);
    const balanceSol = balanceLamports / 1000000000;

    console.log(`Balance: ${balanceSol}SOL`);
    return balanceSol;
  } catch (error) {
    console.log("Error: ", error);
  }
};

getBalance("");
