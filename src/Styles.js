import React from "react"
import { View } from "@react-pdf/renderer"

export const defaultMargin = "10mm"
export const innerMargin = "5mm"
export const smallerInnerMargin = "3mm"
export const defaultTextColor = "#3f454d"
export const lighterText = "#7f7f85"
export const defaultLineHeight = "0.6mm"
export const defaultFontSize = 8
export const smallerFontSize = 7

export const Separator = ({ width = "0.1mm", color = lighterText, verticalMargin = 0 }) =>
    <View style={{ borderBottom: width, borderBottomColor: color, marginVertical: verticalMargin }} />