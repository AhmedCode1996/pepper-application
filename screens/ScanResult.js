import { useState } from 'react';
import { Text, StyleSheet, Image, ImageBackground, View } from 'react-native';
const ScanResult = () => {
  const [result, setResult] = useState(false);
  return (
    <ImageBackground
      style={styles.container}
      source={require('./../assets/background.png')}
    >
      <View style={styles.content}>
        <Image style={styles.imageScan} />
        <Text style={styles.textScan}>نتيجة الفحص</Text>
        <Text style={styles.result}>
          {result ? 'ثمرة الفلفل مصابة' : 'ثمرة الفلفل غير مصابة'}
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
  },
  imageScan: {
    width: 250,
    height: 250,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 15,
  },
  textScan: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    margin: 15,
  },
  result: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#243F88',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
});
