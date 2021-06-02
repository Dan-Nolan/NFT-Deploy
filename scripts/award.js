const gameItemAddr = "0xF7Ed84D72e1C1432D25dEc57892EAB82dDBA88A7";

async function main() {
  const gameItem = await hre.ethers.getContractAt("GameItem", gameItemAddr);

  const tx = await gameItem.awardItem("0x58fB6832905e329dd2E8c25E5dD835c3758344E0", "ipfs://ipfs/QmRQtacwqqKpgDFUeZgKZa9Zp4e6uLjeUDoEWbw1ir9on9");
  const receipt = await tx.wait();

  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
