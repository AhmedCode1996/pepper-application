import {
  View,
  Text,
  Pressable,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';
import { launchCameraAsync, launchImageLibraryAsync } from 'expo-image-picker';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../data';
import NetInfo from '@react-native-community/netinfo';
import Lottie from 'lottie-react-native';
import { isLoaded, useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading';

const FarmScan = ({ navigation }) => {
  const { formState } = useGlobalContext();
  const [image, setImage] = useState('');
  const [status, setStatus] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(true);

  const [fontsLoaded] = useFonts({
    'Tajawal-Medium': require('../assets/fonts/Tajawal/Tajawal-Medium.ttf'),
    'Tajawal-Bold': require('../assets/fonts/Tajawal/Tajawal-Bold.ttf'),
    'Tajawal-Regular': require('../assets/fonts/Tajawal/Tajawal-Regular.ttf'),
  });
  useEffect(() => {
    NetInfo.fetch().then((state) => {
      setIsConnected(state.isConnected);
    });
  }, []);

  const takeImageHandler = async () => {
    const takenImage = await launchCameraAsync({
      allowsEditing: false,
      quality: 1,
    });

    if (!takenImage.canceled) {
      setImage(takenImage.assets[0].uri);
      setLoading(true);
    }

    if (takenImage.canceled) {
      setLoading(false);
      return;
    }
    const formData = new FormData();
    formData.append('picture', {
      uri: takenImage.assets[0].uri,
      type: `${takenImage.assets[0].type}/jpeg`,
      name: takenImage.assets[0].uri,
    });

    try {
      const data = await fetch('https://pepperdiagnosis.herokuapp.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const res = await data.json();
      setStatus(res.status);
      setOutput(res.output);
      setLoading(true);
    } catch (error) {
      console.log('error occured', error);
    }
  };
  const openGallary = async () => {
    let result = await launchImageLibraryAsync({
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setLoading(true);
    }
    if (result.canceled) {
      setLoading(false);
      return;
    }
    const formData = new FormData();
    formData.append('picture', {
      uri: result.assets[0].uri,
      type: `${result.assets[0].type}/jpeg`,
      name: result.assets[0].uri,
    });

    try {
      const data = await fetch('https://pepperdiagnosis.herokuapp.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const res = await data.json();
      setStatus(res.status);
      setOutput(res.output);
      setLoading(true);
    } catch (error) {
      console.log('error occured', error);
    }
  };

  useEffect(() => {
    formState.output = output;
    formState.url = image;
    setTimeout(() => {
      if (
        image.length !== 0 &&
        typeof formState['output'] !== null &&
        isConnected &&
        status === 'success'
      ) {
        navigation.navigate('ScanResult');
        setLoading(false);
      }
    }, 4000);
  }, [image, output]);
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <ImageBackground
      style={styles.container}
      source={require('./../assets/background.png')}
    >
      <Text style={styles.textElement}>فحص المحصول</Text>
      <View style={styles.scanContent}>
        <Pressable
          onPress={
            isConnected
              ? takeImageHandler
              : () => console.log('open the internet first')
          }
          style={styles.cameraScan}
        >
          <Image
            resizeMode="contain"
            style={styles.cameraIcon}
            source={require('./../assets/camera.png')}
          />
          <Text style={styles.whiteText}>إلتقاط صورة</Text>
        </Pressable>
        <Pressable
          onPress={
            isConnected
              ? openGallary
              : () => console.log('open the internet first')
          }
          style={styles.albumScan}
        >
          <Image
            resizeMode="contain"
            style={styles.gallaryIcon}
            source={require('./../assets/gallary.png')}
          />
          <Text style={styles.whiteText}>اختار من المعرض</Text>
        </Pressable>
      </View>
      {loading && (
        <View style={styles.loadingContainer}>
          <Lottie
            style={styles.animation}
            source={require('../assets/loading.json')}
            autoPlay
            loop
          />
          <Text style={styles.scanText}>جارى فحص الصورة</Text>
        </View>
      )}
      {!isConnected && (
        <View style={styles.errorContainer}>
          <Lottie
            style={styles.error}
            source={require('../assets/error.json')}
            autoPlay
            loop
          />
          <Text style={styles.errorText}>
            برجاء فحص اتصال الإنترنت الخاص بك
          </Text>
        </View>
      )}
    </ImageBackground>
  );
};

export default FarmScan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  textElement: {
    fontSize: 22,
    fontFamily: 'Tajawal-Bold',
  },
  scanContent: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    height: 250,
    marginTop: 5,
    shadowColor: '#000',
    elevation: 2,
  },
  cameraScan: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    marginRight: 20,
    borderRadius: 15,
    padding: 10,
    paddingVertical: 20,
    width: 130,
  },
  cameraIcon: {
    width: 50,
    height: 50,
  },

  albumScan: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 15,
    padding: 10,
    paddingVertical: 20,
    width: 130,
  },
  gallaryIcon: {
    width: 50,
    height: 50,
  },
  whiteText: {
    color: 'white',
    fontFamily: 'Tajawal-Medium',
    fontSize: 14,
  },
  loadingContainer: {
    alignItems: 'center',
  },
  scanText: {
    fontFamily: 'Tajawal-Medium',
    fontSize: 20,
    marginTop: '5%',
  },
  animation: { width: '25%', marginTop: '5%' },
  errorContainer: { alignItems: 'center', flexDirection: 'column' },
  error: {
    width: '40%',
  },
  errorText: {
    fontFamily: 'Tajawal-Bold',
    fontSize: 16,
  },
});
