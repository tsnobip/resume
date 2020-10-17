import React from "react"
import ReactPDF from '@react-pdf/renderer';
import Resume from "./Resume"

ReactPDF.render(<Resume />, `${__dirname}/resume.pdf`);
