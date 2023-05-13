import { ImageBackground, StyleSheet, Image, View, Text } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Behave = () => {
  const [fontsLoaded] = useFonts({
    "Rubik-Regular": require("../../assets/fonts/Rubic/Rubik-Regular.ttf"),
    "Rubik-Medium": require("../../assets/fonts/Rubic/Rubik-Medium.ttf"),
    "Rubik-Bold": require("../../assets/fonts/Rubic/Rubik-Bold.ttf"),
    "Rubik-SemiBold": require("../../assets/fonts/Rubic/Rubik-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ImageBackground
      style={styles.backgroundContainer}
      source={require("../../assets/background.png")}
    >
      <View style={styles.content}>
        <Text style={styles.title}>How to behave ?</Text>
        <Text style={styles.subTitle}>
          In the case that your pepper crop was infected with bacterial spots,
          and you identified them in their early stages using the application or
          any other method, you can do the following:
        </Text>
        <Text style={[styles.item]}>
          Remove and discard infected parts of the plant. If only a small part
          of the plant is affected, prune it back away.
        </Text>
        <Text style={styles.item}>
          Spray with an organic fungicide in the directed solution. They can
          help prevent the spread of disease by killing germs. Note: Be careful
          with copper fungicides - do not apply them to your skin as they can
          cause burns
        </Text>
        <Text style={styles.item}>
          Rotate your pepper crops to a different location each year to prevent
          spores from building up in large numbers.
        </Text>
        <Text style={[styles.item, styles.noMargin]}>
          Always be clean before heading into the greenhouse to avoid spreading
          germs from one plant to another. Also, water at the bottom of the
          plant to avoid water from sitting on the leaves.
        </Text>
      </View>
      <View style={styles.logo}>
        <Image
          resizeMode="contain"
          source={require("../../assets/logo.png")}
          style={styles.logoIcon}
        />
      </View>
    </ImageBackground>
  );
};

export default Behave;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 10,
  },
  title: {
    fontFamily: "Rubik-Medium",
    backgroundColor: "#243F88",
    color: "white",
    textAlign: "center",
    borderRadius: 15,
    paddingHorizontal: 40,
    paddingVertical: 3,
    fontSize: 15,
    position: "absolute",
    top: -15,
    left: "20%",
  },
  content: {
    backgroundColor: "#F7F8FA",
    width: "90%",
    borderRadius: 30,
    padding: 10,
    paddingTop: 25,
    paddingBottom: 60,
    shadowColor: "#000",
    elevation: 2,
  },
  subTitle: {
    fontFamily: "Rubik-Medium",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 13,
    lineHeight: 18,
  },
  item: {
    fontFamily: "Rubik-Regular",
    marginBottom: 15,
    fontSize: 14,
    textAlign: "center",
    // lineHeight: 18,
  },
  logo: {
    position: "absolute",
    zIndex: 100,
    bottom: 0,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 15,
  },
  logoIcon: {
    width: 60,
    height: 60,
  },
  noMargin: {
    marginBottom: 0,
  },
});
