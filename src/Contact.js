import React from "react"

import { View, Text, StyleSheet, Svg, Path } from "@react-pdf/renderer"
import { innerMargin, Separator, defaultFontSize } from "./Styles"
import CategoryTitle from "./CategoryTitle"

const styles = StyleSheet.create({
    card: {
        marginTop: innerMargin,
        marginBottom: "2mm"
    },
    inner: {
        marginTop: innerMargin
    },
    contactLine: {
        display: "flex",
        flexDirection: "row",
        paddingLeft: "4mm",
        alignItems: "center"
    },
    contact: {
        marginLeft: "6mm",
        fontSize: defaultFontSize,
        fontFamily: "Roboto",
        fontWeight: "normal"
    }
})

const logoSize = 8

const phoneLogo = <Svg xmlns="http://www.w3.org/2000/svg" height={logoSize} width={logoSize} viewBox="0 0 512 512">
    <Path fill="currentColor" stroke="currentColor" strokeMiterlimit={10} strokeWidth={6} d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
</Svg>

const emailLogo = <Svg xmlns="http://www.w3.org/2000/svg" height={logoSize} width={logoSize} viewBox="0 0 24 24">
    <Path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    <Path d="M0 0h24v24H0z" fill="none" />
</Svg>

const githubLogo = <Svg width={logoSize} height={logoSize} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z" />
</Svg>

const ContactLine = ({ logo, children }) =>
    <View style={styles.contactLine}>
        {logo}
        <Text style={styles.contact}>{children}</Text>
    </View>

const Contact = () => <View style={styles.card}>
    <CategoryTitle>Contact</CategoryTitle>
    <View style={styles.inner}>
        <ContactLine logo={githubLogo}>tsnobip</ContactLine>
        <Separator verticalMargin={8} />
        <ContactLine logo={phoneLogo}>+33 6 75 05 61 61</ContactLine>
        <Separator verticalMargin={8} />
        <ContactLine logo={emailLogo}>paul.tsnobiladze@gmail.com</ContactLine>
    </View>
</View>

export default Contact