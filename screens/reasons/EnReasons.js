import { ImageBackground, StyleSheet, Image, View, Text } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
const Reasons = () => {
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
        <Text style={styles.title}> Reasons</Text>
        <Text style={styles.subtitle}>
          {" "}
          Bacterial spot disease is one of the most common diseases in pepper
          crops.
        </Text>
        <View style={styles.item}>
          <Text style={styles.number}>1</Text>
          <Text style={styles.itemContent}>
            Bacterial spot develops most rapidly during periods of warm
            temperatures and prolonged, humid conditions. The disease develops
            due to relative humidity above 85%, prolonged periods of leaf
            wetness, and heat waves, especially when nighttime temperatures
            remain above 21°C.
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.number}>2</Text>
          <Text style={styles.itemContent}>
            Short periods (three or more days) of less than 40% relative
            humidity will reduce the severity of the disease and delay its
            progression. Long periods of low humidity (at least three weeks)
            stop it irreversibly even if the previously humid conditions return.
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.number}>3</Text>
          <Text style={styles.itemContent}>
            Infections are caused mostly by contaminated seeds. Even infected
            dried seeds that have been stored in the cold for 10 years can
            produce plants showing symptoms of bacterial spot. Therefore, seeds
            constitute an important means of survival and propagation of the
            pathogen.
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.number}>4</Text>
          <Text style={styles.itemContent}>
            Bacteria can move within fields by wind-driven rain, drip
            irrigation, aerosols, and handling of wet vegetation. The longer the
            plants are wet, the greater the chance of infection.
          </Text>
        </View>
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

export default Reasons;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingVertical: 20,
  },
  content: {
    backgroundColor: "#F7F8FA",
    width: "90%",
    borderRadius: 25,
    paddingTop: 25,
    paddingLeft: 10,
    paddingRight: 5,
    paddingBottom: 15,
    shadowColor: "#000",
    elevation: 2,
  },
  title: {
    fontFamily: "Rubik-Medium",
    backgroundColor: "#243F88",
    color: "white",
    textAlign: "center",
    borderRadius: 15,
    paddingHorizontal: 40,
    paddingVertical: 3,
    fontSize: 16,
    position: "absolute",
    top: -15,
    left: "27%",
  },
  subtitle: {
    fontFamily: "Rubik-Medium",
    marginBottom: 20,
    textAlign: "center",
    lineHeight: 16,
    fontSize: 14,
  },
  item: {
    position: "relative",
    paddingRight: 12,
    marginBottom: 30,
  },
  number: {
    backgroundColor: "#243F88",
    color: "white",
    textAlign: "center",
    position: "absolute",
    width: 22,
    height: 22,
    borderRadius: 100,
    fontWeight: "bold",
    top: -25,
    left: 0,
  },
  itemContent: {
    fontSize: 13,
    lineHeight: 16,
    fontFamily: "Rubik-Regular",
    paddingLeft: 10,
  },
  logo: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 15,
    shadowColor: "#000",
    elevation: 4,
  },
  logoIcon: {
    width: 60,
    height: 60,
  },
});
