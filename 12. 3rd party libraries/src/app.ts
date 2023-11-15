// import _ from "lodash";
// declare var GLOBAL: any;
// console.log(GLOBAL);
// console.log(_.shuffle([1, 2, 3]));

import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

import { Product } from "./product.model";

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 10.99 },
];

const newProd = new Product("a", -10);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("VALIDATION ERRORS!");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});

const loadedProducts = plainToClass(Product, products);
for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
// console.log("dupa");
