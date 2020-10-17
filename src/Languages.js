import React from "react"


import { View, Text, StyleSheet } from "@react-pdf/renderer"
import { innerMargin } from "./Styles"
import CategoryTitle from "./CategoryTitle"
import { defaultFontSize, defaultLineHeight } from "./Styles"

const styles = StyleSheet.create({
    card: {
        marginTop: innerMargin
    },
    inner: {
        marginTop: innerMargin
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

const Language = ({ level, children }) => <View style={styles.language}>
    <Text>{children}</Text>
    <Text>{level}</Text>
</View>

const Languages = () => <View style={styles.card}>
    <CategoryTitle>Languages</CategoryTitle>
    <View style={styles.inner}>
        <Language level="C2">French</Language>
        <Language level="C2">English</Language>
        <Language level="C1">Russian</Language>
    </View>
</View>

export default Languages