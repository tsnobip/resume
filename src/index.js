'use strict';

import React from "react"
import ReactDOM from "react-dom"
import Resume from "./Resume.js"
import { PDFViewer, PDFDownloadLink, StyleSheet } from '@react-pdf/renderer'

const style = StyleSheet.create({ viewer: { height: "100vh" } })

ReactDOM.render(<div>
    <PDFDownloadLink fileName="Résumé_2020_Paul_Tsnobiladzé.pdf" document={<Resume />}>Download here </PDFDownloadLink>
    <PDFViewer width="100%" style={style.viewer}>
        <Resume /></PDFViewer >
</div>, document.getElementById('root'))