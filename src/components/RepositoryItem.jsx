import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";

const RepositoryItemHeader = (prop) => (
  <View style={{ flexDirection: "row", paddingBottom: 2 }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={styles.image} source={{ uri: prop.ownerAvatarUrl }} />
    </View>
    <View style={{ flex: 1 }}>
      <StyledText fontSize="subheading" fontWeight="bold">
         {prop.fullName}
      </StyledText>
      <StyledText color="secondary"> {prop.description}</StyledText>
      <StyledText style={styles.language}>{prop.language}</StyledText>
    </View>
  </View>
);

const RepositoryItem = (prop) => (
  <View key={prop.id} style={styles.container}>
    <RepositoryItemHeader {...prop} />
    <RepositoryStats {...prop} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden",
    marginTop:4,
    marginBottom:4,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

export default RepositoryItem;
