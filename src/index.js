'use strict';

import React from "react"
import ReactDOM from "react-dom"
import Resume from "./Resume.js"
import { PDFViewer, StyleSheet } from '@react-pdf/renderer'

const style = StyleSheet.create({ viewer: { height: "100vh" } })

ReactDOM.render(<PDFViewer width="100%" style={style.viewer}>
    <Resume /></PDFViewer >, document.getElementById('root'))