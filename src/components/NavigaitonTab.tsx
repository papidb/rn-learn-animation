import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable } from "react-native";
import { Text, View } from "./Themed";

export type TabProps = {
  title: string;
  screen: string;
};
export function NavigationTab({ title, screen }: TabProps) {
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
