import { useEffect, useState } from 'react';
import {
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  View,
  Pressable,
  useWindowDimensions,
} from 'react-native';
const Home = ({ navigation }) => {
  const { width, height } = useWindowDimensions();

  const [logWidth, setLogWidth] = useState(0);
  const [logHeight, setLogHeight] = useState(0);
  const [imageSize, setImageSize] = useState(250);
  const [logoPosition, setLogoPosition] = useState('-35%');
  const [imagePosition, setImagePosition] = useState(0);
  const [buttonView, setButtonView] = useState(0);
  const [textSize, setTextSize] = useState(10);
  const log = (
    <View style={styles.log}>
      <Text> width{logWidth}</Text>
      <Text> height{logHeight}</Text>
    </View>
  );

  useEffect(() => {
    setLogWidth(width);
    setLogHeight(height);
    if (height < 600) {
      setImageSize(180);
      setImagePosition(30);
    }
    if (height < 753 && width < 360) {
      setImagePosition('30%');
      setButtonView('15%');
      setTextSize(13);
    }
    if (height < 450) {
      setImageSize(170);
    }
    if (height < 500) {
      setImageSize(170);
    }
    if (height < 550) {
      setImageSize(150);
    }

    if (width < 280) {
      setLogoPosition(-90);
    }
    if (width < 255) {
      setLogoPosition(-80);
    }
    if (width < 235) {
      setLogoPosition(-70);
    }
    if (width > 300) {
      setLogoPosition('-36%');
    } else {
      setLogoPosition(-100);
      setImageSize(180);
      setButtonView(0);
      setImagePosition(30);
    }
  }, [width, height]);

  const centerImageStyle = {
    width: imageSize,
    top: imagePosition,
  };
  const logoStyle = {
    left: logoPosition,
  };

  const sizeOfText = {
    fontSize: textSize,
  };

  return (
    <ImageBackground
      style={styles.backgroundContainer}
      source={require('../assets/farmerLandPage.png')}
    >
      <Image
        resizeMode="contain"
        style={[styles.logo, logoStyle]}
        source={require('../assets/logo.png')}
      />
      <Text style={[styles.text, sizeOfText]}>
        A Mobile Application for Bell Peppers Diseases Diagnosis
      </Text>
      <View style={styles.centerImage}>
        <Image
          resizeMode="contain"
          style={[styles.image, centerImageStyle]}
          source={require('../assets/pepper.png')}
        />
      </View>
      <View style={[styles.buttonView, { marginTop: buttonView }]}>
        <Pressable
          style={[styles.buttonElement, { backgroundColor: 'black' }]}
          onPress={() => navigation.navigate('Scan')}
        >
          <Image
            resizeMode="contain"
            style={styles.arabicArrow}
            source={require('../assets/right-arrow.png')}
          />
          <Text style={styles.buttonText}>أكمل بالعربية </Text>
        </Pressable>
        <Pressable
          style={[styles.buttonElement, { backgroundColor: '#243F88' }]}
          onPress={() => navigation.navigate('Scan')}
        >
          <Text style={styles.buttonText}> Continue in English </Text>
          <Image
            resizeMode="contain"
            style={styles.englishArrow}
            source={require('../assets/right-arrow.png')}
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  logo: {
    padding: 20,
    width: 70,
    height: 70,
    left: -100,
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 250,
    position: 'relative',
    zIndex: 5,
  },
  centerImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    flex: 1,
    paddingTop: 40,
    marginTop: '-15%',
    width: '100%',
    backgroundColor: '#F5EED7',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
  },
  buttonElement: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    elevation: 3,
    backgroundColor: 'black',
    marginBottom: 10,
    borderRadius: 20,
    width: '75%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  arabicArrow: {
    width: 15,
    height: 15,
  },
  englishArrow: {
    width: 15,
    height: 15,
    transform: [{ rotate: '180deg' }],
  },
  log: {
    position: 'absolute',
  },
});
