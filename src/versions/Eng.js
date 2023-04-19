import React from "react";
import { Document, Page, View } from "@react-pdf/renderer";

import { page, mainSection, leftPan } from "../Styles";

import profilePic from "../../images/profile_pic_paul.jpg";

import Bio from "../Bio";
import Contact from "../Contact";
import Contributions from "../Contributions";
import DevSkills from "../DevSkills";
import Languages from "../Languages";
import Interests from "../Interests";
import Work from "../Work";
import Education from "../Education";

const Resume = () => (
  <Document>
    <Page size="A4" style={page}>
      <View style={leftPan}>
        <Bio
          firstName="Paul"
          lastName="Tsnobiladzé"
          title="Computer engineer"
          profilePic={profilePic}
        >
          Product-centric developer. Functional Programming enthusiast. 10 years
          of experience as a CTO and a software engineer in startups.
        </Bio>
        <Contact
          title="Contact"
          githubPseudo="tsnobip"
          phone="+33 6 75 05 61 61"
          email="paul.tsnobiladze@gmail.com"
        />
        <Contributions
          title="Main public contributions"
          contributions={[
            {
              url: "https://github.com/ocaml/ocaml-lsp/pull/112",
              name: "ocaml/ocaml-lsp",
            },
            {
              url: "https://github.com/zth/rescript-relay/pulls?q=author%3Atsnobip+is%3Apr",
              name: "zth/rescript-relay",
            },
            {
              url: "https://github.com/rescript-lang/rescript-compiler/pulls?q=author%3Atsnobip+is%3Apr",
              name: "rescript-lang/rescript-compiler - Belt",
            },
            {
              url: "https://github.com/wearegoat/bs-prosemirror/pulls?q=author%3Atsnobip+is%3Apr",
              name: "wearegoat/bs-prosemirror",
            },
            {
              url: "https://github.com/reasonml-community/bs-webapi-incubator/pull/165",
              name: "bs-webapi-incubator",
            },
          ]}
        />
        <DevSkills
          title="Tech stack"
          skills={[
            "Functional Programming",
            "OCaml/ReasonML",
            "Rescript",
            "React",
            "GraphQL/Relay",
            "Serverless, Google Cloud Run",
            "Hasura, PostGraphile",
            "AWS DevOps",
            "ElasticSearch",
            "Kotlin",
          ]}
        />
        <Languages
          title="Languages"
          languages={[
            { level: "C2", language: "French" },
            { level: "C2", language: "English" },
            { level: "C1", language: "Russian" },
          ]}
        />
        <Interests
          title="Interests"
          interests={[
            "Cycling (urban, road and trip)",
            "Cinema (60s French, Japanese, Italian)",
            "Traveling: Korea, Japan, Georgia, Madagascar...",
          ]}
        />
      </View>
      <View style={mainSection}>
        <Work
          title="Work experiences"
          durationTimeframe="duration in years / time frame"
          location="location"
          workExps={[
            {
              length: 2.5,
              timeframe: "Oct 2020 - Today",
              title: "Software engineer",
              company: "Dialo.ai",
              location: "Paris, FR",
              details: `Build a platform that allows to design a new generation of voice user interfaces. \
Joined a team of experienced developers and designers to work on some of the most bleeding edge technologies out-there, \
OCaml, Rescript, serverless services, Natural Language Processing...`,
            },
            {
              length: 1.3,
              timeframe: "Jul 2019 - Oct 2020",
              title: "Founder",
              company: "Dact",
              location: "Paris, FR",
              details: `Bring the features and power of git to a web rich text editor for the general public. \
Explored the technical feasibility, designed prototypes, collected feedback from potential users \
in order to design an accessible workflow.`,
            },
            {
              length: 0.7,
              timeframe: "Nov 2018 - Jun 2019",
              title: "CTO",
              company: "En Marche",
              location: "Paris, FR",
              details: `Manage a team of 10 developers, 2 data scientists and 2 product owners for En \
Marche, the currently ruling political party in France, created by Emmanuel Macron. In charge of the Data aspect \
of the campaign for the May 2019 European elections: building models of the electoral dynamics to optimize \
the door-to-door campaigning, leafleting and public event locations, creating services to watch the trending \
topics on social media, ...`,
            },
            {
              length: 3.1,
              timeframe: "Oct 2015 - Nov 2018",
              title: "CTO and Cofounder",
              company: "Foodles",
              location: "Clichy, FR",
              details: `Foodles has created the first autonomous catering solution for businesses.\
Designed the RFID-based hardware and developed the embedded software of Foodles connected fridge. Designed \
the backoffice (Python Django), its RESTful APIs, the BI tools and the patron UX/UI. Managed a team of 5 developers. \
Filed two patents on RFID vending machines. Took part in two successful series of fundraising.`,
            },
            {
              length: "2.0",
              timeframe: "Oct 2013 - Oct 2015",
              title: "Project manager",
              company: "IMEDI",
              location: "Versailles, FR",
              details: `Imedi represents large European companies like Thales, Airbus, Poma or \
Gemalto in the FSU (mostly Georgia and Ukraine). Managed the sales of a secure telecommunication system \
in Ukraine, of ropeway installations, military equipment and contactless payment systems in Georgia. \
Size of the projects: between 2 and 100 MEUR.`,
            },
            {
              length: "0.5",
              timeframe: "Apr 2012 - Sept 2012",
              title: "Developer intern",
              company: "Thales",
              location: "Rungis, FR",
              details: `Designed and developed a customization utility for the Human-Machine Interface \
of Thales TopSky Air Traffic Control Systems. Development in Java, Swing and XML.`,
            },
          ]}
        />
        <Education
          title="Education"
          trainings={[
            {
              title: "Computer Engineer",
              institution: "École des Mines de St-Étienne, FR",
              timeframe: "2007 - 2013",
              details: "MSc in Computer Science, minor in Design",
            },
            {
              title: "MASTER: AI & DATA VIZ",
              institution: "Seoul National University, KR",
              timeframe: "Aug 2011 - Jan 2012",
              details:
                "Semester in Artificial Intelligence and Data Visualization",
            },
          ]}
        />
      </View>
    </Page>
  </Document>
);

export default Resume;
