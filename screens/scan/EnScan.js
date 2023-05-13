import Lottie from "lottie-react-native";
import { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Text,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
const Scan = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Rubik-Regular": require("../../assets/fonts/Rubic/Rubik-Regular.ttf"),
    "Rubik-Medium": require("../../assets/fonts/Rubic/Rubik-Medium.ttf"),
    "Rubik-Bold": require("../../assets/fonts/Rubic/Rubik-Bold.ttf"),
    "Rubik-SemiBold": require("../../assets/fonts/Rubic/Rubik-SemiBold.ttf"),
  });

  const { width, height } = useWindowDimensions();
  const [buttonWidth, setButtonWidth] = useState(0);
  const [textSize, setTextSize] = useState(0);

  useEffect(() => {
    if (height < 520) {
      setButtonWidth(width / 10);
      setTextSize(13);
    } else {
      setButtonWidth(45);
      setTextSize(15);
    }
  }, [width, height]);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/background.png")}
    >
      <Image
        style={styles.farmerImage}
        source={require("../../assets/defaultFarmer.png")}
      />
      <View style={styles.scanContent}>
        <Pressable
          style={styles.scan}
          onPress={() => navigation.navigate("EnFarmScan")}
        >
          <View style={styles.cameraContainer}>
            <Lottie
              style={styles.cameraIcon}
              source={require("../../assets/animatedScan.json")}
              autoPlay
              loop
            />
          </View>
          <Text style={[styles.textScan, { fontSize: textSize }]}>
            Crop Check
          </Text>
        </Pressable>
        <View style={styles.information}>
          <View style={styles.teamInformation}>
            <Pressable
              style={styles.alignItems}
              onPress={() => navigation.navigate("EnContact")}
            >
              <Text style={[styles.informationText, { fontSize: textSize }]}>
                Contact Us{" "}
              </Text>
              <Image
                resizeMode="contain"
                style={[
                  styles.teamIcon,
                  { width: buttonWidth, height: buttonWidth },
                ]}
                source={require("../../assets/contact-us.png")}
              />
            </Pressable>
          </View>
          <View style={styles.articleInformation}>
            <Pressable
              style={styles.alignItems}
              onPress={() => navigation.navigate("EnProblems")}
            >
              <Text style={[styles.informationText, { fontSize: textSize }]}>
                {" "}
                Awareness
              </Text>
              <Image
                resizeMode="contain"
                style={[
                  styles.articleIcon,
                  { width: buttonWidth, height: buttonWidth },
                ]}
                source={require("../../assets/care.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <Image
        style={styles.bottomLogo}
        resizeMode={"stretch"}
        source={require("../../assets/belllogo.png")}
      />
    </ImageBackground>
  );
};

export default Scan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
  },
  farmerImage: {
    width: "75%",
    height: "45%",
    position: "relative",
    zIndex: 5,
    top: 15,
  },
  scanContent: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#F5EED7",
    width: "100%",
    marginTop: "-25%",
  },
  scan: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 20,
    width: 220,
  },
  cameraContainer: {
    width: 60,
    height: 50,
  },
  cameraIcon: {
    width: "100%",
    height: "100%",
  },
  contactContainer: {
    width: 60,
    height: 50,
  },
  contactIcon: {
    width: "100%",
    height: "100%",
  },
  textScan: {
    fontSize: 14,
    fontFamily: "Rubik-Medium",
  },
  information: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 220,
  },
  teamInformation: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black",
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: "center",
    marginRight: 8,
  },
  articleInformation: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#243F88",
    paddingVertical: 5,
    borderRadius: 20,
  },
  informationText: {
    fontSize: 12,
    fontFamily: "Rubik-Medium",
    color: "white",
    marginBottom: 5,
  },
  alignItems: {
    alignItems: "center",
  },
  teamIcon: {
    width: 45,
    height: 45,
  },
  articleIcon: {
    width: 45,
    height: 45,
  },
  backgroundLogo: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 10,
    position: "absolute",
    bottom: 0,
  },
  bottomLogo: {
    position: "absolute",
    width: 100,
    height: 80,
    bottom: 0,
  },
});
