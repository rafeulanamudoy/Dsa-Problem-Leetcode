const arrayCollection = [1, 2, 3, 4, 5];

const spliceArray = arrayCollection.splice(2);

console.log(arrayCollection.length, spliceArray);

//console.log(arrayCollection[4]);
const arraySparse = [1, 2, , 3, 4, , 5, 6, , 7];
//console.log(arraySparse[2], arraySparse.length);

let albums1 = [
  { artist: "Frank Zappa", title: "Over-Nite Sensation", year: 1973 },
  { artist1: "Frank Zappa", title1: "Apostrophe", year1: 1974 },
  { artist2: "Frank Zappa", title2: "One Size Fits All", year2: 1975 },
];
console.log(Object.keys(albums1[1]));
