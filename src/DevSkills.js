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
    skill: {
        fontFamily: "Montserrat",
        fontWeight: "normal",
        fontSize: defaultFontSize,
        lineHeight: defaultLineHeight
    }
})

const Skill = ({ children }) => <Text style={styles.skill}>{children}</Text>

const DevSkills = ({ title, skills }) => <View style={styles.card}>
    <CategoryTitle>{title}</CategoryTitle>
    <View style={styles.inner}>
        {skills.map(skill => <Skill key={skill}>{skill}</Skill>)}
    </View>
</View>

export default DevSkills