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

const NextMethod = ({ navigation }) => {
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
          <Text style={styles.number}>4</Text>
          <Text style={styles.itemContent}>
            Avoid using sprinkler irrigation, and do not work in the fields when
            the plants are wet, as the disease can easily spread on workers’
            clothes, tools, and equipment used when free moisture is present.
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.number}>5</Text>
          <Text style={styles.itemContent}>
            A minimum one-year rotation away from peppers and other nightshade
            crops is recommended, and a one-year rotation is preferred. Farmers
            should also avoid planting peppers, tomatoes, eggplants, and
            potatoes too close together during the season.
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.number}>6</Text>
          <Text style={styles.itemContent}>
            Using certified pathogen-free seeds and disease-free sowing to
            prevent the pathogen from entering greenhouses.
          </Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={styles.homeButton}
        >
          <Text style={styles.homeText}>Home Page</Text>
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

export default NextMethod;

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
    shadowColor: "#000",
    elevation: 3,
  },
  title: {
    fontFamily: "Rubik-Mediumd",
    backgroundColor: "#243F88",
    color: "white",
    textAlign: "center",
    borderRadius: 15,
    paddingHorizontal: 40,
    paddingVertical: 3,
    fontSize: 16,
    position: "absolute",
    top: -15,
    left: "13.7%",
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
    marginBottom: 35,
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
    fontSize: 14,
    lineHeight: 16,
    paddingLeft: 10,
  },
  homeButton: {
    backgroundColor: "#222221",
    borderRadius: 10,
    alignSelf: "flex-end",
    bottom: 10,
    right: 5,
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  homeText: {
    color: "white",
    fontSize: 15,
    fontFamily: "Tajawal-Bold",
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
