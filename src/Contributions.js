import React from "react"


import { View, Text, Link, StyleSheet } from "@react-pdf/renderer"
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

// todo remove the added character (!) in src when bug is fixed in @react-pdf/renderer
const Contribution = ({ url, children }) => <Link style={styles.skill} src={"!" + url} >{children}</Link>

const DevSkills = () => <View style={styles.card}>
    <CategoryTitle>Main public contributions</CategoryTitle>
    <View style={styles.inner}>
        <Contribution url="https://github.com/zth/reason-relay/pulls?q=author%3Atsnobip+is%3Apr">zth/reason-relay</Contribution>
        <Contribution url="https://github.com/rescript-lang/rescript-compiler/pulls?q=author%3Atsnobip+is%3Apr">rescript-lang/rescript-compiler - Belt</Contribution>
        <Contribution url="https://github.com/wearegoat/bs-prosemirror/pulls?q=author%3Atsnobip+is%3Apr">wearegoat/bs-prosemirror</Contribution>
        <Contribution url="https://github.com/ocaml/ocaml-lsp/pull/112">ocaml/ocaml-lsp</Contribution>
        <Contribution url="https://github.com/reasonml-community/bs-webapi-incubator/pull/165">bs-webapi-incubator</Contribution>
    </View>
</View>

export default DevSkills