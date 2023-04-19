"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { Eng as Resume, Fr as CV } from "./versions";
import { PDFViewer, PDFDownloadLink, StyleSheet } from "@react-pdf/renderer";

const style = StyleSheet.create({ viewer: { height: "100vh" } });

ReactDOM.render(
  <div>
    <PDFDownloadLink
      fileName="Résumé_2023_Paul_Tsnobiladzé.pdf"
      document={<Resume />}
    >
      Download here{" "}
    </PDFDownloadLink>
    <PDFViewer width="100%" style={style.viewer}>
      <Resume />
    </PDFViewer>
    <PDFDownloadLink fileName="CV_2023_Paul_Tsnobiladzé.pdf" document={<CV />}>
      Download here{" "}
    </PDFDownloadLink>
    <PDFViewer width="100%" style={style.viewer}>
      <CV />
    </PDFViewer>
  </div>,
  document.getElementById("root")
);
