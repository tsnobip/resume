import React from "react"


import { View, Text, StyleSheet } from "@react-pdf/renderer"
import { smallerInnerMargin, Separator, defaultLineHeight, defaultFontSize, lighterText } from "./Styles"

const styles = StyleSheet.create({
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "2mm",
        marginTop: "4mm"
    },
    secondGroup: {
        flexDirection: "column",
    },
    positionCompany: {
        flexDirection: "row",
        marginTop: "1mm"
    },
    length: {
        fontFamily: "LibreBaskerville",
        fontWeight: "bold",
        fontSize: 16,
        paddingTop: "1mm",
        marginRight: "5mm",
    },
    // years: {
    //     fontFamily: "LibreBaskerville",
    //     fontWeight: "normal",
    //     fontSize: 3.5,
    //     textTransform: "uppercase",
    //     transform: "rotate(90deg)",
    //     marginRight: "5mm",
    // },
    timeframe: {
        fontFamily: "Roboto",
        fontWeight: "light",
        fontSize: defaultFontSize,
        textTransform: "capitalize",
        color: lighterText
    },
    title: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        flexDirection: "row",
        fontSize: defaultFontSize,
        textTransform: "uppercase",
    },
    company: {
        fontFamily: "Roboto",
        fontWeight: "normal",
        fontSize: defaultFontSize,
    },
    location: {
        fontFamily: "Roboto",
        fontWeight: "light",
        fontSize: defaultFontSize,
        textAlign: "right",
        flexGrow: 1,
        color: lighterText
    },
    description: {
        marginTop: smallerInnerMargin,
        fontFamily: "LibreBaskerville",
        fontWeight: "normal",
        fontSize: defaultFontSize,
        lineHeight: defaultLineHeight,
        color: lighterText
    }
})


const WorkExp = (
    {
        length,
        timeframe,
        title,
        company,
        location,
        children }) =>
    <View>
        <View style={styles.topBar}>
            <Text style={styles.length}>{length}</Text>
            {/* <Text style={styles.years}>years</Text> */}
            <View style={styles.secondGroup}>
                <Text style={styles.timeframe}>{timeframe}</Text>
                <View style={styles.positionCompany}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.company}> - </Text>
                    <Text style={styles.company}>{company}</Text>
                </View>
            </View>
            <Text style={styles.location}>{location}</Text>
        </View>
        <Separator />
        <Text style={styles.description}>{children}</Text>
    </View>

export default WorkExp