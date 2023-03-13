import { useEffect, useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Text,
  Pressable,
  useWindowDimensions,
} from 'react-native';
const Scan = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const [logWidth, setLogWidth] = useState(0);
  const [logHeight, setLogHeight] = useState(0);
  const [buttonWidth, setButtonWidth] = useState(0);
  const [textSize, setTextSize] = useState(0);
  const [cameraIcon, setCameraIcon] = useState(0);
  const [backgroundLogo, setBackgroundLogo] = useState();

  useEffect(() => {
    setLogHeight(height);
    setLogWidth(width);
    if (height < 520) {
      setButtonWidth(width / 10);
      setCameraIcon(width / 9);
      setTextSize(13);
      setBackgroundLogo(height / 7);
    } else {
      setButtonWidth(45);
      setCameraIcon(width / 7);
      setTextSize(15);
    }
  }, [width, height]);

  return (
    <ImageBackground
      style={styles.container}
      source={require('./../assets/background.png')}
    >
      <Image
        style={styles.farmerImage}
        source={require('./../assets/defaultFarmer.png')}
      />
      <View style={styles.scanContent}>
        <Pressable
          style={styles.scan}
          onPress={() => navigation.navigate('FarmScan')}
        >
          <Image
            style={[
              styles.cameraIcon,
              { width: cameraIcon, height: cameraIcon },
            ]}
            source={require('./../assets/Scan.png')}
          />
          <Text style={[styles.textScan, { fontSize: textSize }]}>
            فحص المحصول
          </Text>
        </Pressable>
        <View style={styles.information}>
          <View style={styles.teamInformation}>
            <Pressable
              style={styles.alignItems}
              onPress={() => navigation.navigate('Contact')}
            >
              <Text style={[styles.informationText, { fontSize: textSize }]}>
                تواصل معنا{' '}
              </Text>
              <Image
                resizeMode="contain"
                style={[
                  styles.teamIcon,
                  { width: buttonWidth, height: buttonWidth },
                ]}
                source={require('./../assets/contact-us.png')}
              />
            </Pressable>
          </View>
          <View style={styles.articleInformation}>
            <Pressable onPress={() => navigation.navigate('Problems')}>
              <Text style={[styles.informationText, { fontSize: textSize }]}>
                {' '}
                توعية
              </Text>
              <Image
                resizeMode="contain"
                style={[
                  styles.articleIcon,
                  { width: buttonWidth, height: buttonWidth },
                ]}
                source={require('./../assets/care.png')}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <Image
        style={styles.bottomLogo}
        resizeMode={'stretch'}
        source={require('../assets/belllogo.png')}
      />
    </ImageBackground>
  );
};

export default Scan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  },
  farmerImage: {
    width: '75%',
    height: '45%',
    position: 'relative',
    zIndex: 5,
    top: 15,
  },
  scanContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#F5EED7',
    width: '100%',
    marginTop: '-25%',
  },
  scan: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 20,
    width: 220,
  },
  cameraIcon: {
    width: 50,
    height: 50,
  },
  textScan: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  information: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 220,
  },
  teamInformation: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: 'center',
    marginRight: 8,
  },
  articleInformation: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#243F88',
    paddingVertical: 5,
    borderRadius: 20,
  },
  informationText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  alignItems: {
    alignItems: 'center',
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
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 0,
  },
  bottomLogo: {
    position: 'absolute',
    width: 100,
    height: 80,
    bottom: 0,
  },
});
