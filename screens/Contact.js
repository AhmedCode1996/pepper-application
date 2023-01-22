import { useState } from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const Contact = () => {
  const [name, setName] = useState('الاسم');
  const [email, setEmail] = useState('إيميلك الإلكترونى');
  const [message, setMessage] = useState('الرسالة');

  return (
    <ImageBackground
      style={styles.backgroundContainer}
      source={require('../assets/background.png')}
    >
      <View style={styles.contactContent}>
        <Image
          resizeMode="contain"
          style={styles.phoneIcon}
          source={require('./../assets/phone.png')}
        />
        <Text style={styles.contactText}>تواصل معنا</Text>
        <TextInput
          placeholder="الاسم"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="إيميلك الاإلكترونى"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="الرسالة"
          value={message}
          onChangeText={setMessage}
          multiline
          style={styles.textareaInput}
        />
        <Pressable style={styles.sendButton}>
          <Image
            style={styles.sendIcon}
            resizeMode="contain"
            source={require('./../assets/send.png')}
          />
        </Pressable>
        <Image
          source={require('./../assets/letter.png')}
          style={styles.letterIcon}
        />
        <View style={styles.copyrights}>
          <View style={[styles.shadow, { marginRight: 10 }]}>
            <Pressable>
              <Image
                source={require('./../assets/Copyright-button.png')}
                style={styles.copyrightIcon}
              />
            </Pressable>
          </View>
          <View style={styles.shadow}>
            <Pressable>
              <Image
                source={require('./../assets/EELU.png')}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactContent: {
    width: '90%',
    height: '70%',
    backgroundColor: 'white',
    borderRadius: 30,
    position: 'relative',
    padding: 15,
    elevation: 2,
    shadowColor: '#52006A',
  },
  phoneIcon: {
    width: 70,
    height: 70,
    position: 'absolute',
    top: -30,
    right: 15,
  },
  contactText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#98A5C7',
    padding: 8,
    height: '10%',
    color: 'white',
    borderRadius: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  textareaInput: {
    backgroundColor: '#98A5C7',
    padding: 5,
    color: 'white',
    borderRadius: 20,
    height: '30%',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  sendButton: {
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '10%',
  },
  sendIcon: {
    width: 60,
    height: 60,
  },
  sendText: {
    color: 'white',
    fontWeight: 'bold',
  },
  letterIcon: {
    position: 'absolute',
    bottom: -40,
    left: 10,
    width: 80,
    height: 80,
  },
  copyrights: {
    position: 'absolute',
    bottom: -25,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    shadowColor: '#000',
    elevation: 4,
    shadowOpacity: 0.58,
    shadowRadius: 20.0,
  },
});
