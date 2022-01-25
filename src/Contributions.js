import React from "react";

import { View, Link, StyleSheet } from "@react-pdf/renderer";
import { innerMargin } from "./Styles";
import CategoryTitle from "./CategoryTitle";
import { defaultFontSize, defaultLineHeight } from "./Styles";

const styles = StyleSheet.create({
  card: {
    marginTop: innerMargin,
  },
  inner: {
    marginTop: innerMargin,
  },
  contribution: {
    fontFamily: "Montserrat",
    fontWeight: "normal",
    fontSize: defaultFontSize,
    lineHeight: defaultLineHeight,
    textDecoration: "none",
    color: "black",
  },
});

const Contribution = ({ url, children }) => (
  <Link style={styles.contribution} src={url}>
    {children}
  </Link>
);

const Contributions = ({ title, contributions }) => (
  <View style={styles.card}>
    <CategoryTitle>{title}</CategoryTitle>
    <View style={styles.inner}>
      {contributions.map(({ url, name }) => {
        return (
          <Contribution key={url} url={url}>
            {name}
          </Contribution>
        );
      })}
    </View>
  </View>
);

export default Contributions;
