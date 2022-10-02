// string, number, boolean, array, undefined, null, any

let firstName: string | null;
firstName = 'Dan';

let age: number;
age = 45;

let hasPurchased = true;

let productNames: string[] = [];
productNames.push('Basketball');

let petCount: number[] = [];
petCount.push(5);

console.log(firstName, age, hasPurchased, productNames, petCount);

let productType = 'sports'; // homeGoods, grocery ("magic string")
if (productType === 'sports') {
  console.log('Found sports product type.');
}

// Using Enums
// If you want to just check the index values (Ex. 0, 1, 2) of the item of an enum
// you can use const enum. But if you want to see both the index and strings (details of the enum)
// just use enum
enum ProductType {
  Sports,
  HomeGoods,
  Groceries
}
let pt = ProductType.Sports;
if(pt === ProductType.Sports) {
  console.log('Found sports product type.');
}
