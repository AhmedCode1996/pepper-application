import { useEffect } from 'react';
import { Text, StyleSheet, Image, ImageBackground, View } from 'react-native';
import { useGlobalContext } from '../../data';
const ScanResult = () => {
  const { formState } = useGlobalContext();

  useEffect(()=> {
    formState.loading = false;
    formState.status = '';
  }, [])
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/background.png')}
    >
      <View style={styles.content}>
        <Image
          resizeMode="cover"
          source={{ uri: formState['url'] }}
          style={styles.imageScan}
        />
        <Text style={styles.textScan}>The Checking Result</Text>
        <Text style={styles.result}>
          {formState.output === 1
            ? 'Healthy Pepper'
            : 'Infected Pepper'}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default ScanResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 25,
    shadowColor: '#000',
    elevation: 3,
  },
  imageScan: {
    width: 250,
    height: 250,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 15,
  },
  textScan: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
    margin: 15,
  },
  result: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#243F88',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
});
