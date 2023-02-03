import {
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  View,
  Pressable,
} from 'react-native';
const Home = ({ navigation }) => {
  return (
    <View>
      <ImageBackground
        style={styles.backgroundContainer}
        source={require('../assets/farmerLandPage.png')}
      >
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require('../assets/logo.png')}
        />
        <Text style={styles.text}>
          A Mobile Application for Bell Peppers Diseases Diagnosis
        </Text>
        <View style={styles.centerImage}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require('../assets/pepper.png')}
          />
        </View>
        <View style={styles.buttonView}>
          <Pressable
            style={[styles.buttonElement, { backgroundColor: 'black' }]}
            onPress={() => navigation.navigate('Scan')}
          >
            <Text style={styles.buttonText}>أكمل بالعربية </Text>
          </Pressable>
          {/* <Pressable
            style={[styles.buttonElement, { backgroundColor: '#243F88' }]}
            onPress={() => navigation.navigate('Scan')}
          >
            <Text style={styles.buttonText}> Continue in English </Text>
          </Pressable> */}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  backgroundContainer: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    left: 15,
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 300,
    position: 'relative',
    zIndex: 5,
  },
  centerImage: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#F5EED7',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: -20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonElement: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    elevation: 3,
    backgroundColor: 'black',
    marginBottom: 10,
    borderRadius: 20,
    width: 200,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
