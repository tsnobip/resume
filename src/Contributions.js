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

const Contribution = ({ children }) => <Text style={styles.skill}>{children}</Text>

const DevSkills = () => <View style={styles.card}>
    <CategoryTitle>Main public contributions</CategoryTitle>
    <View style={styles.inner}>
        <Contribution>zth/reason-relay</Contribution>
        <Contribution>rescript/rescript-compiler - Belt</Contribution>
        <Contribution>wearegoat/bs-prosemirror</Contribution>
        <Contribution></Contribution>
        <Contribution>ocaml/ocaml-lsp</Contribution>
        <Contribution>bs-webapi-incubator</Contribution>
    </View>
</View>

export default DevSkills