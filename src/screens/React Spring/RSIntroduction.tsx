import * as React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

import { useSpring, config, to } from "@react-spring/core";
import { Text, View } from "../../components/Themed";
import { animated as RSAnimated } from "@react-spring/native";
import { Ionicons } from "@expo/vector-icons";

const AutoNumber = () => {
  const [open, toggle] = React.useState(false);
  // const { width } = useWindowDimensions();
  const width = 300;
  const numberSpring = useSpring({ width: open ? width : 0 });
  const increaseNumber = React.useCallback(() => {
    toggle(!open);
  }, [open]);
  return (
    <Pressable onPress={increaseNumber}>
      <RSAnimated.View style={[styles.animatingAuto]}>
        <RSAnimated.View style={[styles.animatingAutoProgress, numberSpring]} />

        <RSAnimated.View style={[{ flex: 1, zIndex: 23 }]}>
          <RSAnimated.Text style={[styles.text, { color: "white" }]}>
            {numberSpring.width.to((n) => n.toFixed(0))}
          </RSAnimated.Text>
        </RSAnimated.View>
      </RSAnimated.View>
    </Pressable>
  );
};

const RSPressable = RSAnimated(Pressable);

const PulsingButton = () => {
  const [flip, set] = React.useState(false);
  const props = useSpring({
    to: { width: 55, height: 55, borderRadius: 55 },
    from: { width: 50, height: 50, borderRadius: 50 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });
  return (
    <RSAnimated.View style={[styles.pulsingContainer, props]}>
      <View style={styles.pulsing}>
        <Ionicons name="cart" size={30} />
      </View>
    </RSAnimated.View>
  );
};

export default function Introduction() {
  // const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  const [flip, set] = React.useState(false);
  const props = useSpring({
    to: { backgroundColor: "green", borderRadius: 20 },
    from: { backgroundColor: "red", borderRadius: 10 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  const rotateSpring = useSpring({
    // loop: true,
    // to: { transform: [{ rotateZ: 180 }] },
    from: { translateX: 0 },
    translateX: 180,
    delay: 200,
    config: { duration: 3000 },
  });
  const fadeInOutSpring = useSpring({
    loop: true,
    to: [
      { opacity: 1, backgroundColor: "#ffaaee" },
      { opacity: 0, backgroundColor: "rgb(14,26,19)" },
    ],
    from: { opacity: 0, backgroundColor: "red" },
    // config: { ...config.stiff, duration: 3000 },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Intro to React Spring</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <PulsingButton />

      <ScrollView>
        {/* animating object */}
        <AutoNumber />
        <RSAnimated.View style={[styles.button, props]}>
          <Text style={styles.text}>
            I will change in color and borderRadius
          </Text>
        </RSAnimated.View>
        <RSAnimated.View style={[styles.button, fadeInOutSpring]}>
          <Text>I will fade in and out</Text>
        </RSAnimated.View>
        <RSAnimated.View
          style={[
            styles.rotate,
            { transform: [{ translateX: rotateSpring.translateX }] },
          ]}
        >
          <Text style={styles.text}>Rotate</Text>
        </RSAnimated.View>
      </ScrollView>
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  animatingAutoProgress: {
    position: "absolute",
    // backgroundColor: "red",
    flex: 1,
    zIndex: 1,

    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "hotpink",
  },
  animatingAuto: {
    flex: 1,
    height: 60,
    borderRadius: 7.5,
    borderWidth: 2,
    justifyContent: "center",
    marginVertical: 5,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    // backgroundColor: "blue",
    // alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button: { padding: 20 },
  rotate: {
    width: 80,
    height: 80,
    backgroundColor: "#46e891",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  pulsing: {
    backgroundColor: "transparent",
  },
  pulsingContainer: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
    bottom: 20,
    right: 20,
    zIndex: 20,
  },
});
