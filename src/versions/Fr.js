import React from "react"
import { Document, Page, View } from "@react-pdf/renderer"

import { page, mainSection, leftPan } from "../Styles"

import profilePic from "../../images/profile_pic_paul.jpg"


import Bio from "../Bio"
import Contact from "../Contact"
import Contributions from "../Contributions"
import DevSkills from "../DevSkills"
import Languages from "../Languages"
import Interests from "../Interests"
import Work from "../Work"
import Education from "../Education"


const Resume = () => <Document>
    <Page size="A4" style={page}>
        <View style={leftPan}>
            <Bio firstName="Paul" lastName="Tsnobiladzé" title="Ingénieur Civil des Mines" profilePic={profilePic} >
                Passionné de produit et de programmation fonctionnelle.
                6 ans d'expérience en tant que CTO et ingénieur logiciel dans des startups.
        </Bio>
            <Contact title="Contact" githubPseudo="tsnobip" phone="+33 6 75 05 61 61" email="paul.tsnobiladze@gmail.com" />
            <Contributions title="Contributions publiques" contributions={[
                { url: "https://github.com/ocaml/ocaml-lsp/pull/112", name: "ocaml/ocaml-lsp" },
                { url: "https://github.com/zth/rescript-relay/pulls?q=author%3Atsnobip+is%3Apr", name: "zth/rescript-relay" },
                { url: "https://github.com/rescript-lang/rescript-compiler/pulls?q=author%3Atsnobip+is%3Apr", name: "rescript-lang/rescript-compiler - Belt" },
                { url: "https://github.com/wearegoat/bs-prosemirror/pulls?q=author%3Atsnobip+is%3Apr", name: "wearegoat/bs-prosemirror" },
                { url: "https://github.com/reasonml-community/bs-webapi-incubator/pull/165", name: "bs-webapi-incubator" }
            ]} />
            <DevSkills title="Stack technique" skills={[
                "Programmation fonctionnelle",
                "OCaml/ReasonML",
                "Rescript",
                "React",
                "GraphQL/Relay",
                "Serverless, Google Cloud Run",
                "Hasura, PostGraphile",
                "AWS DevOps",
                "ElasticSearch",
                "Kotlin"
            ]} />
            <Languages title="Langues" languages={[
                { level: "C2", language: "Français" },
                { level: "C2", language: "Anglais" },
                { level: "C1", language: "Russe" },
            ]} />
            <Interests title="Centres d'intérêts" interests={[
                "Cyclisme (urbain, route et tourisme)",
                "Cinema (français, japonais, italien)",
                "Voyages: Corée, Japon, Géorgie, Madagascar...",
            ]} />
        </View>
        <View style={mainSection}>
            <Work title="Expériences professionnelles" durationTimeframe="nombre d'années / période"
                location="emplacement" workExps={[

                    {
                        length: 0.7, timeframe: "oct. 2020 - auj", title: "Ingénieur logiciel",
                        company: "Dialo.ai", location: "Paris, FR",
                        details: `Dialo construit une plateforme permettant la conception d'une nouvelle génération d'interfaces utilisateur vocales. \
J'ai rejoint une équipe de développeurs et designers expérimentés afin de travailler sur les technologies les plus en pointe du moment : \
OCaml, Rescript, services serverless, traitement du langage naturel...`
                    },
                    {
                        length: 1.3, timeframe: "juill. 2019 - oct. 2020", title: "Fondateur",
                        company: "Dact.ai", location: "Paris, FR",
                        details: `Dact apporte la puissance et les fonctionnalités de git à un éditeur de texte web grand public. \
Exploration de la faisabilité technique, design des prototypes, recueil de feedback d'utilisateurs potentiels \
afin de concevoir un processus de travail accessible.`
                    },
                    {
                        length: 0.7, timeframe: "nov. 2018 - juin 2019", title: "CTO",
                        company: "La République En Marche", location: "Paris, FR",
                        details: `Direction d'une équipe de 10 développeurs, 2 data scientists et 2 product owners pour \
La République En Marche. Responsable de l'aspect Data de la campagne des Élections européennes de mai 2019: \
création de modèles électoraux pour optimiser la campagne de porte-à-porte et boîtage et l'emplacement des événements publics, \
création de services de suivi des tendances sur les réseaux sociaux, ...`
                    },
                    {
                        length: 3.1, timeframe: "oct. 2015 - nov. 2018", title: "CTO et Cofondateur",
                        company: "Foodles", location: "Clichy, FR",
                        details: `Foodles a créé la cantine totalement autonome. Conception du matériel et \
développement du logiciel embarqué du Frigo Connecté Foodles. Conception du backoffice (Python Django) et \
de ses API Rest. Design des UI client. Conception des outils de BI. Gestion d’une équipe de 5 développeurs. \
Dépôt de deux brevets sur les distributeurs RFID. Contribution à deux levées de fonds réussies.`
                    },
                    {
                        length: "2.0", timeframe: "oct. 2013 - oct. 2015", title: "Chef de projets",
                        company: "IMEDI", location: "Versailles, FR",
                        details: `Imedi représente de grandes entreprises européennes comme Thales, Airbus, \
Poma ou Gemalto en Géorgie et en Ukraine. Gestion de projets de vente de systèmes de communication sécurisée \
en Ukraine, de remontées mécaniques, d’équipements militaires et de systèmes de paiement sans contact en Géorgie. \
Taille des projets : entre 2 et 100 M€`
                    },
                    {
                        length: "0.5", timeframe: "avr. 2012 - sept. 2012", title: "Stagiaire développeur",
                        company: "Thales", location: "Rungis, FR",
                        details: `Spécifications et conception d’un outil de customisation de JHMI, l’interface \
homme-machine nouvelle génération du système de gestion du trafic aérien Thales TopSky. Programmation en \
Java, Swing et XML.`
                    },

                ]} />
            <Education title="Education" trainings={[


                {
                    title: "Ingénieur Civil des Mines",
                    institution: "École des Mines de St-Étienne, FR",
                    timeframe: "2010 - 2013",
                    details: "Option informatique, spécialité Dév Mobile, mineure en Design"
                },
                {
                    title: "MASTER: AI & DATA VIZ",
                    institution: "Seoul National University, KR",
                    timeframe: "août 2011 - jan. 2012",
                    details: "Semestre en intelligence artificielle et visualisation de l’information"
                }

            ]} />
        </View>
    </Page>
</Document>

export default Resume