import React from "react"


import { Text, View, StyleSheet } from "@react-pdf/renderer"
import { lighterText, defaultLineHeight } from "./Styles"
import CategoryTitle from "./CategoryTitle"
import WorkExp from "./WorkExp"

const styles = StyleSheet.create({
    inner: {
        marginTop: "2mm"
    },
    legend: {
        marginTop: "2mm",
        flexDirection: "row",
        fontFamily: "Montserrat",
        fontWeight: "extralight",
        flexDirection: "row",
        justifyContent: "space-between",
        textTransform: "uppercase",
        fontSize: 6,
        lineHeight: defaultLineHeight,
        color: lighterText
    }
})

const Work = ({ title, durationTimeframe, location, workExps }) => <View>
    <CategoryTitle>{title}</CategoryTitle>
    <View style={styles.legend}>
        <Text>{durationTimeframe}</Text><Text>{location}</Text>
    </View>
    <View style={styles.inner}>
        {workExps.map(({ length, timeframe, title, company, location, details }) =>
            <WorkExp key={timeframe} length={length} timeframe={timeframe} title={title} company={company} location={location} >
                {details}
            </ WorkExp >)}
    </View>
</View>

export default Work