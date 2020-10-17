import React from "react"


import { View, StyleSheet } from "@react-pdf/renderer"
import { innerMargin, defaultFontSize, defaultLineHeight } from "./Styles"
import CategoryTitle from "./CategoryTitle"
import Training from "./Training"

const styles = StyleSheet.create({
    card: {
        marginTop: innerMargin
    },
    inner: {
        marginTop: innerMargin,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    language: {
        fontFamily: "Montserrat",
        fontWeight: "normal",
        flexDirection: "row",
        justifyContent: "space-between",
        fontSize: defaultFontSize,
        lineHeight: defaultLineHeight
    }
})


const Education = () => <View style={styles.card}>
    <CategoryTitle>Education</CategoryTitle>
    <View style={styles.inner}>
        <Training
            title="Computer Engineer"
            institution="École des Mines de St-Étienne, FR"
            timeframe="2007 - 2013">
            MSc in Computer Science, minor in Design
            </Training>
        <Training
            title="MASTER: AI & DATA VIZ"
            institution="Seoul National University, KR"
            timeframe="aug 2011 - jan 2012">
            Semester in Artificial Intelligence
            and Data Visualization
            </Training>
    </View>
</View>

export default Education