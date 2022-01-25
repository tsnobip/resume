import React from "react";
import ReactPDF from "@react-pdf/renderer";
import { Eng as Resume, Fr as CV } from "./versions";
import path from "path";

const engOutputPath = path.join(__dirname, "Résumé_2022_Paul_Tsnobiladzé.pdf");

ReactPDF.render(<Resume />, engOutputPath);
console.log("generated Eng pdf at ", engOutputPath);

const frOutputPath = path.join(__dirname, "CV_2022_Paul_Tsnobiladzé.pdf");

ReactPDF.render(<CV />, frOutputPath);
console.log("generated Fr pdf at ", frOutputPath);
