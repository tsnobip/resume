import React from "react"


import { View, Text, StyleSheet } from "@react-pdf/renderer"
import { innerMargin, lighterText } from "./Styles"
import CategoryTitle from "./CategoryTitle"
import { smallerFontSize, defaultLineHeight } from "./Styles"

const styles = StyleSheet.create({
    card: {
        marginTop: innerMargin
    },
    inner: {
        marginTop: innerMargin
    },
    interest: {
        fontSize: smallerFontSize,
        lineHeight: defaultLineHeight,
        fontFamily: "LibreBaskerville",
        fontWeight: "normal",
        color: lighterText
    }
})

const Interest = ({ children }) => <Text style={styles.interest}>{children}</Text>

const Interests = () => <View style={styles.card}>
    <CategoryTitle>Interests</CategoryTitle>
    <View style={styles.inner}>
        <Interest>Cycling (urban, road and trip)</Interest>
        <Interest>Cinema (60s French, Japanese, Italian)</Interest>
        <Interest>Traveling: Korea, Japan, Georgia, Madagascar...</Interest>
        <Interest></Interest>
    </View>
</View>

export default Interests