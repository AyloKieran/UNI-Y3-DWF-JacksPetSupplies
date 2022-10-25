import cbsp from "../assets/Products/cbsp.jpg";
import akf from "../assets/Products/akf.jpg";
import cssp from "../assets/Products/cssp.jpg";
import codf from "../assets/Products/codf.jpg";
import bcinjcf from "../assets/Products/bcinjcf.jpg";
import fwct from "../assets/Products/fwct.jpg";
import cbl from "../assets/Products/cbl.jpg";
import fscf from "../assets/Products/fscf.jpg";
import rbcf from "../assets/Products/rbcf.jpg";
import cf from "../assets/Products/cf.jpg";
import ct from "../assets/Products/ct.jpg";

const PRODUCTS = [
    {
        title: "Cat's Best Smart Pellets",
        price: 20.99,
        image: cbsp
    },
    {
        title: "Applaws Cat Food Cans 156g - Tuna / Fish in Broth",
        price: 1.59,
        image: akf
    },
    {
        title: "Catsan Smart Pack",
        price: 7.99,
        image: cssp
    },
    {
        title: "Chappie Original",
        price: 1.20,
        image: codf
    },
    {
        title: "Bozita Chunks in Jelly 6 x 370g",
        price: 7.99,
        image: bcinjcf
    },
    {
        title: "Feather Waggler Cat Toy",
        price: 1.29,
        image: fwct
    },
    {
        title: "Cat's Best Original Cat Litter",
        price: 9.29,
        image: cbl
    },
    {
        title: "Felix Soup Cat Food",
        price: 1.99,
        image: fscf
    },
    {
        title: "Rocco Classic 6 x 800g",
        price: 11.99,
        image: rbcf
    },
    {
        title: "Chicken Feet",
        price: 1.19,
        image: cf
    },
    {
        title: "Cat Set Toy with Balls and Mouse",
        price: 2.29,
        image: ct
    },
];

export function getProducts() {
    return PRODUCTS;
}