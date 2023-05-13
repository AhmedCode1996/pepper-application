import { useState } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import * as Linking from "expo-linking";

import * as MailComposer from "expo-mail-composer";
import Toast from "react-native-root-toast";
import { sendData } from "../utils/http";

const Contact = ({ navigation }) => {
  const [name, setName] = useState();
  const [reason, setReason] = useState();
  const [message, setMessage] = useState();

  const showToast = () => {
    Toast.show("Request sent successfully!", Toast.durations.SHORT);
  };

  const sendMail = () => {
    MailComposer.composeAsync({
      subject: reason,
      body: `from ${name} \n ${message}`,
      recipients: ["contact@hafedk.org"],
    });
  };
  const submitHandler = () => {
    sendData({ name, reason, message });
    sendMail();
    showToast();
    setName("");
    setReason("");
    setMessage("");
  };

  return (
    <ImageBackground
      style={styles.backgroundContainer}
      source={require("../../assets/background.png")}
    >
      <View style={styles.contactContent}>
        <Image
          resizeMode="contain"
          style={styles.phoneIcon}
          source={require("../../assets/phone.png")}
        />
        <Text style={styles.contactText}>Contact Us</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder="Name"
        />
        <TextInput
          value={reason}
          onChangeText={setReason}
          style={styles.input}
          placeholder="Contact Reason"
        />
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Message"
          multiline
          style={styles.textareaInput}
        />
        <Pressable onPress={submitHandler} style={styles.sendButton}>
          <Image
            style={styles.sendIcon}
            resizeMode="contain"
            source={require("../../assets/send2.png")}
          />
        </Pressable>
        <Image
          source={require("../../assets/letter.png")}
          style={styles.letterIcon}
        />
        <View style={styles.copyrights}>
          <View style={[styles.shadow, { marginRight: 10 }]}>
            <Pressable onPress={() => navigation.navigate("EnCopyrights")}>
              <Image
                source={require("../../assets/Copyright-button.png")}
                style={styles.copyrightIcon}
              />
            </Pressable>
          </View>
          <View style={styles.shadow}>
            <Pressable onPress={() => Linking.openURL("https://eelu.edu.eg")}>
              <Image
                source={require("../../assets/EELU.png")}
                resizeMode="cover"
                style={styles.universityIcon}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Contact;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contactContent: {
    width: "90%",
    height: "70%",
    backgroundColor: "white",
    borderRadius: 30,
    position: "relative",
    padding: 15,
    elevation: 2,
    shadowColor: "#52006A",
  },
  phoneIcon: {
    width: 70,
    height: 70,
    position: "absolute",
    top: -30,
    right: 15,
  },
  contactText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  input: {
    backgroundColor: "#98A5C7",
    padding: 8,
    height: "10%",
    color: "white",
    borderRadius: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  textareaInput: {
    backgroundColor: "#98A5C7",
    padding: 5,
    color: "white",
    borderRadius: 20,
    height: "30%",
    marginBottom: 10,
    fontWeight: "bold",
  },
  sendButton: {
    backgroundColor: "black",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    height: "10%",
  },
  sendIcon: {
    width: 60,
    height: 60,
  },
  sendText: {
    color: "white",
    fontWeight: "bold",
  },
  letterIcon: {
    position: "absolute",
    bottom: -40,
    left: 10,
    width: 80,
    height: 80,
  },
  copyrights: {
    position: "absolute",
    bottom: -25,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  copyrightIcon: {
    width: 45,
    height: 45,
  },
  universityIcon: {
    width: 45,
    height: 45,
  },
  shadow: {
    width: 45,
    height: 45,
    borderRadius: 50,
    shadowColor: "#000",
    elevation: 4,
    shadowOpacity: 0.58,
    shadowRadius: 20.0,
  },
});
