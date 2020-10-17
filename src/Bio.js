import React from "react"

import { View, Text, Image, StyleSheet } from "@react-pdf/renderer"
import profilePic from "../images/profile_pic_paul.jpg"
import { defaultFontSize, defaultLineHeight } from "./Styles"

const styles = StyleSheet.create({
    firstName: {
        fontFamily: 'LibreBaskerville',
        fontSize: 12,
        lineHeight: "0.3mm"
    },
    lastName: {
        fontFamily: 'LibreBaskerville',
        fontSize: 26,
        textAlign: "justify"
    },
    jobTitle: {
        fontFamily: 'Montserrat',
        fontSize: 8,
        textTransform: "uppercase"
    },
    profilePic: {
        marginVertical: "8mm",
        width: "35mm",
        height: "auto",
        borderRadius: "100",
        alignSelf: "center"
    },
    bio: {
        fontFamily: 'LibreBaskerville',
        fontStyle: 'italic',
        lineHeight: defaultLineHeight,
        fontSize: defaultFontSize,
        textAlign: "left"
    }
})


const Bio = () =>
    <View >
        <Text style={styles.firstName}>Paul</Text>
        <Text style={styles.lastName}>Tsnobiladzé</Text>
        <Text style={styles.jobTitle}>Computer engineer</Text>
        <Image src={profilePic} style={styles.profilePic} />
        <Text style={styles.bio}>Product-centric developer.
        Functional Programming enthusiast.
        5 years of experience as a CTO in startups.</Text>
    </View>


export default Bio