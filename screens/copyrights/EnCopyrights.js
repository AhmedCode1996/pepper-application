import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Copyrights = () => {
  const [fontsLoaded] = useFonts({
    "Rubik-Regular": require("../../assets/fonts/Rubic/Rubik-Regular.ttf"),
    "Rubik-MediumItalic": require("../../assets/fonts/Rubic/Rubik-MediumItalic.ttf"),
    "Rubik-Medium": require("../../assets/fonts/Rubic/Rubik-Medium.ttf"),
    "Rubik-Bold": require("../../assets/fonts/Rubic/Rubik-Bold.ttf"),
    "Rubik-SemiBold": require("../../assets/fonts/Rubic/Rubik-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ImageBackground
      style={styles.container}
      resizeMode="stretch"
      source={require("../../assets/Copyrights.png")}
    >
      <View style={styles.content}>
        <Text style={styles.introText}>
          This application was implemented as part of the graduation project for
          the fourth year, Faculty of Computers and Information Technology
        </Text>
        <Text style={styles.universityText}>
          The National Egyptian E-learning University.{" "}
        </Text>
        <View style={styles.list}>
          <FlatList
            data={[
              { key: "Team Members" },
              { key: "Ahmed Mohamed Kamel Abdelhadi Gamel" },
              { key: "Bahaa Mahmoud Abdulhafez" },
              { key: "Ahmed Khalid Abdelwahab Elsayed Harb" },
              { key: "Ahmed Nasser Ahmed Ibrahim" },
              { key: "Abdelkhalek Mohamed Mahmoud" },
              { key: "Abdelaziz Osama Abdelaziz" },
              { key: "Hassan Mohamed Hassan Ahmed Nasr" },
              { key: "Kades Wardy Mansour" },
            ]}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.key}</Text>
            )}
          />
        </View>
        <Text style={styles.contactText}>you can contact the team via </Text>
        <Text style={styles.contactEmail}>Contact@hafedk.org</Text>
        <Text style={styles.copyrightText}>
          All Copyright Reserved 2023 @ EELU{" "}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Copyrights;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    marginTop: "58%",
    marginBottom: 5,
  },

  introText: {
    fontFamily: "Rubik-Regular",
    textAlign: "center",
  },
  universityText: {
    color: "#243F88",
    fontFamily: "Rubik-SemiBold",
  },
  list: {
    height: "45%",
    borderColor: "#243F88",
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 5,
    marginTop: 10,
  },
  item: {
    borderBottomColor: "#243F88",
    borderBottomWidth: 2,
    textAlign: "center",
    paddingVertical: 3,
    paddingHorizontal: 15,
    fontFamily: "Tajawal-Bold",
  },
  contactText: {
    fontFamily: "Rubik-Regular",
  },
  contactEmail: {
    color: "#243F88",
    fontFamily: "Rubik-SemiBold",
    fontSize: 13,
  },
  copyrightText: {
    fontFamily: "Rubik-SemiBold",
    fontSize: 12,
    marginBottom: 5,
    marginTop: 10,
  },
});
