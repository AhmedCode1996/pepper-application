import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
const FarmScan = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('./../assets/background.png')}
    >
      <Text style={styles.textElement}>فحص المحصول</Text>
      <View style={styles.scanContent}>
        <View style={styles.cameraScan}>
          <Image
            resizeMode="contain"
            style={styles.cameraIcon}
            source={require('./../assets/camera.png')}
          />
          <Text style={styles.whiteText}>إلتقاط صورة</Text>
        </View>
        <View style={styles.albumScan}>
          <Image
            resizeMode="contain"
            style={styles.gallaryIcon}
            source={require('./../assets/gallary.png')}
          />
          <Text style={styles.whiteText}>اختار من المعرض</Text>
        </View>
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
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 5,
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
    marginTop: 20,
    borderWidth: 1,
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
