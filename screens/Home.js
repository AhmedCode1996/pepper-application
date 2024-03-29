import { useEffect, useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  View,
  Pressable,
  useWindowDimensions,
  I18nManager,
} from "react-native";
import AnimatedTyping from "./utils/AnimatedTyping";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Home = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Tajawal-Medium": require("../assets/fonts/Tajawal/Tajawal-Medium.ttf"),
    "Tajawal-Bold": require("../assets/fonts/Tajawal/Tajawal-Bold.ttf"),
    "Tajawal-Regular": require("../assets/fonts/Tajawal/Tajawal-Regular.ttf"),
  });
  let [greetingCompleted, setGreetingCompleted] = useState(false);
  const { width, height } = useWindowDimensions();

  const [imageSize, setImageSize] = useState(250);
  const [imageHeight, setimageHeight] = useState(100);
  const [logoPosition, setLogoPosition] = useState("-35%");
  const [imagePosition, setImagePosition] = useState(0);
  const [buttonView, setButtonView] = useState(0);
  const [textSize, setTextSize] = useState(10);
  useEffect(() => {
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
  }, []);
  useEffect(() => {
    if (height <= 790) {
      setImagePosition("30%");
      setButtonView("18%");
      setTextSize(13);
      setImageSize(300);
      setimageHeight(340);
      setImagePosition(110);
    }
  }, [width, height]);

  const centerImageStyle = {
    width: imageSize,
    height: imageHeight,
    top: imagePosition,
  };
  const logoStyle = {
    left: logoPosition,
  };

  const sizeOfText = {
    fontSize: textSize,
  };
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground
      style={styles.backgroundContainer}
      source={require("../assets/farmerLandPage.png")}
    >
      <Image
        resizeMode="contain"
        style={[styles.logo, logoStyle]}
        source={require("../assets/logo.png")}
      />

      <AnimatedTyping
        sizeOfText={sizeOfText}
        text={["A Mobile Application for Bell Peppers Diseases Diagnosis"]}
        onComplete={() => setGreetingCompleted(true)}
      />
      <View style={styles.centerImage}>
        <Image
          resizeMode="stretch"
          style={[styles.image, centerImageStyle]}
          source={require("../assets/pepper.png")}
        />
      </View>
      <View style={[styles.buttonView, { marginTop: buttonView }]}>
        <Pressable
          style={[styles.buttonElement, { backgroundColor: "black" }]}
          onPress={() => navigation.navigate("ArScan")}
        >
          <Image
            resizeMode="contain"
            style={styles.arabicArrow}
            source={require("../assets/right-arrow.png")}
          />
          <Text style={styles.buttonText}>أكمل بالعربية </Text>
        </Pressable>
        <Pressable
          style={[styles.buttonElement, { backgroundColor: "#243F88" }]}
          onPress={() => navigation.navigate("EnScan")}
        >
          <Text style={styles.buttonText}> Continue in English </Text>
          <Image
            resizeMode="contain"
            style={styles.englishArrow}
            source={require("../assets/right-arrow.png")}
          />
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  welcomeContainer: {
    top: "-3%",
    position: "absolute",
    right: "-25%",
  },
  welcome: {
    width: "60%",
  },
  logo: {
    padding: 20,
    width: 70,
    height: 70,
    left: -100,
    marginBottom: 10,
  },
  text: {
    fontSize: 10,
    textAlign: "center",
  },
  image: {
    width: 250,
    height: 250,
    position: "relative",
    zIndex: 5,
  },
  centerImage: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonView: {
    flex: 1,
    paddingTop: 85,
    width: "100%",
    backgroundColor: "#F5EED7",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: "center",
  },
  buttonElement: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 10,
    elevation: 3,
    backgroundColor: "black",
    marginBottom: 15,
    borderRadius: 20,
    width: "55%",
  },
  buttonText: {
    fontSize: 17,
    color: "white",
    fontFamily: "Tajawal-Medium",
  },
  arabicArrow: {
    width: 15,
    height: 15,
  },
  englishArrow: {
    width: 15,
    height: 15,
    transform: [{ rotate: "180deg" }],
  },
});
