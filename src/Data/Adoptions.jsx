import cara from "../assets/Animals/cara.jpeg";
import zak from "../assets/Animals/zak.jpeg";
import rocko from "../assets/Animals/rocko.jpeg";
import apollo from "../assets/Animals/apollo.jpeg";
import tank from "../assets/Animals/tank.jpeg";
import cane from "../assets/Animals/cane.jpeg";
import benji from "../assets/Animals/benji.jpeg";
import winston from "../assets/Animals/winston.jpeg";
import dexter from "../assets/Animals/dexter.jpeg";
import arlo from "../assets/Animals/arlo.jpeg";
import kobe from "../assets/Animals/kobe.jpeg";
import rocky from "../assets/Animals/rocky.jpeg";

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
    {
        name: "Dexter",
        age: "4 Years Old",
        image: dexter
    },
    {
        name: "Arlo",
        age: "13 Months Old",
        image: arlo
    },
    {
        name: "Kobe",
        age: "3 Years Old",
        image: kobe
    },
    {
        name: "Rocky",
        age: "7 Years Old",
        image: rocky
    },
];

export function getAdoptions() {
    return ADOPTIONS;
}