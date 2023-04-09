import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText";

const parseThousand = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
};

const RepositoryStats = (prop) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <StyledText align="center" fontWeight="bold">
          Stars:
        </StyledText>
        <StyledText align="center">
          {parseThousand(prop.stargazersCount)}
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          Forks:
        </StyledText>
        <StyledText align="center">{parseThousand(prop.forksCount)}</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          Review:
        </StyledText>
        <StyledText align="center">
          {parseThousand(prop.reviewCount)}
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          Rating:
        </StyledText>
        <StyledText align="center">
          {parseThousand(prop.ratingAverage)}
        </StyledText>
      </View>
    </View>
  );
};

export default RepositoryStats;
