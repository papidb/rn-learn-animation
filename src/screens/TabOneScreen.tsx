import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { NavigationTab, TabProps } from "../components/NavigaitonTab";

const playgrounds: TabProps[] = [
  {
    title: "Introduction",
    screen: "RSIntroduction",
  },
];

export default function TabOneScreen() {
  return (
    <View>
      <Text>
        Here are the list of projects I'm playing with in React spring
      </Text>
      {playgrounds.map((playground: TabProps) => (
        <NavigationTab key={playground.screen} {...playground} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    height: 50,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "grey",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  tabTitle: {
    fontSize: 18,
  },
});
