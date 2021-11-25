function bintangSegitiga(n) {
  let bintang = ""; // var bintang
  // loop
  for (let i = 0; i < n; i++) {
    // nested loop
    for (let j = 0; j <= i; j++) {
      bintang += "* ";
    }
    bintang += "\n";
  }
  return bintang;
}

const segitiga = bintangSegitiga(5);
console.log(segitiga);
