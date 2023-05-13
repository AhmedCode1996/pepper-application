import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Text,
  Pressable,
} from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Method = ({ navigation }) => {
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
        <Text style={styles.title}>Methods of Treatment</Text>
        <Text style={styles.subtitle}>
          You can use the following methods to reduce the survival, spread and
          reproduction of bacteria and reduce infection of plants.
        </Text>
        <View style={styles.item}>
          <Text style={styles.number}>1</Text>
          <Text style={styles.itemContent}>
            Washing the seeds for 40 minutes in diluted Clorox (two parts Clorox
            plus eight parts water) is effective in reducing the number of
            bacteria on the surface of the seeds. And with a note, the bacteria
            inside the seeds are little affected by this treatment.
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.number}>2</Text>
          <Text style={styles.itemContent}>
            Transplants should be checked regularly to identify symptomatic
            seedlings. Symptomatic implants may be removed and discarded or
            treated with streptomycin, if caught very early in disease
            progression.
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.number}>3</Text>
          <Text style={styles.itemContent}>
            Dispose of trays near the outbreak site to reduce the spread of the
            disease. Always start with fresh or disinfected greenhouse supplies
            and materials when planting peppers. Trays, benches, tools, and
            greenhouse structures should be washed and disinfected between crop
            seedlings.
          </Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate("EnNextMethod")}
          style={styles.nextButton}
        >
          <Image
            style={styles.nextButtonImage}
            resizeMode="contain"
            source={require("../../assets/MoreThanWhite.png")}
          />
        </Pressable>
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

export default Method;

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
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 20,
    shadowColor: "#000",
    elevation: 3,
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
    right: "11.5%",
  },
  subtitle: {
    marginBottom: 25,
    textAlign: "center",
    fontSize: 13,
    lineHeight: 18,
    fontFamily: "Rubik-Medium",
  },
  item: {
    position: "relative",
    paddingRight: 10,
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
    fontFamily: "Rubik-Regular",
    fontSize: 13,
    lineHeight: 16,
    paddingLeft: 10
  },
  nextButton: {
    position: "absolute",
    bottom: 15,
    right: 20,
    backgroundColor: "#222221",
    borderRadius: 10,
    paddingHorizontal: 4,
  },
  nextButtonImage: {
    width: 22,
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
});
