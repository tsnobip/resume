import React from "react"


import { Text, StyleSheet } from "@react-pdf/renderer"
import { defaultFontSize } from "./Styles"

const styles = StyleSheet.create({
    title: {
        borderBottom: "0.4mm",
        borderColor: '#3f454d',
        paddingBottom: "1mm",
        textTransform: "uppercase",
        fontFamily: "Montserrat",
        fontWeight: "normal",
        fontSize: defaultFontSize,
        textAlign: "right"
    }
})

const CategoryTitle = ({ children }) => <Text style={styles.title}>
    {children}
</Text>

export default CategoryTitle