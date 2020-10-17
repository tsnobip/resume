import React from "react"
import { Document, Page, View, StyleSheet, Font } from "@react-pdf/renderer"

import { defaultMargin, defaultTextColor } from "./Styles"

import RobotoNormal from "../fonts/Roboto/Roboto-Regular.ttf"
import RobotoHeavy from "../fonts/Roboto/Roboto-Black.ttf"
import RobotoLight from "../fonts/Roboto/Roboto-Light.ttf"
import RobotoBold from "../fonts/Roboto/Roboto-Bold.ttf"

import MontserratNormal from "../fonts/Montserrat/Montserrat-Regular.ttf"
import MontserratUltralight from "../fonts/Montserrat/Montserrat-ExtraLight.ttf"

import LibreBaskervilleNormal from "../fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf"
import LibreBaskervilleBold from "../fonts/Libre_Baskerville/LibreBaskerville-Bold.ttf"
import LibreBaskervilleItalic from "../fonts/Libre_Baskerville/LibreBaskerville-Italic.ttf"

import Bio from "./Bio"
import Contact from "./Contact"
import Contributions from "./Contributions"
import DevSkills from "./DevSkills"
import Languages from "./Languages"
import Interests from "./Interests"
import Work from "./Work"
import Education from "./Education"

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
    }
});

const Resume = () => <Document>
    <Page size="A4" style={styles.page}>
        <View style={styles.leftPan}>
            <Bio />
            <Contact />
            <Contributions />
            <DevSkills />
            <Languages />
            <Interests />
        </View>
        <View style={styles.mainSection}>
            <Work />
            <Education />
        </View>
    </Page>
</Document>

export default Resume