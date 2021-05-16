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

const Interests = ({ title, interests }) => <View style={styles.card}>
    <CategoryTitle>{title}</CategoryTitle>
    <View style={styles.inner}>
        {interests.map(interest => <Interest key={interest}>{interest}</Interest>)}
    </View>
</View>

export default Interests