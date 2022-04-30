import * as React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

import { Text, View } from "../components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

type PlayGround = {
  title: string;
  screen: string;
};
function Tab({ title, screen }: PlayGround) {
  const navigation = useNavigation();
  const navigateToScreen = React.useCallback(() => {
    if (!screen) return;
    navigation.navigate(screen);
  }, [navigation]);
  return (
    <Pressable onPress={navigateToScreen}>
      <View style={styles.tabContainer}>
        <Text style={styles.tabTitle}>{title}</Text>
        <Ionicons name="chevron-forward" />
      </View>
    </Pressable>
  );
}

const playgrounds: PlayGround[] = [
  {
    title: "Introduction",
    screen: "RSIntroduction",
  },
];

export default function ReactSpringHome() {
  const navigation = useNavigation();
  const navigateToIntroduction = React.useCallback(() => {
    navigation.navigate("RSIntroduction");
  }, [navigation]);
  return (
    <View>
      <Text>Here are the list of projects I'm playing with in React Query</Text>
      {playgrounds.map((playground: PlayGround) => (
        <Tab {...playground} />
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
