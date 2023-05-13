import { useEffect, useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Image,
  View,
  Pressable,
} from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
const Problems = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Tajawal-Medium": require("../../assets/fonts/Tajawal/Tajawal-Medium.ttf"),
    "Tajawal-Bold": require("../../assets/fonts/Tajawal/Tajawal-Bold.ttf"),
    "Tajawal-Regular": require("../../assets/fonts/Tajawal/Tajawal-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground
      resizeMode="stretch"
      style={styles.backgroundContainer}
      source={require("../../assets/problems.png")}
    >
      <View style={styles.clickButton}>
        <Image
          style={styles.clickImage}
          resizeMode="contain"
          source={require("../../assets/EnProblems.png")}
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate("EnBehave")}
        style={[styles.behaveButton]}
      >
        <Image
          style={styles.behaveImage}
          resizeMode="cover"
          source={require("../../assets/EnBehave.png")}
        />
      </Pressable>
      <View style={styles.methodsButton}>
        <Pressable onPress={() => navigation.navigate("EnMethod")}>
          <Image
            style={styles.methodsImage}
            resizeMode="stretch"
            source={require("../../assets/EnMethods.png")}
          />
        </Pressable>
      </View>
      <View style={styles.reasonsButton}>
        <Pressable onPress={() => navigation.navigate("EnReasons")}>
          <Image
            style={styles.reasonsImage}
            resizeMode="cover"
            source={require("../../assets/EnReasons.png")}
          />
        </Pressable>
      </View>
      <Image
        style={styles.bellLogo}
        resizeMode="contain"
        source={require("../../assets/belllogo.png")}
      />
    </ImageBackground>
  );
};

export default Problems;

const styles = StyleSheet.create({
  backgroundContainer: {
    height: "100%",
    position: "relative",
  },
  clickButton: {
    position: "absolute",
    top: -20,
    left: "20%",
    marginHorizontal: "auto",
    width: 230,
  },
  clickImage: {
    width: "100%",
  },
  behaveButton: {
    position: "absolute",
    top: "13%",
    width: 150,
    height: 120,
  },
  behaveImage: {
    width: "100%",
    height: "100%",
  },
  methodsButton: {
    right: "-42%",
    top: "20%",
    width: 160,
    height: 150,
  },
  methodsImage: {
    width: "100%",
    height: "100%",
  },
  reasonsButton: {
    position: "absolute",
    right: "3%",
    top: "40%",
    width: 120,
    height: 140,
  },
  reasonsImage: {
    width: "100%",
    height: "100%",
  },
  bellLogo: {
    bottom: 0,
    position: "absolute",
    right: "5%",
    width: 100,
    height: 80,
  },
});
