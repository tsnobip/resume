import React from "react"
import ReactPDF from '@react-pdf/renderer';
import Resume from "./Resume"
import path from "path"

const outputPath = path.join(__dirname, "Résumé_2020_Paul_Tsnobiladzé.pdf")

ReactPDF.render(<Resume />, outputPath)
console.log("generated pdf at ", outputPath)