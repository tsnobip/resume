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

const Languages = ({ title, languages }) => <View style={styles.card}>
    <CategoryTitle>{title}</CategoryTitle>
    <View style={styles.inner}>
        {languages.map(({ language, level }) => <Language key={language} level={level}>{language}</Language>)}
    </View>
</View>

export default Languages
