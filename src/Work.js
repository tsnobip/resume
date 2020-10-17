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

const Work = () => <View>
    <CategoryTitle>Work experiences</CategoryTitle>
    <View style={styles.legend}>
        <Text>duration in years / time frame</Text><Text>location</Text>
    </View>
    <View style={styles.inner}>
        <WorkExp length={1.3} timeframe="jul 2019 - today" title="Founder" company="Dact" location="Paris, FR" >
            Bring the features and power of git to a web rich text editor for the general public.
            Explored the technical feasibility, designed prototypes, collected feedback from potential users
            in order to design an accessible workflow.
        </ WorkExp >
        <WorkExp length={0.7} timeframe="nov 2018 - jun 2019" title="CTO" company="En Marche" location="Paris, FR" >
            Manage a team of 10 developers, 2 data scientists and 2 product owners for En
            Marche, the currently ruling political party in France, created by Emmanuel
            Macron. In charge of the Data aspect of the campaign for the May 2019
            European elections : building models of the electoral dynamics to optimize
            the door-to-door campaigning, leafleting and public event locations, creating
            services to watch the trending topics on social media, ...
        </ WorkExp >
        <WorkExp length={3.1} timeframe="oct 2015 - nov 2018" title="CTO and Cofounder" company="Foodles" location="Clichy, FR" >
            Foodles has created the first autonomous catering solution for businesses.
            Designed the RFID-based hardware and developed the embedded software of
            Foodles connected fridge. Designed the backoffice (Python Django), its RESTful
            APIs, the BI tools and the patron UX/UI. Managed a team of 5 developers. Filed
            a patent on RFID vending machines. Took part in two successful series of fundraising.
        </ WorkExp >
        <WorkExp length="2.0" timeframe="nov 2013 - oct 2015" title="Project manager" company="IMEDI" location="Versailles, FR" >
            Imedi represents large European companies like Thales, Airbus, Poma or
            Gemalto in the FSU (mostly Georgia and Ukraine). Managed the sales of a
            secure telecommunication system in Ukraine, of ropeway installations, military
            equipment and contactless payment systems in Georgia. Size of the projects :
            between 2 and 100 MEUR.
        </ WorkExp >
        <WorkExp length="0.7" timeframe="mar 2013 - oct 2013" title="Cofounder" company="Fleex Travel" location="Paris, FR" >
            Fleex Travel’s purpose was to offer flight tickets and travel packages searchable by
            travel experience not by destination in exchange for a significant fare discount.
            Drafted the business plan, designed the sale concepts, searched for partner
            airlines, wrote the specifications and designed the UX/UI for Mobile/Web.
        </ WorkExp >
        <WorkExp length="0.5" timeframe="apr 2012 - sept 2012" title="Developer intern" company="Thales" location="Rungis, FR" >
            Designed and developed a customization utility for the Human-Machine
            Interface of Thales TopSky Air Traffic Control Systems. Advanced programming
            in Java, Swing and XML.
        </ WorkExp >
    </View>
</View>

export default Work