const { create } = require("ipfs-http-client");

const ipfs = create("https://ipfs.infura.io:5001");

async function run() {
  const files = [{
    path: '/',
    content: JSON.stringify({
      name: "Bulbasaur",
      type: "grass",
      image: "https://gateway.ipfs.io/ipfs/QmSt9xKVt33sTpSa5p6q77Cgqm2TG616G4tphYuCVPp45B",
      description: "Buuuulbaaasaur!"
    })
  }];

  const result = await ipfs.add(files);
  console.log(result);
}

run();
