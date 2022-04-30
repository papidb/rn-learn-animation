import * as React from "react";
import { StyleSheet } from "react-native";

import { NavigationTab, TabProps } from "../components/NavigaitonTab";
import { Text, View } from "../components/Themed";

const playgrounds: TabProps[] = [
  {
    title: "Skia introduction",
    screen: "SkiaIntroduction",
  },
];

export default function TabTwoScreen() {
  return (
    <View>
      <Text>list of skia sub projects</Text>
      {playgrounds.map((playground: TabProps) => (
        <NavigationTab key={playground.screen} {...playground} />
      ))}
    </View>
  );
}
