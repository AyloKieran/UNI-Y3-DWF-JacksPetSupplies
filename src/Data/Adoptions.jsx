import cara from "../assets/Animals/cara.jpeg";
import zak from "../assets/Animals/zak.jpeg";
import rocko from "../assets/Animals/rocko.jpeg";
import apollo from "../assets/Animals/apollo.jpeg";
import tank from "../assets/Animals/tank.jpeg";
import cane from "../assets/Animals/cane.jpeg";
import benji from "../assets/Animals/benji.jpeg";
import winston from "../assets/Animals/winston.jpeg";

const ADOPTIONS = [
    {
        name: "Cara",
        age: "10 Months Old",
        image: cara
    },
    {
        name: "Zak",
        age: "4 Years Old",
        image: zak
    },
    {
        name: "Rocko",
        age: "9 Years Old",
        image: rocko
    },
    {
        name: "Apollo",
        age: "5 Years Old",
        image: apollo
    },
    {
        name: "Tank",
        age: "5 Years Old",
        image: tank
    },
    {
        name: "Cane",
        age: "21 Months Old",
        image: cane
    },
    {
        name: "Benji",
        age: "14 Months Old",
        image: benji
    },
    {
        name: "Winston",
        age: "3 Years Old",
        image: winston
    },
];

export function getAdoptions() {
    return ADOPTIONS;
}