import { useEffect, useState } from 'react';
import {
  StyleSheet,
  ImageBackground,
  Image,
  View,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
const Problems = ({ navigation }) => {
  const [behave, setBehave] = useState();
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (height < 753) {
      setBehave('-12%');
    }
  }, [width, height]);
  const [fontsLoaded] = useFonts({
    'Tajawal-Medium': require('../assets/fonts/Tajawal/Tajawal-Medium.ttf'),
    'Tajawal-Bold': require('../assets/fonts/Tajawal/Tajawal-Bold.ttf'),
    'Tajawal-Regular': require('../assets/fonts/Tajawal/Tajawal-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground
      resizeMode="stretch"
      style={styles.backgroundContainer}
      source={require('../assets/problems.png')}
    >
      <View style={styles.clickButton}>
        <Image
          style={styles.clickImage}
          resizeMode="contain"
          source={require('./../assets/أضغط.png')}
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate('Behave')}
        style={[styles.behaveButton]}
      >
        <Image
          style={styles.behaveImage}
          resizeMode="cover"
          source={require('./../assets/howbehave.png')}
        />
      </Pressable>
      <View style={styles.methodsButton}>
        <Pressable onPress={() => navigation.navigate('Method')}>
          <Image
            style={styles.methodsImage}
            resizeMode="stretch"
            source={require('./../assets/methods.png')}
          />
        </Pressable>
      </View>
      <View style={styles.reasonsButton}>
        <Pressable onPress={() => navigation.navigate('Reasons')}>
          <Image
            style={styles.reasonsImage}
            resizeMode="cover"
            source={require('./../assets/reasons.png')}
          />
        </Pressable>
      </View>
      <Image
        style={styles.bellLogo}
        resizeMode="contain"
        source={require('./../assets/belllogo.png')}
      />
    </ImageBackground>
  );
};

export default Problems;

const styles = StyleSheet.create({
  backgroundContainer: {
    height: '100%',
    position: 'relative',
  },
  clickButton: {
    position: 'absolute',
    top: -20,
    left: '20%',
  },
  clickImage: {
    width: 200,
  },
  behaveButton: {
    position: 'absolute',
    top: '13%',
    width: 150,
    height: 120,
  },
  behaveImage: {
    width: '100%',
    height: '100%',
  },
  methodsButton: {
    right: '-42%',
    top: '20%',
    width: 160,
    height: 150,
  },
  methodsImage: {
    width: '100%',
    height: '100%',
  },
  reasonsButton: {
    position: 'absolute',
    right: '6%',
    top: '40%',
    width: 130,
    height: 150,
  },
  reasonsImage: {
    width: '100%',
    height: '100%',
  },
  bellLogo: {
    bottom: 0,
    position: 'absolute',
    right: '5%',
    width: 100,
    height: 80,
  },
});
