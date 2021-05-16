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


const Education = ({ title, trainings }) => <View style={styles.card}>
    <CategoryTitle>{title}</CategoryTitle>
    <View style={styles.inner}>
        {trainings.map(({ title, institution, timeframe, details }) =>
            <Training
                key={title}
                title={title}
                institution={institution}
                timeframe={timeframe}>
                {details}
            </Training>)}
    </View>
</View>

export default Education