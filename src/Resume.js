import React from "react"
import { Document, Page, View } from "@react-pdf/renderer"

import { page, mainSection, leftPan } from "./Styles"


import Bio from "./Bio"
import Contact from "./Contact"
import Contributions from "./Contributions"
import DevSkills from "./DevSkills"
import Languages from "./Languages"
import Interests from "./Interests"
import Work from "./Work"
import Education from "./Education"


const Resume = () => <Document>
    <Page size="A4" style={page}>
        <View style={leftPan}>
            <Bio />
            <Contact />
            <Contributions />
            <DevSkills />
            <Languages />
            <Interests />
        </View>
        <View style={mainSection}>
            <Work />
            <Education />
        </View>
    </Page>
</Document>

export default Resume