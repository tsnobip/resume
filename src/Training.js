import React from "react"


import { View, Text, StyleSheet } from "@react-pdf/renderer"
import { smallerFontSize, lighterText, Separator, defaultFontSize, defaultLineHeight } from "./Styles"

const styles = StyleSheet.create({
    card: {
        width: "50mm"
    },
    title: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: defaultFontSize,
        textTransform: "uppercase",
        marginBottom: "1mm"
    },
    timeframe: {
        fontFamily: "Roboto",
        fontWeight: "light",
        fontSize: defaultFontSize,
        textTransform: "capitalize",
        color: lighterText,
        paddingBottom: "1mm"
    },
    institution: {
        fontFamily: "Montserrat",
        fontWeight: "extralight",
        fontSize: defaultFontSize,
        lineHeight: defaultLineHeight,
        color: lighterText,
        marginTop: "2mm"
    },
    description: {
        fontFamily: "LibreBaskerville",
        fontWeight: "normal",
        fontSize: smallerFontSize,
        lineHeight: defaultLineHeight,
        color: lighterText
    }
})


const Training = ({ title, institution, timeframe, children }) =>
    <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Separator />
        <Text style={styles.institution}>{institution}</Text>
        <Text style={styles.description}>{children}</Text>
        <Text style={styles.timeframe}>{timeframe}</Text>
    </View>


export default Training