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
    "Tajawal-Medium": require("../../assets/fonts/Tajawal/Tajawal-Medium.ttf"),
    "Tajawal-Bold": require("../../assets/fonts/Tajawal/Tajawal-Bold.ttf"),
    "Tajawal-Regular": require("../../assets/fonts/Tajawal/Tajawal-Regular.ttf"),
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
          هذا التطبيق تم تنفيذه من ضمن مشروع التخرج الخاص بالفرقة الرابعة كلية
          الحاسبات وتكنولوجيا المعلومات{" "}
        </Text>
        <Text style={styles.universityText}>
          الجامعة المصرية للتعلم الإلكترونى الأهلية
        </Text>
        <View style={styles.list}>
          <FlatList
            data={[
              { key: "أعضاء الفريق" },
              { key: "أحمد محمد كامل عبد الهادى جميل" },
              { key: "بهاء محمود عبد الحافظ" },
              { key: "أحمد خالد عبد الوهاب السيد حرب" },
              { key: "أحمد ناصر أحمد إبراهيم" },
              { key: "عبد الخالق محمد محمود" },
              { key: "عبد العزيز أسامة عبد العزيز" },
              { key: "حسن محمد حسن أحمد نصر" },
              { key: "قديس وردى منصور" },
            ]}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.key}</Text>
            )}
          />
        </View>
        <Text style={styles.contactText}>
          يمكنكم التواصل مع الفريق عبر الإيميل الإلكترونى
        </Text>
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
    fontFamily: "Tajawal-Medium",
  },
  universityText: {
    color: "#243F88",
    fontFamily: "Tajawal-Bold",
  },
  list: {
    fontWeight: "bold",
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
    fontFamily: "Tajawal-Medium",
  },
  contactEmail: {
    color: "#243F88",
    fontFamily: "Tajawal-Bold",
    fontSize: 13,
  },
  copyrightText: {
    fontFamily: "Tajawal-Medium",
    fontSize: 13,
    marginBottom: 5,
    marginTop: 10,
  },
});
