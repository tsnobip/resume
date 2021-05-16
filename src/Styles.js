import React from "react"
import { View, Font, StyleSheet } from "@react-pdf/renderer"

import RobotoNormal from "../fonts/Roboto/Roboto-Regular.ttf"
import RobotoHeavy from "../fonts/Roboto/Roboto-Black.ttf"
import RobotoLight from "../fonts/Roboto/Roboto-Light.ttf"
import RobotoBold from "../fonts/Roboto/Roboto-Bold.ttf"

import MontserratNormal from "../fonts/Montserrat/Montserrat-Regular.ttf"
import MontserratUltralight from "../fonts/Montserrat/Montserrat-ExtraLight.ttf"

import LibreBaskervilleNormal from "../fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf"
import LibreBaskervilleBold from "../fonts/Libre_Baskerville/LibreBaskerville-Bold.ttf"
import LibreBaskervilleItalic from "../fonts/Libre_Baskerville/LibreBaskerville-Italic.ttf"

Font.register({
    family: 'Roboto',
    fonts: [
        {
            src: RobotoNormal
        },
        {
            fontWeight: 'heavy',
            src: RobotoHeavy
        },
        {
            fontWeight: 'light',
            src: RobotoLight
        },
        {
            fontWeight: 'bold',
            src: RobotoBold
        }
    ]
})

Font.register({
    family: 'Montserrat',
    fonts: [
        {
            src: MontserratNormal
        },
        {
            fontWeight: 'ultralight',
            src: MontserratUltralight
        }
    ]
})

Font.register({
    family: 'LibreBaskerville',
    fonts: [
        {
            src: LibreBaskervilleNormal
        },
        {
            fontWeight: 'bold',
            src: LibreBaskervilleBold
        },
        {
            fontStyle: 'italic',
            src: LibreBaskervilleItalic
        }
    ]
})

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

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        color: defaultTextColor,
        fontWeight: "normal",
        // border: "0.2mm"
    },
    mainSection: {
        marginVertical: defaultMargin,
        marginRight: defaultMargin,
        flexGrow: 1,
        flexDirection: "column",
        justifyContent: "space-between"
        // , border: "0.2mm"
    },
    leftPan: {
        margin: defaultMargin,
        width: "60mm",
        fontFamily: 'Montserrat',
        fontWeight: 'ultralight',
        flexDirection: "column",
        justifyContent: "space-between"
        // , border: "0.2mm"
    },
    bio: {
        firstName: {
            fontFamily: 'LibreBaskerville',
            fontSize: 12,
            lineHeight: "0.3mm"
        },
        lastName: {
            fontFamily: 'LibreBaskerville',
            fontSize: 26,
            textAlign: "justify"
        },
        jobTitle: {
            fontFamily: 'Montserrat',
            fontSize: 8,
            textTransform: "uppercase"
        },
        profilePic: {
            marginVertical: "8mm",
            width: "35mm",
            height: "auto",
            borderRadius: "100",
            alignSelf: "center"
        },
        bio: {
            fontFamily: 'LibreBaskerville',
            fontStyle: 'italic',
            lineHeight: defaultLineHeight,
            fontSize: defaultFontSize,
            textAlign: "left"
        }
    }
})

export const page = styles.page
export const mainSection = styles.mainSection
export const leftPan = styles.leftPan
export const bio = styles.bio