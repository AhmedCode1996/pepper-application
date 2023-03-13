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

const FarmScan = ({ navigation }) => {
  const { formState } = useGlobalContext();
  const [image, setImage] = useState('');
  const [output, setOutput] = useState('');

  const takeImageHandler = async () => {
    const takenImage = await launchCameraAsync({
      allowsEditing: false,
      quality: 0.5,
    });

    if (!takenImage.canceled) {
      setImage(takenImage.assets[0].uri);
    }

    if (takenImage.canceled) {
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
      setOutput(res.output);
      console.log(res);
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
    }
    if (result.canceled) {
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
      setOutput(res.output);
      console.log(res);
    } catch (error) {
      console.log('error occured', error);
    }
  };

  useEffect(() => {
    formState['output'] = output;
    formState['url'] = image;

    setTimeout(() => {
      if (image.length !== 0 && typeof formState['output'] !== null) {
        navigation.navigate('ScanResult');
      }
    }, 3000);
  }, [image, output]);
  return (
    <ImageBackground
      style={styles.container}
      source={require('./../assets/background.png')}
    >
      <Text style={styles.textElement}>فحص المحصول</Text>
      <View style={styles.scanContent}>
        <Pressable onPress={takeImageHandler} style={styles.cameraScan}>
          <Image
            resizeMode="contain"
            style={styles.cameraIcon}
            source={require('./../assets/camera.png')}
          />
          <Text style={styles.whiteText}>إلتقاط صورة</Text>
        </Pressable>
        <Pressable onPress={openGallary} style={styles.albumScan}>
          <Image
            resizeMode="contain"
            style={styles.gallaryIcon}
            source={require('./../assets/gallary.png')}
          />
          <Text style={styles.whiteText}>اختار من المعرض</Text>
        </Pressable>
      </View>
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
    fontWeight: 'bold',
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
    width: 120,
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
    width: 120,
  },
  gallaryIcon: {
    width: 50,
    height: 50,
  },
  whiteText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
