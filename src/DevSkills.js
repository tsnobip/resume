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

const DevSkills = () => <View style={styles.card}>
    <CategoryTitle>Tech stack</CategoryTitle>
    <View style={styles.inner}>
        <Skill>Functional Programming</Skill>
        <Skill>OCaml/ReasonML</Skill>
        <Skill>Rescript</Skill>
        <Skill>React</Skill>
        <Skill>GraphQL/Relay</Skill>
        <Skill>Serverless, Google Cloud Run</Skill>
        <Skill>Hasura, PostGraphile</Skill>
        <Skill>AWS DevOps</Skill>
        <Skill>ElasticSearch</Skill>
        <Skill>Kotlin</Skill>
    </View>
</View>

export default DevSkills